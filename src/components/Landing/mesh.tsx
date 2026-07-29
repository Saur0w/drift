"use client";

import { useTexture, useCursor } from "@react-three/drei";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/ui/Shaders";
import { Suspense, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const PLANE_WIDTH = 1.5;
const PLANE_HEIGHT = 1.1;

function ShaderPlane() {
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const texture = useTexture("/images/flower.jpg");

    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uTime: { value: 0 },
        }),
        [texture]
    );

    useFrame((_, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value += delta;
        }
    });

    return (
        <mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <planeGeometry args={[PLANE_WIDTH, PLANE_HEIGHT, 32, 32]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                wireframe={false}
            />
        </mesh>
    );
}

export default function Mesh() {
    return (
        <Suspense fallback={null}>
            <ShaderPlane />
        </Suspense>
    );
}