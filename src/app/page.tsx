import Navbar from "./components/common/Navbar";
import CardsSection from "./components/sections/CardsSection";
// import HealthPrediction from "./components/sections/HealthPrediction";
import HeroSection from "./components/sections/HeroSection";
import Hand from "./components/sections/Hand";
import HealthHub from "./components/sections/HealthHub";
import BloodTesting from "./components/sections/BloodTesting";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CardsSection />
      {/* <HealthPrediction /> */}
      <Hand />
      <HealthHub />
      <BloodTesting />
    </main>
  );
}
