import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChallengesSection from "@/components/ChallengesSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

import venusImg from "@/assets/venus.png";
import earthImg from "@/assets/earth.png";
import meteoriteImg from "@/assets/meteorite.png";
import mercuryImg from "@/assets/mercury.png";
import marsImg from "@/assets/mars.png";
import jupiterImg from "@/assets/jupiter.png";
import logo3dImg from "@/assets/logo-3d-gifts.png";
import { useChallenges } from "@/hooks/useChallenges";

const Index = () => {
  const { data, isLoading, error } = useChallenges();

  const images: Record<string, string> = {
    "One Step Challenge": earthImg,
    Venus: venusImg,
    Earth: earthImg,
    Meteorite: meteoriteImg,
    Mercury: mercuryImg,
    Mars: marsImg,
    Jupiter: jupiterImg,
    default: earthImg
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading challenges...</p>
      </div>
    );
  }

  if (error) {
     console.error("Failed to load challenges", error);
     // Fallback UI could be improved
     return (
       <div className="min-h-screen bg-background flex items-center justify-center">
         <p className="text-destructive">Failed to load challenges. Please try again later.</p>
       </div>
     );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ChallengesSection
        title="One Step Challenges"
        subtitle="TheBestProp Challenges"
        challenges={data?.oneStepChallenges || []}
        images={images}
      />
      <ChallengesSection
        title="Two Step Challenges"
        challenges={data?.twoStepChallenges || []}
        images={images}
      />
      <WhySection logoImage={logo3dImg} />
      <Footer />
    </div>
  );
};

export default Index;
