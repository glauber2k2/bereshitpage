import QuizTopBar from "./components/TopBarQuizzes";

export const metadata = {
  title: "Quiz",
};

export default function QuizzesLayout({ children }) {
  return (
    <div className="h-screen-dynamic flex flex-col">
      <QuizTopBar />
      {children}
    </div>
  );
}
