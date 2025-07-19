import Navbar from "./components/common/Navbar";
import CardsSection from "./components/sections/CardsSection";
// import HealthPrediction from "./components/sections/HealthPrediction";
import HeroSection from "./components/sections/HeroSection";
import Hand from "./components/sections/Hand";
import HealthHub from "./components/sections/HealthHub";
import BloodTesting from "./components/sections/BloodTesting";
import ChoosePlan from "./components/sections/ChoosePlan";
import VideoOverlaySection from "./components/sections/VideoOverlaySection";
import FAQsSection from "./components/sections/FAQs";
import CTASection from "./components/sections/CTASection";

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
      <ChoosePlan />
      <VideoOverlaySection />
      <FAQsSection />
      <CTASection />
    </main>
  );
}
