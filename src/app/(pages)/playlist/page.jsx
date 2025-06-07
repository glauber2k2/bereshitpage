/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {
  ArrowUpDown,
  LayoutGrid,
  LibraryBig,
  LucideHouse,
  MoreVertical,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Playlist",
  description: "Ouça agora a playlist exclusiva que preparamos para você!",
  openGraph: {
    title: "Bereshit - Playlist",
    description: "🎵 Dê o play na nossa seleção especial de músicas!",
    url: "https://equipebereshit.com.br/playlist",
    siteName: "Bereshit",
    images: [
      {
        url: "https://equipebereshit.com.br/og-image-bereshit-igaracy.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem da Playlist Bereshit",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export const dynamic = "force-static";

export default function page() {
  return (
    <div className="h-screen-dynamic bg-zinc-950 pt-12 px-4 text-white flex flex-col">
      <div className="flex items-center gap-4 font-semibold text-2xl">
        <img
          src="/assets/logoazul.png"
          alt="logoazul"
          className="p-2 w-8 h-8 rounded-full bg-white
          "
        />
        <h1>Sua Biblioteca</h1>

        <Search size={22} className="ml-auto" />
        <Plus size={22} className="ml-2" />
      </div>
      <div className="mt-8 text-xs font-medium flex gap-2">
        <span className=" rounded-full bg-zinc-800 px-3 py-1">Playlists</span>
        <span className=" rounded-full bg-zinc-800 px-3 py-1">Podcasts</span>
        <span className=" rounded-full bg-zinc-800 px-3 py-1">Artistas</span>
      </div>
      <div className="mt-6 flex items-center gap-2 text-xs font-bold">
        <ArrowUpDown size={14} />
        <p>Recentes</p>
        <LayoutGrid size={16} className="ml-auto" />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <Link
          href={
            "https://open.spotify.com/playlist/5R9l78nAibm7nyHhUh66UW?si=20bbR4yQQ_eKWP8XTARbjg&pi=pyzEbnYuT-a6d "
          }
        >
          <div className="flex items-center gap-4">
            <img
              src={"/assets/logo.png"}
              className="bg-green-600 w-16 h-16 p-4"
            />
            <div>
              <h2>Spotify</h2>
              <p className="text-xs opacity-75">Playlist • Bereshit</p>
            </div>
          </div>
        </Link>

        <Link
          href={
            "https://music.youtube.com/playlist?list=PLOk0AehF8jtDlxGp2-KsF_Dmc8TKAoVZM"
          }
        >
          <div className="flex items-center gap-4">
            <img
              src={"/assets/logo.png"}
              className="bg-red-500 w-16 h-16 p-4"
            />
            <div>
              <h2>Youtube Music</h2>
              <p className="text-xs opacity-75">Playlist • Bereshit</p>
            </div>
          </div>
        </Link>

        <Link href={"/playlist"}>
          <div className="flex items-center gap-4">
            <img
              src={"/assets/logo.png"}
              className="bg-blue-400 w-16 h-16 p-4"
            />
            <div>
              <h2>Amazon Music</h2>
              <p className="text-xs opacity-75">Playlist • Bereshit</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="mt-auto flex items-center justify-between text-xs">
        <Link href={"/"}>
          <div className="flex flex-col items-center justify-center p-2 gap-1 opacity-50">
            <LucideHouse size={22} />
            Inicio
          </div>
        </Link>
        <div className="flex flex-col items-center justify-center p-2 gap-1 opacity-50">
          <Search size={22} />
          Buscar
        </div>
        <div className="flex flex-col items-center justify-center p-2 gap-1">
          <LibraryBig size={22} />
          Sua Biblioteca
        </div>

        <div className="flex flex-col items-center justify-center p-2 gap-1 opacity-50">
          <Plus size={22} />
          Criar
        </div>
      </div>
    </div>
  );
}
