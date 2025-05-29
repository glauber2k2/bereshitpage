export default function TeamTheme() {
  return (
    <div
      id="culto"
      className="relative min-h-screen px-8 pt-24 text-white bg-[url('/assets/background.jpg')] bg-cover bg-center flex flex-col "
    >
      {/* Overlay para escurecer e fazer blur */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 pb-8  flex flex-col">
        <div className="text-center font-bold text-2xl uppercase sm:text-7xl">
          <h1>Um novo nome,</h1>
          <h1 className="bg-turquoise-400">Uma nova vida.</h1>
        </div>
        <span className="text-center mt-4 sm:text-3xl">Gen 26 ao 36.</span>

        <div className="text-center">
          <h1 className="text-3xl text-center font-extrabold mt-16 sm:text-8xl">
            #SAVETHE<span className="text-turquoise-400">DATE</span>
          </h1>
          <h2 className="text-8xl text-center text-turquoise-4a00 font-extrabold">
            19/07
          </h2>
          <p className="text-xl font-semibold bg-turquoise-400 sm:text-6xl">
            Sábado ás 19:30
          </p>
        </div>

        <div className="text-center mt-20">
          <h1 className="text-2xl font-semibold uppercase sm:text-6xl">
            E você é o nosso
          </h1>
          <h1 className=" text-4xl font-extrabold uppercase sm:text-7xl">
            convidado
          </h1>
          <p className="text-xl mt-4 sm:text-3xl">Deus quer falar com você!</p>
        </div>
      </div>
    </div>
  );
}
