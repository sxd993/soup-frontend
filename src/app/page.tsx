import { ContractorsSection } from "@/widgets/Home/ContractorsSection";
import { ContestsSection } from "@/widgets/Home/ContestsSection";
import { HeroSection } from "@/widgets/Home/HeroSection";
import { NewsSection } from "@/widgets/Home/NewsSection/ui/NewsSection";
import { InterestingSection } from "@/widgets/Home/InterestingSection";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ContractorsSection />
      <NewsSection />
      <ContestsSection />
      <InterestingSection />
    </div>
  );
}