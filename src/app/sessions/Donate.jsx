import Image from "next/image";

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col bg-turquoise-900 text-white ">
      <Image
        src="/assets/donate.jpg"
        width={1280}
        height={1280}
        className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black,transparent)]"
        alt="Donate"
      />
      <div className="px-8 gap-4 flex flex-col">
        <h1 className=" text-center w-full text-5xl font-bold text-turquoise-400">
          Ajude quem precisa!
        </h1>

        <p className="text-justify text-white font-semibold text-lg ">
          Participe da nossa campanha de arrecadação! Estamos nos preparando
          para um evangelismo na cidade de Teste, onde vamos levar o amor de
          Deus e mantimentos para quem mais precisa. Sua contribuição pode
          transformar vidas. Junte-se a nós nessa missão!
        </p>
      </div>
    </div>
  );
}
