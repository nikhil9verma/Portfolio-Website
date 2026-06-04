import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Bubbles() {
  const count = 40;
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  
  const bubbles = useMemo(() => {
    return new Array(count).fill().map(() => {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 20 + 5;
      return {
        home: new THREE.Vector3(x, y, z),
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(0, 0, 0),
        scale: 0.05 + Math.random() * 0.3,
        speed: 0.1 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smoothly interpolate mouse position
    mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.1;
    mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.1;

    bubbles.forEach((bubble, i) => {
      // Calculate approximate mouse position in world space at this bubble's Z depth
      const depth = 15 - bubble.position.z; 
      const heightAtDepth = 2 * depth * Math.tan(THREE.MathUtils.degToRad(30)); // 30 is half of 60deg FOV
      const widthAtDepth = heightAtDepth * (window.innerWidth / window.innerHeight);
      
      const mouseWorldX = mouse.current.x * (widthAtDepth / 2);
      const mouseWorldY = mouse.current.y * (heightAtDepth / 2);

      // Distance between mouse and bubble
      const dx = bubble.position.x - mouseWorldX;
      const dy = bubble.position.y - mouseWorldY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Repel radius depends on z-depth (closer balls have larger repel radius so they are affected more)
      const repelRadius = 4 + (bubble.position.z * 0.3); 
      
      // Apply repulsion force if mouse is near
      if (dist < repelRadius) {
        const force = (repelRadius - dist) / repelRadius;
        bubble.velocity.x += (dx / dist) * force * 0.15;
        bubble.velocity.y += (dy / dist) * force * 0.15;
      }
      
      // Spring force returning to home position
      bubble.velocity.x += (bubble.home.x - bubble.position.x) * 0.01;
      bubble.velocity.y += (bubble.home.y - bubble.position.y) * 0.01;
      
      // Damping (friction)
      bubble.velocity.multiplyScalar(0.92);
      
      // Update position
      bubble.position.add(bubble.velocity);

      // Subtle floating on top of the physics position
      const floatX = Math.sin(time * bubble.speed + bubble.offset) * 2;
      const floatY = Math.cos(time * bubble.speed * 0.8 + bubble.offset) * 2;
      
      dummy.position.set(
        bubble.position.x + floatX,
        bubble.position.y + floatY,
        bubble.position.z
      );
      dummy.scale.setScalar(bubble.scale + Math.sin(time * bubble.speed * 2 + bubble.offset) * 0.05);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial 
        color="#db2777"
        transparent
        opacity={0.15} // Faded color
        roughness={0.1}
        transmission={0.9}
        thickness={1}
        envMapIntensity={1}
      />
    </instancedMesh>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ff00ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#00ffff" />
        <Bubbles />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
