// App.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Grid, Stats } from "@react-three/drei";
import { Suspense, useState } from "react";
import { RobotArm } from "./RobotArm";

function App() {
  const [rotation] = useState<[number, number, number]>([0, 0, 0]);

  // const handleRotate = (dir: "left" | "right" | "up" | "down") => {
  //   setRotation(([x, y, z]) => {
  //     const step = Math.PI / 8;
  //     switch (dir) {
  //       case "up":
  //         return [x - step, y, z];
  //       case "down":
  //         return [x + step, y, z];
  //       case "left":
  //         return [x, y - step, z];
  //       case "right":
  //         return [x, y + step, z];
  //       default:
  //         return [x, y, z];
  //     }
  //   });
  // };

  return (
    <>
      <Canvas
        shadows
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 3.5, 10], fov: 40, near: 0.1, far: 100 }}
        gl={{ antialias: true }}
      >
        <fog attach="fog" args={["#d9d9d9", 10, 45]} />

        {/* Lighting Fix */}
        <ambientLight intensity={0.8} />
        <directionalLight
          castShadow
          position={[10, 15, 10]}
          intensity={2.0}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Infinite-Looking Check Pattern Grid */}
        <Grid
          position={[0, 0.001, 0]}
          sectionSize={1}
          cellSize={0.25}
          cellThickness={0.6}
          cellColor="#aaaaaa"
          sectionColor="#666666"
          fadeDistance={30}
          fadeStrength={1}
          infiniteGrid
        />

        <Suspense fallback={null}>
          <group rotation={rotation} position={[0, 0.01, 0]}>
            <RobotArm />
          </group>
        </Suspense>

        <OrbitControls maxPolarAngle={Math.PI / 2.01} minPolarAngle={0} />
        <Sky sunPosition={[100, 20, 100]} turbidity={5} />
        <Stats showPanel={0} className="fps-stats" />
      </Canvas>
    </>
  );
}

export default App;
