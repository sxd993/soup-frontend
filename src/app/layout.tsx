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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppProviders>
          <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
            <Header />
            {children}
          </div>
        </AppProviders>
        <Footer />
      </body>
    </html>
  );
}
