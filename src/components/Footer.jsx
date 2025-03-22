import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-12 font-jetbrains">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Muhamad Aziz</h2>
            <p className="text-gray-400 mb-4">
              I am a passionate frontend developer focused on creating modern, interactive web applications.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-green-400 mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/aziz4678"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhamad-aziz-89a747195/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.instagram.com/azmuhamaaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="http://wa.me/6282110781175"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.youtube.com/@muhamadaziz5953"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400 text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Muhamad Aziz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
