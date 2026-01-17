import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "./providers/AppProviders";
import { Footer, Header } from "@/widgets";
import { Manrope, Roboto_Flex } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-flex",
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
    <html lang="ru" className={`${manrope.variable} ${robotoFlex.variable}`}>
      <body>
        <AppProviders>
          <div className="max-w-300 mx-auto px-4 lg:px-0">
            <Header />
            {children}
          </div>
        </AppProviders>
        <Footer />
      </body>
    </html>
  );
}
