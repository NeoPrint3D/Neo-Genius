"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Loader,
  Text,
  MeshTransmissionMaterial,
  Stats,
  Float,
  Stars,
  Caustics,
  ContactShadows,
  Sparkles,
  CameraShake,
  SpotLight,
  OrbitControls,
  Box,
  Sphere,
  Dodecahedron,
  Polyhedron,
  RoundedBox,
  Torus,
} from "@react-three/drei";

import * as THREE from "three";
import { Suspense } from "react";

function Model() {
  const { nodes } = useGLTF("/assets/models/card.glb");

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
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight />
      <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />

      <Suspense fallback={null}>
        <Float
          rotationIntensity={2}
          floatIntensity={3}
          position={[0, 0, 0]}
          speed={1}
        >
          <Torus
            args={[1, 0.3, 16, 128]}
            position={[-1.5, 1.75, -2]}
            castShadow
          >
            <MeshTransmissionMaterial
              color={"#00bfff"}
              distortionScale={0}
              temporalDistortion={0}
            />
          </Torus>
        </Float>
        <Float
          rotationIntensity={2}
          floatIntensity={2}
          position={[0, 0, 0]}
          speed={2}
        >
          <RoundedBox
            radius={0.2}
            args={[1.5, 1.5, 1.5]}
            position={[-2, -1.25, -1.5]}
          >
            <MeshTransmissionMaterial
              color={"#ff9770"}
              distortionScale={0}
              temporalDistortion={0}
            />
          </RoundedBox>
        </Float>
        <Float>
          <Sphere args={[1, 32, 32]} position={[2, 1, -1.5]}>
            <MeshTransmissionMaterial
              color={"#ef629f"}
              distortionScale={0}
              temporalDistortion={0}
            />
          </Sphere>
        </Float>
        <Float
          position={[0, 0, 0]}
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <Model />
        </Float>
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
