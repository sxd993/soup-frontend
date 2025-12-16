import type { Metadata } from "next";
import { ContractorsSection } from "@/widgets/Home/ContractorsSection";
import { ContestsSection } from "@/widgets/Home/ContestsSection";
import { HeroSection } from "@/widgets/Home/HeroSection";
import { NewsSection } from "@/widgets/Home/NewsSection";
import { BlogsSection } from "@/widgets/Home/BlogsSection";
import { FAQSection } from "@/widgets/Home/FAQ";


export const metadata: Metadata = {
  title: "Главная",
  description: "Студия уникальных проектов",
};

export default function HomePage() {
  return (
    <div className="mt-4">
      <HeroSection />
      <ContractorsSection />
      <NewsSection />
      <ContestsSection />
      <BlogsSection />
      <FAQSection />
    </div>
  );
}
