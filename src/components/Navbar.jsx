import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-12 bg-transparent text-white font-jetbrains">
      <h1 className="text-2xl font-bold text-green-400">Muhamad Aziz</h1>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className={`flex gap-8 md:flex-row flex-col md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-green-400 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-green-400 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skill"
            smooth={true}
            duration={500}
            className="hover:text-green-400 cursor-pointer"
          >
            Skill
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-green-400 cursor-pointer"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="license"
            smooth={true}
            duration={500}
            className="hover:text-green-400 cursor-pointer"
          >
            License
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-green-400 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
