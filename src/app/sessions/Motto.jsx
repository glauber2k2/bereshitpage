"use client";

import { useInView, motion } from "motion/react";
import { useRef } from "react";

export default function Motto() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  return (
    <div className="relative min-h-screen px-8  text-white bg-[url('/assets/lucasesamara.jpg')] bg-cover bg-center flex flex-col">
      {/* Overlay para escurecer */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Conteúdo */}
      <div className="relative z-10 pb-8 flex flex-col">
        {/* Título */}
        <motion.h1
          ref={ref1}
          initial={{ scale: 0 }}
          animate={isInView1 ? { scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl text-center font-extrabold sm:mt-16"
        >
          Nosso lema<span className="text-turquoise-400">.</span>
        </motion.h1>

        {/* Itens */}
        <div className="flex flex-col gap-8 mt-8">
          {/* Item 1 - entra da esquerda */}
          <motion.div
            ref={ref2}
            initial={{ x: -200, opacity: 0 }}
            animate={isInView2 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-5xl">
              <span className="text-turquoise-400 font-bold text-4xl sm:text-7xl">
                1.{" "}
              </span>
              Glorificar a Deus
            </h2>
            <p className="mt-4 text-xs text-justify sm:text-3xl sm:w-3/4">
              Tudo que fazemos, desde arrecadação de alimentos, roupas e
              sapatos, até as programações formais e informais da equipe, tem
              como objetivo honrar a Deus a todo instante, tendo em vista que a
              gincana é totalmente dEle.
            </p>
          </motion.div>

          {/* Item 2 - entra da direita */}
          <motion.div
            ref={ref3}
            initial={{ x: 200, opacity: 0 }}
            animate={isInView3 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-end"
          >
            <h2 className="text-xl sm:text-5xl">
              <span className="text-turquoise-400 font-bold text-4xl sm:text-7xl">
                2.{" "}
              </span>
              Amar pessoas
            </h2>
            <p className="mt-4 text-xs text-justify sm:text-3xl sm:w-3/4 ml-auto">
              A gincana é mais do que sobre ganhar, é sobre construir laços
              dentro da equipe, sobre ser empático com nossos irmãos, sejam eles
              Beresinhos ou de outra equipe. Nós entendemos que a gincana é
              sobre alcançar almas, seja através da nossa conta do Instagram,
              através das nossas reuniões e cultos, e com certeza queremos
              transbordar desse amor em Igaracy.
            </p>
          </motion.div>

          {/* Item 3 - entra da esquerda */}
          <motion.div
            ref={ref4}
            initial={{ x: -200, opacity: 0 }}
            animate={isInView4 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xl sm:text-5xl">
              <span className="text-turquoise-400 font-bold text-4xl sm:text-7xl">
                3.{" "}
              </span>
              Propagar Jesus
            </h2>
            <p className="mt-4 text-xs text-justify sm:text-3xl sm:w-3/4">
              Tudo o que fazemos tem um cunho evangelístico. Queremos que
              através de nossas escolhas e ações Jesus seja manifesto, que nosso
              amor e nossa conduta revelem Jesus, pois maior do que a Bereshit,
              é o nome dEle!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
