/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clipboard, X } from "lucide-react";

export default function DonateBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => setIsOpen(true);
  const closeSheet = () => setIsOpen(false);

  const [copied, setCopied] = useState(false);

  const copyPixKey = () => {
    const pixKey = "bereshit.equipe@gmail.com";

    if (navigator.clipboard) {
      navigator.clipboard.writeText(pixKey).catch(() => {});
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = pixKey;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <button
        onClick={openSheet}
        className="px-4 py-2 rounded-full bg-turquoise-100 text-turquoise-700 font-bold w-full hover:bg-turquoise-200"
      >
        Quero ajudar!
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeSheet}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed  bottom-0 left-0 right-0 bg-black text-white rounded-t-2xl p-6 z-50 
              shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-turquoise-400">
                  Faça sua doação
                </h2>
                <button onClick={closeSheet}>
                  <X size={28} />
                </button>
              </div>

              <p className="text-sm text-white/80 mb-6">
                Sua ajuda pode transformar vidas. Contribua com alimentos,
                roupas ou ofertas para a missão em Igaracy.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    placeholder="Nome"
                    className="font-medium px-4 py-2 bg-green-700 flex items-center justify-center gap-2 text-lg"
                  >
                    Entregar a Lucas
                  </button>
                  <button
                    type="button"
                    placeholder="Email"
                    className="font-medium px-4 py-2 bg-green-700 flex items-center justify-center gap-2 text-lg"
                  >
                    Entregar a Samara
                  </button>
                </div>
                <img
                  src={"/assets/pixbereshit.jpg"}
                  className="object-scale-down "
                />
              </div>
              <div className="mt-4 flex gap-2 items-center">
                <button
                  className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition"
                  type="button"
                  onClick={copyPixKey}
                >
                  <Clipboard size={20} />
                </button>

                {copied ? (
                  <p className="text-sm text-white/80">Copiado!</p>
                ) : (
                  <p className="text-sm ">Pix: bereshit.equipe@gmail.com</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
