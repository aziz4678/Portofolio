import React from 'react';
import Photo from './Photo';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-wrap items-center justify-center md:justify-between px-6 md:px-12  bg-black font-jetbrains">
      {/* Content Section */}
      <div className="max-w-2xl text-center md:text-left -mt-10">
        <p className="text-green-400 mb-4">Frontend Developer</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Hello I'm <span className="text-green-400">Muhamad Aziz</span>
        </h1>
        <p className="max-w-xl text-gray-400 mb-6">
          I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4 mb-12">
          <button className="px-6 py-2 bg-green-400 text-black font-semibold rounded-full">
            Download CV
          </button>
          <div className="flex gap-4 text-xl">
            <i className="fab fa-github hover:text-green-400 cursor-pointer"></i>
            <i className="fab fa-linkedin hover:text-green-400 cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-green-400 cursor-pointer"></i>
          </div>
        </div>
      </div>
      {/* Photo Section */}
      <div className="flex-shrink-0 w-[500px] h-[450px] relative -ml-10">
        <Photo />
      </div>
    </section>
  );
};

export default Home;
