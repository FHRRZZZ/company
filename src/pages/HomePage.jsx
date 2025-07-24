import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EnergySection from '../components/EnergySection';
import AboutSection from "../components/AboutSection";
import FortuneHighlightsSection from "../components/FortuneHighlightsSection";
import CardSection from '../components/CardSection';
import SustainabilitySection from "../components/SustainabilitySection";
import InvestorContent from '../components/InvestorContent';
import Footer from '../components/Footer';
import InvestorHero from '../components/InvestorHero';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EnergySection />
      <AboutSection />
      <FortuneHighlightsSection />
      <CardSection />
      <InvestorContent/>
      <InvestorHero/>
      <SustainabilitySection />
      <Footer />
    </>
  );
};

export default HomePage;