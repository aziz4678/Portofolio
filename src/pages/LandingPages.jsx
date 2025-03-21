import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

const LandingPages = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default LandingPages;
