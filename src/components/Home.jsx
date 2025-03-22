// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Photo from './Photo';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="min-h-screen flex flex-wrap items-center justify-center md:justify-between px-6 md:px-12 bg-black font-jetbrains"
    >
      <div className="max-w-2xl text-center md:text-left -mt-10">
        <p className="text-green-400 mb-4">Frontend Developer</p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          Hello I'm{' '}
          <span className="text-green-400">
            <Typewriter
              words={['Muhamad Aziz']}
              loop={1}
              cursor={false}
              typeSpeed={190}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <p className="max-w-xl text-gray-400 mb-6">
          I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
        </p>

        <div className="flex justify-center md:justify-start items-center gap-6 mb-12">
          <a
            href="https://drive.google.com/file/d/1zAtYS3WZiiUShgqBuBDUOPE0IHVFSJcN/view?usp=sharing"
            className="flex items-center gap-2 px-5 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"          
          >
            Download CV <FiDownload className="text-sm" />
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/aziz4678"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-aziz-89a747195/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://www.instagram.com/azmuhamaaad/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="http://wa.me/6282110781175"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="https://www.youtube.com/@muhamadaziz5953"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
        className="flex-shrink-0 w-[500px] h-[450px] relative -ml-10"
      >
        <Photo />
      </motion.div>
    </motion.section>
  );
};

export default Home;
