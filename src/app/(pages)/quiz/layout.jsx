import QuizTopBar from "./components/TopBarQuizzes";

export default function QuizzesLayout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full ">
      <QuizTopBar />
      {children}
    </div>
  );
}
