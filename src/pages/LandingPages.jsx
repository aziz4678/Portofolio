import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Lisence from '../components/Lisence'

const LandingPages = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Lisence />
    </div>
  );
};

export default LandingPages;
