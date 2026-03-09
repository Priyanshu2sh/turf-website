import React from 'react';
import Navbar from './components/Navbar';
import HeroAnimation from './components/HeroAnimation';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-green-500 selection:text-white">
      <Navbar />
      
      <main>
        <HeroAnimation />
        <Facilities />
        <HowItWorks />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
