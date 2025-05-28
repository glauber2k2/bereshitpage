/* eslint-disable @next/next/no-img-element */
import { Menu } from "lucide-react";

export default function Presentation() {
  return (
    <div className="fixed flex p-6 bg-black/10 w-full justify-between text-white z-50 backdrop-blur-sm items-center">
      <img
        src="/assets/bereshitpalavra.png"
        alt="Logo"
        className="w-20 object-scale-down animate-glitchEvery30s"
      />

      <Menu />
    </div>
  );
}
