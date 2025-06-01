/* eslint-disable @next/next/no-img-element */
"use client";

import { quizzes } from "@/data/quizzes";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

export default function QuizRunner({ params }) {
  const router = useRouter();
  const quiz = quizzes.find((q) => q.id === params.id);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const exportRef = useRef(null); // ref pra div oculta da imagem

  if (!quiz) return <div>Quiz não encontrado.</div>;

  const question = quiz.questions[current];

  const handleNext = () => {
    if (selected === question.correctAnswer) {
      setScore(score + 1);
    }

    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  const getMessage = () => {
    const percent = (score / quiz.questions.length) * 100;
    if (percent === 100) return "Parabéns! Você gabaritou! 🎉";
    if (percent >= 50) return "Mandou bem! Ainda dá pra melhorar!";
    if (percent >= 25) return "Você acertou algumas. Que tal tentar de novo?";
    return "Opa! Bora revisar o conteúdo e tentar outra vez!";
  };

  const handleDownloadImage = async () => {
    if (!exportRef.current) return;

    const html2canvas = (await import("html2canvas")).default; // lazy import

    const canvas = await html2canvas(exportRef.current, {
      backgroundColor: "#18181b", // cor de fundo da div oculta (dark)
      scale: 2, // pra ter boa resolução
    });

    const link = document.createElement("a");
    link.download = "resultado-quiz.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const mensagem = getMessage();

  return (
    <>
      {/* Div oculta para gerar imagem 9:16 */}
      <div
        ref={exportRef}
        style={{
          position: "fixed",
          left: "-9999px",
          width: "1080px",
          height: "1920px",
          backgroundColor: "#18181b",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "48px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          gap: "24px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "110px",
            color: "#40c7b1",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          Quiz Bereshit
        </h1>
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "600",
            margin: 0,
            marginBottom: "50px",
          }}
        >
          {quiz.title}
        </h2>
        <p
          style={{ fontSize: "32px", margin: "8px 0 0 0", fontStyle: "italic" }}
        >
          {mensagem}
        </p>
        <p style={{ fontSize: "28px", margin: "4px 0 50px 0" }}>
          Você acertou {score} de {quiz.questions.length} questões.
        </p>
        <p
          style={{
            fontSize: "24px",
            margin: "16px 0 0 0",
            color: "#40c7b1",
            fontWeight: "bold",
          }}
        >
          #quizbereshit #soubereshit #equipebereshit <br /> #bereshit
          #noprincipio
        </p>
        <p style={{ fontSize: "24px", margin: "8px 0 0 0" }}>
          Veja minha pontuação no quiz Bereshit
        </p>
        {/* Imagem da logo */}
        <img
          src="/assets/logo.png"
          alt="Logo Bereshit"
          style={{
            marginTop: "200px",
            width: "100px",
            height: "auto",
            objectFit: "scale-down",
          }}
        />
      </div>

      <div className="h-full flex flex-col bg-zinc-950 p-8">
        <h1 className="text-xl font-semibold mb-2 text-turquoise-400">
          {quiz.title}
        </h1>

        {done ? (
          <div className="text-white space-y-4">
            <p className="text-lg">
              Você acertou {score} de {quiz.questions.length} questões.
            </p>
            <p className="text-md">{mensagem}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => router.push("/quiz")}
                className="bg-turquoise-800 font-bold text-white px-4 py-2 rounded"
              >
                Voltar para seleção
              </button>
              <button
                onClick={handleDownloadImage}
                className="bg-zinc-800 font-bold text-turquoise-100 px-4 py-2 rounded flex gap-2 items-center justify-center"
              >
                <Send size={20} />
                Publicar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="mb-2 text-white">{question.question}</h2>
            <ul className="mb-4 space-y-2">
              {question.options.map((opt, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelected(index)}
                    className={`text-white font-bold px-4 py-2 rounded w-full text-left ${
                      selected === index ? "bg-turquoise-500" : "bg-white/10"
                    }`}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
            <button
              disabled={selected === null}
              onClick={handleNext}
              className="bg-turquoise-800 font-bold text-white px-4 py-2 rounded disabled:opacity-50 w-full"
            >
              {current + 1 === quiz.questions.length ? "Finalizar" : "Próxima"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
