import Presentation from "./sessions/Presentation";
import Leader from "./sessions/Leader";
import Donate from "./sessions/Donate";
import Motto from "./sessions/Motto";
import TeamTheme from "./sessions/TeamTheme";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <main className="bg-black flex flex-col w-full overflow-x-hidden">
      <TopBar />
      <Presentation />
      <Leader />
      <Motto />
      <Donate />
      <TeamTheme />
    </main>
  );
}
