import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaNodeJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVercel, SiNetlify, SiPostman, SiXampp } from 'react-icons/si';

const skills = [
    { icon: <FaReact size={40} className="text-cyan-400" />, name: "React" },
    { icon: <FaPhp size={40} className="text-indigo-500" />, name: "PHP" },
    { icon: <FaDatabase size={40} className="text-yellow-700" />, name: "MySQL" },
    { icon: <SiPostman size={40} className="text-orange-500" />, name: "Postman" },
    { icon: <FaBootstrap size={40} className="text-purple-600" />, name: "Bootstrap" },
    { icon: <FaGithub size={40} className="text-white" />, name: "GitHub" },
    { icon: <SiNetlify size={40} className="text-blue-500" />, name: "Netlify" },
    { icon: <SiTailwindcss size={40} className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <FaNpm size={40} className="text-red-600" />, name: "NPM" },
    { icon: <FaJs size={40} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiMongodb size={40} className="text-green-600" />, name: "MongoDB" },
    { icon: <FaGitAlt size={40} className="text-orange-600" />, name: "Git" },
    { icon: <SiXampp size={40} className="text-orange-400" />, name: "XAMPP" },
    { icon: <FaFigma size={40} className="text-pink-500" />, name: "Figma" },
    { icon: <SiVercel size={40} className="text-white" />, name: "Vercel" },
    { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS" },
    { icon: <FaNodeJs size={40} className="text-green-500" />, name: "NodeJS" }
  ];  

const Skill = () => {
  return (
    <section className="min-h-screen px-6 md:px-12 bg-black text-white font-jetbrains flex flex-col justify-center mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12">
        Skills
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto -mt-6">
      These are the tools I frequently use to build and develop my projects.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#0f0f0f] p-4 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
