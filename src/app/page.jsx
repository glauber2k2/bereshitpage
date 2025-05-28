import Presentation from "./sessions/Presentation";
import Leader from "./sessions/Leader";
import Donate from "./sessions/Donate";

export default function Home() {
  return (
    <main className="bg-turquoise-500 flex flex-col w-full">
      <Presentation />
      <Leader />
      <Donate />
    </main>
  );
}
