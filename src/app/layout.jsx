import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bereshit",
  description: "No principio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
