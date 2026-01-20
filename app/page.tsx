import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import GameFormats from "./components/GameFormats";
import Occasions from "./components/Occasions";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <GameFormats />
      <HowItWorks />
      <Occasions />
      <Testimonials />
      <CTA />
    </>
  );
}
