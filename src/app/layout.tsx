import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "./providers/AppProviders";
import { Footer, Header } from "@/widgets";

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
    <html lang="ru">
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
