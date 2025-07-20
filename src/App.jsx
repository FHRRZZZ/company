import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InvestorPage from './pages/InvestorPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/investorpage" element={<InvestorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
