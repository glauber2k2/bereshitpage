import { Menu } from "lucide-react";
import Image from "next/image";

export default function Presentation() {
  return (
    <div className="fixed flex p-6 bg-black/10 w-full justify-between text-white z-50 backdrop-blur-sm items-center">
      <Image
        src="/assets/bereshitpalavra.png"
        width={1280}
        height={1280}
        className="w-20 object-scale-down"
        alt="Logo "
      />

      <Menu />
    </div>
  );
}
