/* eslint-disable @next/next/no-img-element */
"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "./Countdown";

export default function Presentation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    // Set initial state
    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      <div className="fixed flex p-6 bg-black/10 w-full text-white z-50 backdrop-blur-sm items-center">
        <img
          src="/assets/bereshitpalavra.png"
          alt="Logo"
          className="w-20 object-scale-down animate-glitchEvery30s mr-auto"
        />

        <div className="mr-4">
          <Countdown />
        </div>

        {isDesktop ? (
          <nav className="flex gap-6">
            <button
              onClick={() => handleScroll("presentation")}
              className="hover:text-turquoise-400 transition-all"
            >
              Início
            </button>
            <button
              onClick={() => handleScroll("sobre")}
              className="hover:text-turquoise-400 transition-all"
            >
              Sobre nós
            </button>
            <button
              onClick={() => handleScroll("ajuda")}
              className="hover:text-turquoise-400 transition-all"
            >
              Quero ajudar
            </button>
            <button
              onClick={() => handleScroll("culto")}
              className="hover:text-turquoise-400 transition-all"
            >
              Nosso culto
            </button>
          </nav>
        ) : (
          <button onClick={toggleMenu}>
            <Menu size={22} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && !isDesktop && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/3 bg-black/90 backdrop-blur-lg z-50 p-8 flex flex-col gap-8"
            >
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <img
                    src="/assets/logo.png"
                    alt="Logo"
                    className="w-6 object-scale-down animate-glitchEvery30s"
                  />
                  <h2 className="text-2xl font-bold text-turquoise-400">
                    Menu
                  </h2>
                </span>
                <button onClick={closeMenu} className="text-white">
                  <X size={32} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-white">
                <button
                  onClick={() => handleScroll("presentation")}
                  className="hover:text-turquoise-400 transition-all text-left"
                >
                  Início
                </button>
                <button
                  onClick={() => handleScroll("sobre")}
                  className="hover:text-turquoise-400 transition-all text-left"
                >
                  Sobre nós
                </button>
                <button
                  onClick={() => handleScroll("ajuda")}
                  className="hover:text-turquoise-400 transition-all text-left"
                >
                  Quero ajudar
                </button>
                <button
                  onClick={() => handleScroll("culto")}
                  className="hover:text-turquoise-400 transition-all text-left"
                >
                  Nosso culto
                </button>
              </nav>

              <div className="mt-auto">
                <p className="text-xs text-white/60">
                  © {new Date().getFullYear()} Equipe Bereshit. Todos os
                  direitos reservados.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
