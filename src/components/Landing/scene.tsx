"use client";

import { Canvas } from "@react-three/fiber";
import Mesh from "./mesh";

export default function Scene() {
    return (
        <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
            <Canvas
                gl={{ alpha: true }}
                camera={{
                    position: [0, 0, 3],
                    fov: 50,
                }}
            >
                <Mesh />
            </Canvas>
        </div>
    );
}