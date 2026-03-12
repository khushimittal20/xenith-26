import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Scene from "./canvas/Scene";
import "./style.css";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Canvas
      gl={{ alpha: true }}
      dpr={[1, 2]}
      camera={{
        fov: isMobile ? 65 : 50,
        near: 0.1,
        far: 100,
        position: [0, 0, isMobile ? 8 : 6],
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene isMobile={isMobile} />
    </Canvas>
  );
}