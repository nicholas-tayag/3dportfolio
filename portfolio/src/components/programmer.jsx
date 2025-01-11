/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Programmer = () => {
  // Load the GLB model
  const Model = () => {
    const { scene } = useGLTF('/programmer.glb'); 
    const modelRef = useRef();

    // Add a slow spin animation
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.0000775; 
        modelRef.current.rotation.x += 0.0000775
      }
    });

    return (
      <primitive
        object={scene}
        ref={modelRef}
        scale={.75} 
        position={[0, 0, 0]} 
      />
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
      }}
    >
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        camera={{
          position: [0, 1.5, 4], 
          fov: 40,
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        {/* Model */}
        <Model />
        {/* Controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Programmer;
