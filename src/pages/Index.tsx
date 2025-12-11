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

const oneStepChallenges = [
  {
    name: "Venus",
    image: venusImg,
    specs: [
      { label: "Profit Target", value: "$1500" },
      { label: "Daily Loss", value: "Unlimited" },
      { label: "Total Loss", value: "5%" },
      { label: "Time Limit", value: "Unlimited" },
      { label: "Leverage", value: "FX 1:30" },
      { label: "Payout Frequency", value: "7 days" },
    ],
    prices: ["$ 10,000", "$ 25,000"],
    activePrice: 1,
  },
  {
    name: "Earth",
    image: earthImg,
    specs: [
      { label: "Profit Target", value: "$7500" },
      { label: "Daily Loss", value: "4%" },
      { label: "Total Loss", value: "9%" },
      { label: "Time Limit", value: "Unlimited" },
      { label: "Leverage", value: "FX 1:30" },
      { label: "Payout Frequency", value: "7 days" },
    ],
    prices: ["$ 50,000", "$ 100,000", "$ 200,000"],
    activePrice: 1,
  },
];

const twoStepChallenges = [
  {
    name: "meteorite",
    image: meteoriteImg,
    specs: [
      { label: "Profit Target", value: "$120" },
      { label: "Daily Loss", value: "Unlimited" },
      { label: "Total Loss", value: "5%" },
      { label: "Time Limit", value: "Unlimited" },
      { label: "Leverage", value: "FX 1:30" },
      { label: "Payout Frequency", value: "7 days" },
    ],
    prices: ["$ 3,000"],
    activePrice: 0,
  },
  {
    name: "Mercury",
    image: mercuryImg,
    specs: [
      { label: "Profit Target", value: "$800" },
      { label: "Daily Loss", value: "Unlimited" },
      { label: "Total Loss", value: "5%" },
      { label: "Time Limit", value: "Unlimited" },
      { label: "Leverage", value: "FX 1:30" },
      { label: "Payout Frequency", value: "7 days" },
    ],
    prices: ["$ 10,000"],
    activePrice: 0,
  },
  {
    name: "Mars",
    image: marsImg,
    specs: [
      { label: "Profit Target", value: "$2000" },
      { label: "Daily Loss", value: "5%" },
      { label: "Total Loss", value: "10%" },
      { label: "Time Limit", value: "Unlimited" },
      { label: "Leverage", value: "FX 1:30" },
      { label: "Payout Frequency", value: "7 days" },
    ],
    prices: ["$ 25,000"],
    activePrice: 0,
  },
  {
    name: "Jupiter",
    image: jupiterImg,
    specs: [
      { label: "Profit Target", value: "$4000" },
      { label: "Daily Loss", value: "5%" },
      { label: "Total Loss", value: "10%" },
      { label: "Time Limit", value: "Unlimited" },
      { label: "Leverage", value: "FX 1:30" },
      { label: "Payout Frequency", value: "7 days" },
    ],
    prices: ["$ 50,000", "$ 100,000", "$ 200,000"],
    activePrice: 1,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ChallengesSection
        title="One Step Challenges"
        subtitle="TheBestProp Challenges"
        challenges={oneStepChallenges}
      />
      <ChallengesSection
        title="Two Step Challenges"
        challenges={twoStepChallenges}
      />
      <WhySection logoImage={logo3dImg} />
      <Footer />
    </div>
  );
};

export default Index;
