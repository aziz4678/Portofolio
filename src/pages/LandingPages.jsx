// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Lisence from '../components/Lisence'
import Contact from '../components/Contact';

const LandingPages = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Home />
      </motion.section>
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.section>
      <motion.section
        id="skill"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Skill />
      </motion.section>
      <motion.section
        id="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Work />
      </motion.section>
      <motion.section
        id="license"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Lisence />
      </motion.section>
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default LandingPages;
