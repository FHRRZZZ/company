import Navbar from '../components/Navbar';
import InvestorHero from '../components/InvestorHero.jsx';
import InvestorContent from '../components/InvestorContent.jsx';
import InvestorSustain from '../components/InvestorSustain.jsx';
{/* Kalo ada tambahan isi disini */}
import Footer from '../components/Footer';

const InvestorPage = () => {
  return (
    <>
      <Navbar />
      <InvestorHero />
      <InvestorContent />
      <InvestorSustain />
      <Footer />
    </>
  );
};

export default InvestorPage;