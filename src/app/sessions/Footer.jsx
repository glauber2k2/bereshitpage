import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className=" bg-black px-8 py-10 flex flex-col text-xs sm:text-base">
      <h1 className="text-lg font-bold mb-4 text-white">Equipe Bereshit</h1>
      <p className="text-white/70">
        Bereshit bara Elohim et ha-shamayim ve&#39;et ha-arets
      </p>

      <a className="text-white/70 mt-10 flex items-center gap-2">
        <Instagram size={16} />
        Instagram
      </a>

      <div className="mt-10 border-t text-white/70 pt-8 border-white/70">
        © {new Date().getFullYear()} Equipe Bereshit. Todos os direitos
        reservados.
      </div>
    </div>
  );
}
