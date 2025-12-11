import { ContractorsSection } from "@/widgets/Home/ContractorsSection";
import { ContestsSection } from "@/widgets/Home/ContestsSection";
import { HeroSection } from "@/widgets/Home/HeroSection";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ContractorsSection />
      <ContestsSection />
    </div>
  );
}