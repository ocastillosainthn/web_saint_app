import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Applications from './components/Applications';
import Benefits from './components/Benefits';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';


// 1. Verifica que la importación sea exactamente así:
import PoliticasPrivacidad from './pages/PoliticasPrivacidad';






function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <section id="hero">
                  <Hero />
                </section>
                <section id="applications">
                  <Applications />
                </section>
                <section id="benefits">
                  <Benefits />
                </section>
                <section id="clients">
                  <Clients />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="cta">
                  <CTA />
                </section>
              </main>
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        
        
<Route path="/politicas-de-privacidad" element={<PoliticasPrivacidad />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;