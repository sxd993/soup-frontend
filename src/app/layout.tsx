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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144,wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <AppProviders>
          <div className="max-w-[1200px] mx-auto md:px-12">
            <Header />
            {children}
          </div>
        </AppProviders>
        <Footer />
      </body>
    </html>
  );
}
