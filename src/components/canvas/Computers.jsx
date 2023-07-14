import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber';
//help us to draw on our canvas
//useGLTF allow us to import 3D models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

//three.js react-fiber canvas
const Computers = ({isMobile}) => {
  const computer=useGLTF('./desktop_pc/scene.gltf')

  return (
    //use mesh instead of div when creating 3D model
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={0.7} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0,-2,-0.5] : [0,-4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas=()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    //Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    //Add the callback function as a listener 
    //for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //Remove the listener when the component is unmounted
    return ()=>{
      mediaQuery,removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov:25}} //fov: field of view
      gl={{preserveDrawingBuffer:true}}
    >
      {/* Use Suspense to have loader while we render 3D model */}
      <Suspense fallback={<CanvasLoader />}> 
        {/* Allow us to interact with our model */}
        <OrbitControls 
          enableZoom={false}
          //Allow us to limit the angle which the user interact with
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  );
};

export default ComputersCanvas;