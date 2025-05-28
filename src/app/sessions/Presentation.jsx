import { ArrowDown } from "lucide-react";

export default function Presentation() {
  return (
    <div className="relative min-h-screen px-8 pt-24 text-white bg-[url('/assets/earth.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay escurecido e blur */}
      <div className="absolute inset-0 bg-black/80  z-0" />

      {/* Gradiente inferior */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-0" />

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 pb-8 flex flex-col">
        <h1 className="text-9xl font-bold text-center">Olá</h1>
        <h1 className="text-3xl font-bold mb-10 text-center">Berezinho(a)</h1>
        <p className="text-2xl font-bold mb-2">בְּרֵאשִׁית</p>
        <article className="text-lg text-pretty mb-4">
          Palavra hebraica que significa &quot;no princípio&quot; ou &quot;no
          começo&quot;.
        </article>

        <div className="w-full h-56 bg-black flex items-center justify-center">
          aqui vai o video
        </div>
      </div>

      <ArrowDown className="animate-bounce absolute self-center bottom-4 right-1/2 z-10" />
    </div>
  );
}
