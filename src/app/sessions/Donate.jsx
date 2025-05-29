"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function Donate() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const buttonRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isSubtitleInView = useInView(subtitleRef, {
    once: true,
    margin: "-100px",
  });
  const isText1InView = useInView(text1Ref, { once: true, margin: "-100px" });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-50px" });

  return (
    <div
      className="min-h-screen flex flex-col bg-turquoise-900 text-white"
      id="ajuda"
    >
      <motion.div
        ref={imageRef}
        initial={{ scale: 1 }}
        animate={
          isImageInView ? { scale: [1.2, 1.3, 1, 1.1, 1] } : { scale: 1 }
        }
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/assets/donate.jpg"
          width={1280}
          height={1280}
          className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black,transparent)]"
          alt="Donate"
        />
      </motion.div>

      <div className="-mt-10 px-8 gap-6 flex flex-col">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full text-4xl font-bold text-turquoise-400"
        >
          Ajude quem precisa!
        </motion.h1>

        <motion.h2
          ref={subtitleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isSubtitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl font-semibold text-center"
        >
          Participe da nossa campanha de arrecadação!
        </motion.h2>

        <motion.p
          ref={text1Ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isText1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-justify text-white text-lg"
        >
          Estamos nos preparando para um evangelismo na cidade de Igaracy, onde
          vamos levar o amor de Deus e mantimentos para quem mais precisa.
        </motion.p>

        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          type="button"
          className="px-4 py-2 rounded-full bg-turquoise-100 text-turquoise-700 font-bold my-2"
        >
          Quero ajudar!
        </motion.button>
      </div>
    </div>
  );
}
