import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const SITE_URL = "https://equipebereshit.com.br";
const SITE_NAME = "Bereshit";
const DEFAULT_TITLE = "Bereshit: Evangelismo e Ação Social";
const DEFAULT_DESCRIPTION =
  "Participe da Missão Bereshit em Igaracy! Ajude-nos a levar a Palavra de Deus, arrecadar alimentos e fundos para transformar vidas na cidade.";
const OG_IMAGE_URL = `${SITE_URL}/og-image-bereshit-igaracy.jpg`;

export const metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `${SITE_NAME}: %s`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Equipe Bereshit", url: SITE_URL }],
  keywords: [
    "bereshit",
    "equipe bereshit",
    "missão",
    "Igaracy",
    "evangelismo",
    "ação social",
    "doações",
    "igreja",
    "Paraíba",
    "IBM",
    "Rede Plenus",
    "Igreja Batista Miramar",
    "ajuda comunitária",
    "gincana",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Banner da Missão Bereshit em Igaracy",
      },
    ],
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // manifest: "/site.webmanifest", // TODO": para pwa
  // themeColor: "#FFFFFF",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
