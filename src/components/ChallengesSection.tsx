import ChallengeCard from "./ChallengeCard";

interface Challenge {
  name: string;
  image: string;
  specs: { label: string; value: string }[];
  prices: string[];
  activePrice?: number;
}

interface ChallengesSectionProps {
  title: string;
  subtitle?: string;
  challenges: Challenge[];
}

const ChallengesSection = ({ title, subtitle, challenges }: ChallengesSectionProps) => {
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
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
