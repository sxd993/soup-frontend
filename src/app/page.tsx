import { ContractorsSection } from "@/widgets/Home/ContractorsSection";
import { ContestsSection } from "@/widgets/Home/ContestsSection";
import { HeroSection } from "@/widgets/Home/HeroSection";
import { NewsSection } from "@/widgets/Home/NewsSection";
import { BlogsSection } from "@/widgets/Home/BlogsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description: "Студия уникальных проектов",
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ContractorsSection />
      <NewsSection />
      <ContestsSection />
      <BlogsSection />
    </div>
  );
}
