"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function Leader() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: "-50px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-50px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen sm:min-h-fit flex flex-col bg-black text-white px-8 py-24">
      <motion.h1
        ref={ref3}
        initial={{ scale: 0.5 }}
        animate={isInView3 ? { scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white text-center w-full text-3xl font-bold"
      >
        Conheça os <br /> nossos líderes.
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
        {/* Card Lucas */}
        <motion.div
          ref={ref1}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView1 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 mt-10 rounded-3xl overflow-hidden min-h-64 sm:min-h-96"
        >
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
        </motion.div>

        {/* Card Samara */}
        <motion.div
          ref={ref2}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView2 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 mt-10 rounded-3xl overflow-hidden min-h-64"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
