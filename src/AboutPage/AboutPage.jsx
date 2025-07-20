import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import MilestonesSection from '../components/MilestonesSection';
import VisionSection from '../components/VisionSection';
import LogoMeanings from '../components/LogoMeanings';
import CorporateStructure from '../components/CorporateStructure';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutContent />
      <MilestonesSection />
      <VisionSection />
      <LogoMeanings />
      <CorporateStructure />
      <Footer />
    </>
  );
};

export default AboutPage;