import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-12 bg-transparent text-white font-jetbrains">
      <h1 className="text-2xl font-bold text-green-400">Muhamad Aziz</h1>
      <ul className="flex gap-8">
        <li className="hover:text-green-400 cursor-pointer">Home</li>
        <li className="hover:text-green-400 cursor-pointer">About</li>
        <li className="hover:text-green-400 cursor-pointer">Skill</li>
        <li className="hover:text-green-400 cursor-pointer">Work</li>
        <li className="hover:text-green-400 cursor-pointer">Lisence</li>
        <li className="hover:text-green-400 cursor-pointer">Contact</li>
      </ul>
      <button className="ml-8 px-4 py-2 bg-green-400 text-black font-semibold rounded-full">Hire me</button>
    </nav>
  );
};

export default Navbar;
