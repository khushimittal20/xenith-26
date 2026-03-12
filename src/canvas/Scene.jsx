import { Suspense } from "react";
import VideoBackground from "../components/VideoBackground";
import Samurai from "../components/Samurai";
import Logo3D from "../components/Logo3D";

export default function Scene() {
  return (
    <>
      {/* 🎥 VIDEO FOG BACKGROUND — ALWAYS FIRST */}
      <Suspense fallback={null}>
        <VideoBackground />
      </Suspense>

      {/* 🖤 LOGO (Three.js animated, unchanged) */}
      <Logo3D />

      {/* ⚔️ SAMURAI (UNCHANGED) */}
      <Suspense fallback={null}>
        <Samurai />
      </Suspense>

      {/* 💡 LIGHTING */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 4, 3]} intensity={0.7} />
    </>
  );
}
