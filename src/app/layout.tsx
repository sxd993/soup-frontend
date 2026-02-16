import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./providers/AppProviders";
import { Footer, Header } from "@/widgets";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Студия Уникальных Проектов",
  description: "Студия уникальных проектов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>
        <AppProviders>
          <div className="max-w-300 min-h-screen mx-auto px-4">
            <Header />
            {children}
          </div>
        </AppProviders>
        <Footer />
      </body>
    </html>
  );
}
