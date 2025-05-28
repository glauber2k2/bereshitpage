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
      <div className="px-8 gap-6 flex flex-col">
        <h1 className=" text-center w-full text-4xl font-bold text-turquoise-400">
          Ajude quem precisa!
        </h1>

        <h2 className=" font-semibold">
          Participe da nossa campanha de arrecadação!
        </h2>
        <p className="text-justify text-white text-lg ">
          Estamos nos preparando para um evangelismo na cidade de Igaracy, onde
          vamos levar o amor de Deus e mantimentos para quem mais precisa.
        </p>

        <p className="text-lg text-justify">
          Sua contribuição pode transformar vidas. Junte-se a nós nessa missão!
        </p>

        <button
          type="button"
          className="px-4 py-2 rounded-full bg-turquoise-100 text-turquoise-700 font-bold my-2"
        >
          Quero ajudar!
        </button>
      </div>
    </div>
  );
}
