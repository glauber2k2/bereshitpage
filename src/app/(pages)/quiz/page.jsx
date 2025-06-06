import { quizzes } from "@/data/quizzes";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function QuizHome() {
  return (
    <div className="h-full bg-zinc-950 p-8 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-turquoise-400">
        Escolha um Quiz:
      </h1>
      <ul className="flex flex-col gap-4 overflow-y-auto h-2/3">
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link
              href={`/quiz/${quiz.id}`}
              className="bg-turquoise-600 w-full flex p-4 text-turquoise-50 rounded-xl font-bold"
            >
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>

      <ChevronDown
        size={22}
        className="animate-bounce text-white self-center mt-10"
      />
    </div>
  );
}
