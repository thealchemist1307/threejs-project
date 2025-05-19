import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Cube } from "./Cube";
import { ControlPanel } from "./ControlPanel";

function App() {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const handleRotate = (dir: "left" | "right" | "up" | "down") => {
    setRotation(([x, y, z]) => {
      const step = Math.PI / 8; // 22.5° per step
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
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube rotation={rotation} />
        <OrbitControls />
      </Canvas>
      <ControlPanel onRotate={handleRotate} />
    </>
  );
}

export default App;
