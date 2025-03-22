import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-10 flex justify-between items-center py-6 px-6 md:px-12 bg-black text-white font-jetbrains">
      <h1 className="text-2xl font-bold text-green-400 md:text-3xl">Muhamad Aziz</h1>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <ul
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent text-white flex-col md:flex md:flex-row md:gap-8 items-center py-4 md:py-0 ${isMobileMenuOpen ? "flex" : "hidden"
          }`}
      >
        {["Home", "About", "Skill", "Work", "License", "Contact"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="hover:text-green-400 cursor-pointer px-4 md:px-0"
              activeClass="text-green-400 font-bold"
              spy={true}
              offset={-70}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default Navbar;
