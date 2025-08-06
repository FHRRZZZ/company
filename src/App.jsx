import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InvestorPage from './pages/InvestorPage';
import ScrollToTop from './components/ScrollToTop';
import Energizing from './pages/Energizing';
import NextAbout from './pages/NextAbout';
import Sustainability from './pages/Sustainability';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/investorpage" element={<InvestorPage />} />
        <Route path='/Energizing' element={<Energizing/>}/>
        <Route path="/nextabout" element={<NextAbout />} />
        <Route path='Sustainability' element={<Sustainability/>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
