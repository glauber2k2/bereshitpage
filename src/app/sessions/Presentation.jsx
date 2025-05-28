"use client";

import { motion } from "motion/react";
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
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-9xl font-bold text-center"
        >
          Olá
        </motion.h1>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Berezinho(a)
        </motion.h1>
        <motion.p
          className="text-2xl font-bold mb-2"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
        >
          O que é <span className="text-turquoise-400">Bereshit</span> ?
        </motion.p>
        <motion.article
          className="text-lg text-pretty mb-4"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
        >
          Palavra hebraica que significa &quot;no princípio&quot; ou &quot;no
          começo&quot;.
        </motion.article>

        <div className="w-full h-56 bg-black flex items-center justify-center">
          aqui vai o video
        </div>
      </div>

      <ArrowDown className="animate-bounce absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10" />
    </div>
  );
}
