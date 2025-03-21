import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start text-white px-12 bg-black font-jetbrains">
      <p className="text-green-400 mb-4">Frontend Developer</p>
      <h1 className="text-5xl font-bold mb-4">Hello I'm <span className="text-green-400">Muhamad Aziz</span></h1>
      <p className="max-w-xl text-gray-400 mb-6">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
      <div className="flex items-center gap-4 mb-12">
        <button className="px-6 py-2 bg-green-400 text-black font-semibold rounded-full">Download CV</button>
        <div className="flex gap-4 text-xl">
          <i className="fab fa-github hover:text-green-400 cursor-pointer"></i>
          <i className="fab fa-linkedin hover:text-green-400 cursor-pointer"></i>
          <i className="fab fa-twitter hover:text-green-400 cursor-pointer"></i>
        </div>
      </div>
      <div className="flex gap-12">
        <div>
          <h2 className="text-3xl font-bold">12</h2>
          <p className="text-gray-400">Years of experience</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">26</h2>
          <p className="text-gray-400">Projects completed</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">8</h2>
          <p className="text-gray-400">Technologies mastered</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">500</h2>
          <p className="text-gray-400">Code commits</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
