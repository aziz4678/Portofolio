import React from 'react';
import job from '../assets/job.png';
import film from '../assets/film.png';
import calculator from '../assets/calculator.png';
import desa from '../assets/desa.png';

const projects = [
  {
    name: "MyFlix",
    description: "A movie review website.",
    features: "Review films, browse movies, responsive design.",
    image: film,
    link: "https://reactjs-myflix.netlify.app/",
    tech: "React, JavaScript, Tailwindcss"
  },
  {
    name: "JobPortal",
    description: "A job searching platform.",
    features: "Job listings, job application, user authentication.",
    image: job,
    link: "https://reactjs-batch64-job-portal.netlify.app/",
    tech: "React, Tailwindcss, Node.js, MongoDB"
  },
  {
    name: "Administrasi Desa",
    description: "A village administration service app.",
    features: "Document requests, admin panel, public services.",
    image: desa,
    link: "https://github.com/aziz4678/Administrasi-Desa",
    tech: "PHP, MySQL, Boostrap"
  },
  {
    name: "Calculator",
    description: "An online calculator app.",
    features: "Basic operations, responsive UI, easy to use.",
    image: calculator,
    link: "https://github.com/aziz4678/Calculator",
    tech: "HTML, CSS, JavaScript"
  }
];

const Work = () => {
  return (
    <section className="min-h-screen px-6 md:px-12 bg-black text-white font-jetbrains flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12">My Projects</h2>
      <p className="text-lg text-center text-gray-300 mb-8">
        Discover the projects I've been working on, showcasing my skills in various technologies and problem-solving approaches.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl mb-4 w-full h-48 object-cover transition-all duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-1 text-green-400">{project.description}</p>
            <p className="mb-4 text-sm text-gray-400">{project.features}</p>
            <p className="mb-4 text-sm text-gray-500">Technologies: {project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
