/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";

export default function QuizTopBar() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="px-8 py-6 flex items-center gap-4 bg-zinc-950 text-white font-bold border-b-[1px] border-white/10">
      <button onClick={handleLogoClick}>
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-6 object-scale-down animate-glitchEvery30s"
        />
      </button>
      <h1>Quiz Bereshit</h1>
      <a href="/" className="ml-auto text-xs font-normal">
        Home
      </a>
    </div>
  );
}
