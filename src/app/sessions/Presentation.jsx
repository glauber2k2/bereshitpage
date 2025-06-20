"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import VideoAutoplay from "../components/Video";

export default function Presentation() {
  return (
    <div
      className="relative min-h-screen px-8 pt-24 text-white bg-[url('/assets/earth.jpg')] bg-cover bg-center bg-no-repeat"
      id="presentation"
    >
      {/* Overlay escurecido e blur */}
      <div className="absolute inset-0 bg-black/80  z-0" />

      {/* Gradiente inferior */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-0" />

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 pb-8 flex flex-col sm:items-center">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-9xl font-bold text-center"
        >
          Olá
        </motion.h1>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Berezinho(a)
        </motion.h1>
        <motion.p
          className="text-2xl font-bold mb-2 sm:text-6xl"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          A nossa <span className="text-turquoise-400 ">misssão</span>!
        </motion.p>
        <motion.article
          className=" text-pretty mb-4 sm:text-xl"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Levar ajuda e a palavra de Deus para a cidade de Igaracy, na Paraiba.
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full h-56 bg-black sm:w-1/2 flex items-center justify-center sm:h-96"
        >
          <VideoAutoplay />
        </motion.div>
        <ArrowDown className="animate-bounce self-center mt-2 sm:mt-6" />
      </div>
    </div>
  );
}
