import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import GameExamples from "./components/GameExamples";
import Occasions from "./components/Occasions";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <GameExamples />
      <Occasions />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
