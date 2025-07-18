import Navbar from "./components/common/Navbar";
import CardsSection from "./components/sections/CardsSection";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CardsSection />
    </main>
  );
}
