import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skill from '../components/Skill';
import Work from '../components/Work';

const LandingPages = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
    </div>
  );
};

export default LandingPages;
