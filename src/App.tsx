
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Support from './components/Support';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Industries />
        <CaseStudies />
        <Support />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;