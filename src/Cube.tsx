import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type Props = {
  rotation: [number, number, number];
};

export function Cube({ rotation }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Update rotation reactively
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(...rotation);
    }
  }, [rotation]);

  const geometry = new THREE.BoxGeometry();
  const materials = [
    new THREE.MeshBasicMaterial({ color: "red" }),
    new THREE.MeshBasicMaterial({ color: "green" }),
    new THREE.MeshBasicMaterial({ color: "blue" }),
    new THREE.MeshBasicMaterial({ color: "yellow" }),
    new THREE.MeshBasicMaterial({ color: "cyan" }),
    new THREE.MeshBasicMaterial({ color: "magenta" }),
  ];

  return <mesh ref={meshRef} geometry={geometry} material={materials} />;
}
