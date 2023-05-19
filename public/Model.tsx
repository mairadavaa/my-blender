import { Canvas } from 'react-three-fiber';
import { useGLTF, Preload } from 'react-three-fiber';
import { Suspense } from 'react';

const Zurag = () => {
    const gltf = useGLTF('./23blend.glb');
    return <primitive object={gltf.scene} />;
  }
  
function Model()  {
    return (
      <Canvas>
        <Suspense fallback={null}>
          <Preload all />
          <Zurag/>
        </Suspense>
      </Canvas>
    );
  }
export default Model