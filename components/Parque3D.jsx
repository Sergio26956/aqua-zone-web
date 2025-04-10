import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ path }) => {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    new GLTFLoader().load(path, setModel);
  }, [path]);

  return model ? <primitive object={model.scene} /> : null;
};

export default function Parque3D({ modelPath }) {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Canvas>
        <Suspense fallback={<div>Loading Model...</div>}>
          <Model path={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
