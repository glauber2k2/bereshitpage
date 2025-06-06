import QuizTopBar from "./components/TopBarQuizzes";

export const metadata = {
  title: "Quiz",
};

export default function QuizzesLayout({ children }) {
  return (
    <div className="flex flex-col h-screen w-full ">
      <QuizTopBar />
      {children}
    </div>
  );
}
