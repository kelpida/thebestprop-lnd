import { Check } from "lucide-react";

const benefits = [
  "Awarding with certificates and many gifts and points",
  "Access to the psychology Channel",
  "TheBest Biggest Trading Community",
  "Coaching and Advising opportunities",
  "Access to the free trial",
  "Get paid within 48 hours",
  "Lower fees compared with others",
  "Diverse assets",
  "Advanced with Roboadvisor and AI",
  "Easier access to the capital",
  "Fastest Rewarding",
  "Variety of educational Tools",
  "Access to up to $2M capital",
  "Monthly income access",
];

interface WhySectionProps {
  logoImage: string;
}

const WhySection = ({ logoImage }: WhySectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container">
        <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-foreground mb-10">
          Why are we <span className="text-gradient">TheBest</span>?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          {/* Benefits List */}
          <div className="flex-1 space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Logo/3D Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={logoImage}
              alt="TheBestProp Logo"
              className="w-100 h-100 object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
