/* eslint-disable @next/next/no-img-element */
"use client";

import { quizzes } from "@/data/quizzes"; // Assuming this path is correct for your project
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle2, XCircle } from "lucide-react";

export default function QuizRunner({ params }) {
  const router = useRouter();

  // Use mockQuizzes if quizzes from "@/data/quizzes" is undefined or empty
  const quizData = quizzes && quizzes.length > 0 ? quizzes : mockQuizzes;
  const quiz = quizData.find((q) => q.id === params.id);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null); // Index of the selected option
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false); // New state to control feedback visibility
  const exportRef = useRef(null);

  // Effect to handle quiz not found or params.id changing
  useEffect(() => {
    if (!params.id) {
      // If no ID, redirect to quiz selection or show a message
      // For now, let's assume a default quiz or redirect
      if (quizData.length > 0 && !quiz) {
        // router.push('/quiz'); // Or handle appropriately
      }
      return;
    }
    const currentQuiz = quizData.find((q) => q.id === params.id);
    if (!currentQuiz) {
      // Handle quiz not found, maybe redirect or show error
      // For now, console log and prevent further execution if needed
      console.error("Quiz not found for ID:", params.id);
      // setDone(true); // Or some other state to show error
      return;
    }
    // Reset state if quiz ID changes (e.g., navigating directly to another quiz)
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setShowFeedback(false);
  }, [params.id, quizData, quiz, router]);

  if (!quiz) {
    // Fallback if quiz is still not found after useEffect (e.g. initial load with bad id)
    // You might want to show a loading state or a more specific error message.
    // Or redirect to a quiz selection page.
    // For now, let's assume a default quiz if params.id is "1" and quiz is not found from external data
    if (params.id === "1" && quizData === mockQuizzes) {
      // This is a fallback, ideally quizzes should be loaded correctly
    } else {
      return (
        <div className="h-full flex flex-col items-center justify-center bg-zinc-950 p-8 text-white">
          Quiz não encontrado. Verifique o ID ou{" "}
          <button
            onClick={() => router.push("/quiz")}
            className="text-turquoise-400 underline"
          >
            volte para a seleção de quizzes.
          </button>
        </div>
      );
    }
  }

  const question = quiz.questions[current];

  /**
   * Handles the click on an option.
   * Sets the selected answer, shows feedback, and updates the score.
   * @param {number} optionIndex - The index of the clicked option.
   */
  const handleOptionClick = (optionIndex) => {
    if (showFeedback) return; // Do nothing if feedback is already shown for the current question

    setSelected(optionIndex);
    setShowFeedback(true);

    if (optionIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  /**
   * Handles moving to the next question or finishing the quiz.
   * Resets state for the next question.
   */
  const handleNextQuestion = () => {
    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setDone(true);
    }
  };

  /**
   * Generates a message based on the final score.
   * @returns {string} The feedback message.
   */
  const getMessage = () => {
    if (!quiz || quiz.questions.length === 0) return "Quiz inválido.";
    const percent = (score / quiz.questions.length) * 100;
    if (percent === 100) return "Parabéns! Você gabaritou! 🎉";
    if (percent >= 75) return "Excelente! Quase lá!";
    if (percent >= 50) return "Mandou bem! Ainda dá pra melhorar!";
    if (percent >= 25) return "Você acertou algumas. Que tal tentar de novo?";
    return "Opa! Bora revisar o conteúdo e tentar outra vez!";
  };

  /**
   * Handles the download of the quiz result as an image.
   * Uses html2canvas to capture a hidden div.
   */
  const handleDownloadImage = async () => {
    if (!exportRef.current) return;

    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(exportRef.current, {
        backgroundColor: "#18181b",
        scale: 2,
        useCORS: true, // Important if using external images in the export div, though not the case here
        logging: true, // For debugging html2canvas
      });

      const link = document.createElement("a");
      link.download = "resultado-quiz.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Erro ao gerar imagem:", error);
      // You could show a user-friendly message here
      const errorDiv = document.getElementById("error-message-container");
      if (errorDiv) {
        errorDiv.textContent =
          "Não foi possível gerar a imagem do resultado. Tente novamente.";
        errorDiv.style.display = "block";
      }
    }
  };

  const mensagem = getMessage();

  return (
    <>
      {/* Hidden Div for generating image 9:16 */}
      {quiz &&
        done && ( // Only render exportRef if quiz is loaded and done
          <div
            ref={exportRef}
            style={{
              position: "fixed",
              left: "-9999px", // Keep it off-screen
              top: "-9999px",
              width: "1080px",
              height: "1920px",
              backgroundColor: "#18181b", // Dark background for the image
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
              zIndex: -1, // Ensure it's behind everything
            }}
          >
            <h1
              style={{
                fontSize: "110px",
                color: "#40c7b1", // Turquoise color
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
              style={{
                fontSize: "32px",
                margin: "8px 0 0 0",
                fontStyle: "italic",
              }}
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
              Mencione @bereshit_equipe no instagram!
            </p>

            <img
              src="/assets/logo.png"
              alt="Logo Bereshit"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                console.warn(
                  "Logo image not found at /assets/logo.png for export"
                );
              }}
              style={{
                marginTop: "200px",
                width: "100px", // Adjust as needed
                height: "auto",
                objectFit: "scale-down",
              }}
            />
          </div>
        )}

      {/* Visible Quiz UI */}
      <div className="h-full flex flex-col bg-zinc-950 p-4 sm:p-8 text-white items-center ">
        <div className="w-full max-w-2xl">
          {quiz && (
            <h1 className="text-xl sm:text-3xl font-semibold text-turquoise-400 text-center">
              {quiz.title}
            </h1>
          )}

          <div
            id="error-message-container"
            className="bg-red-500 text-white p-3 rounded-md my-2"
            style={{ display: "none" }}
          ></div>

          {done ? (
            <div className="text-white space-y-4 text-center p-6 bg-zinc-900 rounded-lg shadow-xl mt-4">
              <p className="text-xl sm:text-2xl">
                Você acertou {score} de {quiz ? quiz.questions.length : 0}{" "}
                questões.
              </p>
              <p className="text-lg sm:text-xl italic">{mensagem}</p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                <button
                  onClick={() => router.push("/quiz")}
                  className="bg-turquoise-600 hover:bg-turquoise-700 font-bold text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-150"
                >
                  Voltar para seleção
                </button>
                <button
                  onClick={handleDownloadImage}
                  className="bg-zinc-700 hover:bg-zinc-600 font-bold text-turquoise-100 px-6 py-3 rounded-lg flex gap-2 items-center justify-center shadow-md transition-colors duration-150"
                >
                  <Send size={20} />
                  Publicar Resultado
                </button>
              </div>
            </div>
          ) : quiz && question ? (
            <div className="rounded-lg shadow-xl">
              <h2 className="text-base sm:text-lg mb-4 text-zinc-100 p-2">
                <span className="text-2xl sm:text-3xl font-bold text-turquoise-400">
                  {current + 1}
                </span>
                . {question.question}
              </h2>
              <ul className="mb-6 space-y-3">
                {question.options.map((opt, index) => {
                  let buttonClass = "bg-zinc-800 hover:bg-zinc-700";
                  let icon = null;

                  if (showFeedback) {
                    const isCorrectAnswer = index === question.correctAnswer;
                    const isSelectedAnswer = index === selected;

                    if (isCorrectAnswer) {
                      buttonClass =
                        "bg-green-500 hover:bg-green-600 text-white";
                      if (isSelectedAnswer) {
                        icon = (
                          <CheckCircle2
                            size={20}
                            className="mr-2 flex-shrink-0"
                          />
                        );
                      }
                    } else if (isSelectedAnswer) {
                      buttonClass = "bg-red-500 hover:bg-red-600 text-white"; // User picked incorrect
                      icon = (
                        <XCircle size={20} className="mr-2 flex-shrink-0" />
                      );
                    } else {
                      // Other options when feedback is shown (not selected, not correct)
                      buttonClass =
                        "bg-zinc-700 text-zinc-400 opacity-70 cursor-not-allowed";
                    }
                  } else {
                    // Before feedback is shown
                    if (selected === index) {
                      // This state (selected but no feedback) is brief, but can be styled if needed
                      buttonClass = "bg-turquoise-500 text-white";
                    }
                  }

                  return (
                    <li key={index}>
                      <button
                        onClick={() => handleOptionClick(index)}
                        disabled={showFeedback} // Disable options after an answer is submitted
                        className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-150 flex items-center text-sm sm:text-base ${buttonClass} ${
                          showFeedback
                            ? ""
                            : "hover:ring-2 hover:ring-turquoise-400 focus:outline-none focus:ring-2 focus:ring-turquoise-500"
                        }`}
                      >
                        {icon}
                        <span className="flex-grow">{opt}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              {showFeedback && ( // Show "Próxima" / "Finalizar" button only after an answer
                <button
                  onClick={handleNextQuestion}
                  className="w-full bg-turquoise-600 hover:bg-turquoise-700 font-bold text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-150 disabled:opacity-50"
                >
                  {current + 1 === quiz.questions.length
                    ? "Finalizar Quiz"
                    : "Próxima Pergunta"}
                </button>
              )}
            </div>
          ) : (
            // Loading state or if question is not available yet
            <div className="text-center p-6">Carregando quiz...</div>
          )}
        </div>
      </div>
    </>
  );
}
