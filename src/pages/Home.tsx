import React from 'react';
import Hero from '../components/Hero';
import AISolutions from '../components/AISolutions';
import About from '../components/AboutSection';
import FounderSection from '../components/FounderSection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <AISolutions />
      <About />
      <FounderSection />
      <Contact />
    </div>
  );
};

export default Home;