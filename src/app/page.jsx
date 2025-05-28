import Presentation from "./sessions/Presentation";
import Leader from "./sessions/Leader";
import Donate from "./sessions/Donate";
import Theme from "./sessions/Theme";
import Motto from "./sessions/Motto";

export default function Home() {
  return (
    <main className="bg-black flex flex-col w-full">
      <Presentation />
      <Leader />
      <Motto />
      <Donate />
      <Theme />
    </main>
  );
}
