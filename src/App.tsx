import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { ControlPanel } from "./ControlPanel";
import { RobotArm } from "./RobotArm";

function App() {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const handleRotate = (dir: "left" | "right" | "up" | "down") => {
    setRotation(([x, y, z]) => {
      const step = Math.PI / 8;
      switch (dir) {
        case "up":
          return [x - step, y, z];
        case "down":
          return [x + step, y, z];
        case "left":
          return [x, y - step, z];
        case "right":
          return [x, y + step, z];
        default:
          return [x, y, z];
      }
    });
  };

  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.6} />
        <hemisphereLight
          color={0xffffff}
          groundColor={0x444444}
          intensity={0.8}
        />
        <directionalLight position={[5, 10, 7.5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 10, -7.5]} intensity={0.8} />

        <Suspense fallback={null}>
          <group rotation={rotation}>
            <RobotArm />
          </group>
        </Suspense>

        <OrbitControls />
      </Canvas>
      <ControlPanel onRotate={handleRotate} />
    </>
  );
}

export default App;
