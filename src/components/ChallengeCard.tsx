import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ChallengeSpec {
  label: string;
  value: string;
}

interface ChallengeCardProps {
  name: string;
  image: string;
  specs: ChallengeSpec[];
  prices: string[];
  activePrice?: number;
}

const ChallengeCard = ({ name, image, specs, prices, activePrice = 0 }: ChallengeCardProps) => {
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
          {prices.map((price, index) => (
            <Button
              key={index}
              variant={index === activePrice ? "priceActive" : "price"}
              className="flex-1 min-w-fit"
            >
              {price}
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
