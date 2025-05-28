"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Presentation() {
  const [showFirst, setShowFirst] = useState(true);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => {
        setShowFirst((prev) => !prev);
        setGlitching(false);
      }, 300); // tempo da animação "glitch"
    }, 30000); // alternância a cada 20 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed flex p-6 bg-black/10 w-full justify-between text-white z-50 backdrop-blur-sm items-center">
      <div
        className={`transition-opacity ${glitching ? "animate-glitch" : ""}`}
      >
        {showFirst ? (
          <Image
            src="/assets/logo.png"
            width={1280}
            height={1280}
            className="w-6 object-scale-down"
            alt="Logo"
          />
        ) : (
          <Image
            src="/assets/bereshitpalavra.png"
            width={1280}
            height={1280}
            className="w-20 object-scale-down"
            alt="Logo Alternativo"
          />
        )}
      </div>

      <Menu />
    </div>
  );
}
