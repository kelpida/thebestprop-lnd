import { ChallengeGroup } from "@/hooks/useChallenges";
import ChallengeCard from "./ChallengeCard";

interface ChallengesSectionProps {
  title: string;
  subtitle?: string;
  challenges: ChallengeGroup[];
  images: Record<string, string>;
}

const ChallengesSection = ({ title, subtitle, challenges, images }: ChallengesSectionProps) => {
  return (
    <section className="py-12 px-4">
      <div className="container">
        {subtitle && (
          <p className="text-center text-muted-foreground text-sm mb-1">{subtitle}</p>
        )}
        <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-gradient mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => {
             // Try to find image by exact name match, case-insensitive match, or fallback
             const normalize = (s: string) => s.toLowerCase().trim();
             const imgKey = Object.keys(images).find(k => normalize(k) === normalize(challenge.name));
             const image = imgKey ? images[imgKey] : images["default"] || "";
             
             return (
               <ChallengeCard 
                 key={index} 
                 name={challenge.name}
                 image={image}
                 options={challenge.options}
               />
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
