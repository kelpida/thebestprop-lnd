import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChallengeOption } from "@/hooks/useChallenges";

interface ChallengeCardProps {
  name: string;
  image: string;
  options: ChallengeOption[];
}

const ChallengeCard = ({ name, image, options }: ChallengeCardProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = options[selectedIndex];

  if (!selectedOption) return null;

  const specs = [
    { label: "Profit Target", value: selectedOption.profitTarget ? `$${selectedOption.profitTarget}` : "-" },
    { label: "Daily Loss", value: selectedOption.dailyPercentage === 100 ? "Unlimited" : `${selectedOption.dailyPercentage}%` },
    { label: "Total Loss", value: selectedOption.totalPercentage === 0 ? "Unlimited" : `${selectedOption.totalPercentage}%` },
    { label: "Time Limit", value: "Unlimited" },
    { label: "Leverage", value: "FX 1:30" },
    { label: "Payout Frequency", value: "7 days" },
  ];

  return (
    <div className="glass-card rounded-xl overflow-hidden card-glow transition-transform duration-300 hover:scale-[1.02]">
      {/* Planet Image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <h3 className="absolute bottom-3 left-4 font-display text-xl font-bold text-foreground">
          {name}
          <br />
          <span className="text-lg">Challenge</span>
        </h3>
      </div>

      {/* Specs */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between text-sm font-medium text-muted-foreground border-b border-border/30 pb-2">
          <span>Criteria</span>
          <span>Evaluation</span>
        </div>
        {specs.map((spec, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{spec.label}</span>
            <span className="text-foreground font-medium">{spec.value}</span>
          </div>
        ))}

        {/* Prices */}
        <div className="flex gap-2 pt-3 flex-wrap">
          {options.map((option, index) => (
            <Button
              key={option.id}
              variant={index === selectedIndex ? "priceActive" : "price"}
              className="flex-1 min-w-fit"
              onClick={() => setSelectedIndex(index)}
            >
              $ {option.initialBalance.toLocaleString()}
            </Button>
          ))}
        </div>

        {/* CTA */}
        <Button variant="funded" className="mt-3" asChild>
          <a href="https://thebestprop.com/checkout" target="_blank" rel="noopener noreferrer">Get Funded</a>
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCard;
