import { Menu } from "lucide-react";

export default function Presentation() {
  return (
    <div className="fixed flex p-6 bg-black/40 w-full  justify-between text-white z-50 backdrop-blur-sm">
      <span className="font-bold">Bereshit</span>
      <Menu />
    </div>
  );
}
