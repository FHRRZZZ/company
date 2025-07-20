import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EnergySection from '../components/EnergySection';
import AboutSection from "../components/AboutSection";
import FortuneHighlightsSection from "../components/FortuneHighlightsSection";
import CardSection from '../components/CardSection';
import SustainabilitySection from "../components/SustainabilitySection";
{/* Kalo ada tambahan isi disini */}
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EnergySection />
      <AboutSection />
      <FortuneHighlightsSection />
      <CardSection />
      <SustainabilitySection />
      {/* Ini juga kalo ada tambahan isi disini */}
      <Footer />
    </>
  );
};

export default HomePage;