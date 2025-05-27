import Presentation from "./sessions/Presentation";
import Leader from "./sessions/Leader";

export default function Home() {
  return (
    <main className="bg-turquoise-500 flex flex-col w-full">
      <Presentation />
      <Leader />
    </main>
  );
}
