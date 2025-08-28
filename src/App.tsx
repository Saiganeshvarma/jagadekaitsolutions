import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Industries />
      <CaseStudies />
      <About />
      <Support />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;