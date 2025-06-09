"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function Leader() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const about = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: "-50px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-50px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-50px" });
  const isInViewAbout = useInView(about, { once: true, margin: "-50px" });

  return (
    <div className=" flex flex-col bg-black text-white px-8 py-14" id="sobre">
      <motion.h1
        ref={ref3}
        initial={{ scale: 0.5 }}
        animate={isInView3 ? { scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white text-center sm:text-start w-full text-3xl font-bold sm:text-4xl"
      >
        Quem somos?
      </motion.h1>

      <motion.div
        className="text-justify text-xs sm:text-base mt-6 border-l-4 border-turquoise-400 pl-4"
        ref={about}
        initial={{ opacity: 0, y: 20 }}
        animate={isInViewAbout ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        Somos uma equipe de uma gincana missionaria da Rede Plenus, rede de
        jovens da igreja IBM - Igreja Batista Miramar, e temos o objetivo de
        juntar recurso para um avanço missionário que ocorrerá na cidade de
        Igaracy, cidade que fica no interior da Paraiba. você pode acompanhar as
        atualizações desse objetivo junto conosco acompanhando nossa pagina do{" "}
        <a
          href="https://instagram.com/bereshit_equipe"
          className="underline text-turquoise-400"
          target="_blank"
        >
          instagram
        </a>
        .
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
        {/* Card Lucas */}
        <motion.div
          ref={ref1}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView1 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 mt-10 rounded-3xl overflow-hidden min-h-52 sm:min-h-96"
        >
          <div className="bg-[url('/assets/lucas.jpg')] bg-cover bg-center sm:bg-top" />
          <div className="p-6 bg-turquoise-500">
            <h1 className="text-xl font-bold sm:text-4xl">Lucas</h1>
            <h2 className="text-sm font-semibold sm:text-xl">Líder</h2>
            <ul className="text-sm mt-2 sm:text-xl sm:mt-10">
              <li>Proativo</li>
              <li>Ouvinte</li>
              <li>Prudente</li>
            </ul>
          </div>
        </motion.div>

        {/* Card Samara */}
        <motion.div
          ref={ref2}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView2 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 mt-10 rounded-3xl overflow-hidden min-h-52"
        >
          <div className="bg-[url('/assets/samara.jpg')] bg-cover bg-center sm:bg-top" />
          <div className="p-6 bg-turquoise-500">
            <h1 className="text-xl font-bold sm:text-4xl">Samara</h1>
            <h2 className="text-sm font-semibold sm:text-xl">Co-Líder</h2>
            <ul className="text-sm mt-2 sm:text-xl sm:mt-10">
              <li>Acolhedora</li>
              <li>Dedicada</li>
              <li>Prestativa</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
