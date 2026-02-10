import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects'; // This is your self-contained component
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-main-bg overflow-x-hidden">
      <div className="noise" />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
}

export default App;