export default function Leader() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white px-8 py-24">
      <h1 className="text-white text-center w-full text-4xl font-bold ">
        Conheça os nossos lideres.
      </h1>
      <div className="grid grid-cols-1">
        <div className=" grid grid-cols-2 mt-10 rounded-3xl overflow-hidden min-h-64">
          <div className="bg-[url('/assets/lucas.jpg')] bg-cover bg-center" />
          <div className="p-6 bg-turquoise-500">
            <h1 className="text-2xl font-bold">Lucas</h1>
            <h2 className="text-lg font-semibold">Líder</h2>
            <ul className="mt-2">
              <li>Proativo</li>
              <li>Ouvinte</li>
              <li>Prudente</li>
            </ul>
          </div>
        </div>

        <div className=" grid grid-cols-2 mt-10 rounded-3xl overflow-hidden min-h-64">
          <div className="bg-[url('/assets/samara.jpg')] bg-cover bg-center" />
          <div className="p-6 bg-turquoise-500">
            <h1 className="text-2xl font-bold">Samara</h1>
            <h2 className="text-lg font-semibold">Co-Líder</h2>

            <ul className="mt-2">
              <li>Acolhedora</li>
              <li>Dedicada</li>
              <li>Prestativa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
