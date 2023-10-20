"use client";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  MeshTransmissionMaterial,
  Float,
  RoundedBox,
  Torus,
  Icosahedron,
} from "@react-three/drei";

import { Suspense } from "react";

function Model() {
  const { nodes } = useGLTF("/assets/models/card.glb") as any;

  return (
    <mesh
      geometry={nodes.main.geometry}
      position={[-0.75, -0.5, 0]}
      scale={25}
      rotation={[1.5, 0, 0]}
    >
      <MeshTransmissionMaterial
        samples={128}
        resolution={2048}
        anisotropy={2}
        thickness={0.5}
        roughness={0.25}
        toneMapped={true}
        distortionScale={0}
        temporalDistortion={0}
      />
    </mesh>
  );
}

export default function HomeModelHero() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} className="lg:translate-x-[5rem]">
      <ambientLight />
      <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />

      <Suspense fallback={null}>
        <Float
          rotationIntensity={1}
          floatIntensity={5}
          position={[0, -0.5, 0]}
          speed={-5}
        >
          <Torus args={[1, 0.3, 16, 128]} position={[0, 0, -4]} castShadow>
            <MeshTransmissionMaterial
              color={"#00bfff"}
              distortionScale={0}
              temporalDistortion={0}
            />
          </Torus>
        </Float>

        <Float
          rotationIntensity={2}
          floatIntensity={5}
          position={[0, -0.5, 0]}
          speed={3}
        >
          <Icosahedron args={[1, 0]} position={[0, 0, -2]}>
            <MeshTransmissionMaterial
              color={"#ff9770"}
              distortionScale={0}
              temporalDistortion={0}
            />
          </Icosahedron>
        </Float>
        <Float
          rotationIntensity={3}
          floatIntensity={5}
          position={[0, -0.5, 0]}
          speed={-2}
        >
          <RoundedBox radius={0.05} args={[1.5, 1.5]} position={[0, 0, -5]}>
            <MeshTransmissionMaterial
              color={"#ef629f"}
              distortionScale={0}
              temporalDistortion={0}
            />
          </RoundedBox>
        </Float>
        <Float
          position={[0, -0.25, 1.75]}
          speed={2}
          rotationIntensity={2}
          floatIntensity={1}
        >
          <Model />
        </Float>
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
