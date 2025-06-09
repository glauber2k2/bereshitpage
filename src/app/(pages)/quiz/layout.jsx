import QuizTopBar from "./components/TopBarQuizzes";

export function generateMetadata() {
  return {
    title: "Quiz",
    description: "Bereshit Quiz do livro de Genesis.",
    openGraph: {
      title: "Bereshit - Quiz",
      description: "📚 Estude agora com o nosso Quiz do livro Genesis.",
      url: "https://equipebereshit.com.br/quiz",
      siteName: "Bereshit",
      images: [
        {
          url: "https://equipebereshit.com.br/og-image-bereshit-igaracy.jpg",
          width: 1200,
          height: 630,
          alt: "Imagem do Quiz Bereshit",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default function QuizzesLayout({ children }) {
  return (
    <div className="h-screen-dynamic flex flex-col">
      <QuizTopBar />
      {children}
    </div>
  );
}
