import Presentation from "./sessions/Presentation";
import Leader from "./sessions/Leader";
import Donate from "./sessions/Donate";
import Theme from "./sessions/theme";

export default function Home() {
  return (
    <main className="bg-black flex flex-col w-full">
      <Presentation />
      <Leader />
      <Donate />
      <Theme />
    </main>
  );
}
