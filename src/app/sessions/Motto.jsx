export default function Motto() {
  return (
    <div className="relative min-h-screen px-8 pt-24 text-white bg-[url('/assets/lucasesamara.jpg')] bg-cover bg-center flex flex-col ">
      {/* Overlay para escurecer e fazer blur */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 pb-8 flex flex-col">
        <h1 className="text-4xl text-center font-extrabold">
          Nosso lema<span className="text-turquoise-400">.</span>
        </h1>

        <div className="flex flex-col gap-6 mt-8">
          <span className="">
            <h2 className="text-xl">
              <span className="text-turquoise-400 font-bold text-4xl">1. </span>
              Glorificar a Deus
            </h2>
            <p className="mt-4 text-xs">
              Tudo que fazemos, desde arrecadação de alimentos, roupas e
              sapatos, até as programações formais e informais da equipe tem
              como objetivo honrar a Deus a todo instante, tendo em vista que a
              gincana é totalmente dele.
            </p>
          </span>

          <span className="text-end">
            <h2 className="text-xl">
              <span className="text-turquoise-400 font-bold text-4xl">2. </span>
              Amar pessoas
            </h2>
            <p className="mt-4 text-xs">
              A gincana é mais do que sobre ganhar, é sobre construir laços
              dentro da equipe, sobre ser empático com nossos irmãos, sejam eles
              Beresinhos ou de outra equipe, nós entendemos que a gincana é
              sobre alcançar almas, seja através da nossa conta do Instagram,
              através das nossas reuniões e cultos e com certeza , queremos
              transbordar desse amor em Igaracy
            </p>
          </span>

          <span className="">
            <h2 className="text-xl">
              <span className="text-turquoise-400 font-bold text-4xl">3. </span>
              Propagar Jesus
            </h2>
            <p className="mt-4 text-xs">
              Tudo o que fazemos tem um cunho Evangelístico, queremos que
              através de nossas escolhas e ações Jesus seja manifesto, que nosso
              amor, que a nossa conduta releve Jesus, pois maior do que a
              Bereshit, é o nome dele!
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
