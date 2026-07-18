import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment, Icosahedron, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const MathShape = ({ position, color, scale, speed, distort }) => {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.8;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <Icosahedron ref={meshRef} args={[1, 0]} scale={scale}>
        <MeshDistortMaterial 
          color={color} 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.5} 
          roughness={0.2}
          distort={distort}
          speed={speed * 2}
        />
      </Icosahedron>
    </Float>
  );
};

const DataSphere = ({ position, color, scale }) => {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={position}>
      <Sphere args={[1, 32, 32]} scale={scale}>
        <MeshDistortMaterial 
          color={color} 
          envMapIntensity={2} 
          metalness={0.8} 
          roughness={0.1} 
          distort={0.4} 
          speed={2} 
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Abstract representations of Math/Data/Code */}
      <MathShape position={[4, 2, -5]} color="#4f46e5" scale={1.5} speed={0.2} distort={0.2} />
      <MathShape position={[-5, -2, -8]} color="#0ea5e9" scale={2} speed={0.15} distort={0.3} />
      <MathShape position={[6, -4, -10]} color="#8b5cf6" scale={1.2} speed={0.3} distort={0.1} />
      
      <DataSphere position={[-4, 3, -6]} color="#38bdf8" scale={1.2} />
      <DataSphere position={[5, -1, -7]} color="#6366f1" scale={1.8} />

      <Environment preset="city" />
    </>
  );
};

const CanvasScene = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default CanvasScene;
