import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-12 bg-transparent text-white font-jetbrains">
      <h1 className="text-2xl font-bold text-green-400">Muhamad Aziz</h1>
      <ul className="flex gap-8">
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
            Lisence
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
      <button className="ml-8 px-4 py-2 bg-green-400 text-black font-semibold rounded-full">
        Hire me
      </button>
    </nav>
  );
};

export default Navbar;
