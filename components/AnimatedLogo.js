import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

function Logo() {
  return (
    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      {/* Logo en 3D con rotación */}
      <boxGeometry args={[3, 1, 1]} />
      <meshStandardMaterial color="orange" />
      <Html position={[0, 1, 0]}>
        <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
          AQUAZONE WATERPARK
        </div>
      </Html>
    </mesh>
  );
}

export default function AnimatedLogo() {
  return (
    <Canvas style={{ height: '300px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <OrbitControls enableZoom={false} />
      <Logo />
    </Canvas>
  );
}
