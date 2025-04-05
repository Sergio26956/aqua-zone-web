import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

export default function Hero() {
  return (
    <Canvas camera={{ position: [0, 5, 15] }}>
      <Suspense fallback={null}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
