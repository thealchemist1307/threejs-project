import React, { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

export const RobotArm = () => {
  const { scene } = useGLTF("/assets/robot_arm.glb") as any;

  const parts = useMemo(
    () => ({
      base: scene.getObjectByName("base_mesh"),
      part1: scene.getObjectByName("part_1_mesh"),
      part2: scene.getObjectByName("part_2_mesh"),
      part3: scene.getObjectByName("part_3_mesh"),
      part4: scene.getObjectByName("part_4_mesh"),
      clawHead: scene.getObjectByName("claw_head_mesh"),
      clawJoint: scene.getObjectByName("claw_joint_mesh"),
      clawLeft: scene.getObjectByName("claw_left_mesh"),
      clawRight: scene.getObjectByName("claw_right_mesh"),
    }),
    [scene]
  );

  const {
    base,
    part1,
    part2,
    part3,
    part4,
    clawHead,
    clawJoint,
    clawLeft,
    clawRight,
  } = useControls({
    base: { value: 0, min: -Math.PI, max: Math.PI },
    part1: { value: 0, min: -Math.PI / 2, max: Math.PI / 2 },
    part2: { value: 0, min: -Math.PI / 2, max: Math.PI / 2 },
    part3: { value: 0, min: -Math.PI / 2, max: Math.PI / 2 },
    part4: { value: 0, min: -Math.PI / 2, max: Math.PI / 2 },
    clawHead: { value: 0, min: -Math.PI / 4, max: Math.PI / 4 },
    clawJoint: { value: 0, min: -Math.PI / 4, max: Math.PI / 4 },
    clawLeft: { value: 0, min: -0.3, max: 0 },
    clawRight: { value: 0, min: 0, max: 0.3 },
  });

  useEffect(() => {
    console.log("Applying rotation:", {
      base,
      part1,
      part2,
      part3,
      part4,
      clawHead,
      clawJoint,
      clawLeft,
      clawRight,
    });
    if (parts.base) parts.base.rotation.y = base;
    if (parts.part1) parts.part1.rotation.z = part1;
    if (parts.part2) parts.part2.rotation.z = part2;
    if (parts.part3) parts.part3.rotation.z = part3;
    if (parts.part4) parts.part4.rotation.z = part4;
    if (parts.clawHead) parts.clawHead.rotation.y = clawHead;
    if (parts.clawJoint) parts.clawJoint.rotation.z = clawJoint;
    if (parts.clawLeft) parts.clawLeft.rotation.z = clawLeft;
    if (parts.clawRight) parts.clawRight.rotation.z = -clawRight;
  }, [
    base,
    part1,
    part2,
    part3,
    part4,
    clawHead,
    clawJoint,
    clawLeft,
    clawRight,
    parts,
  ]);

  return <primitive object={scene} />;
};
