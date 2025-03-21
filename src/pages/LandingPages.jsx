import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';

const LandingPages = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default LandingPages;
