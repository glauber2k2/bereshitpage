"use client";
import { Menu } from "lucide-react";
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
      }, 300);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed flex p-6 bg-black/10 w-full justify-between text-white z-50 backdrop-blur-sm items-center">
      <div
        className={`transition-opacity ${glitching ? "animate-glitch" : ""}`}
      >
        <img
          src={showFirst ? "/assets/logo.png" : "/assets/bereshitpalavra.png"}
          className={`object-scale-down ${showFirst ? "w-6" : "w-20"}`}
          alt="Logo"
        />
      </div>
      <Menu />
    </div>
  );
}
