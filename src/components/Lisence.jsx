import React from 'react'
import dtm from '../assets/dtm.png'
import mlp from '../assets/mlp.png'
import pds from '../assets/pds.png'
import sanber from '../assets/sanber.png'
import toefl from '../assets/toefl.png'

const licenses = [
  {
    name: "Sanbercode ReactJS Batch 64",
    description: "A ReactJS Bootcamp from Sanbercode.",
    image: sanber,
    link: "https://drive.google.com/file/d/1PUmwGTgfgYZb2qvdoY8Srmy2YfeOpK-A/view?usp=sharing",
    year: "2025"
  },
  {
    name: "Data Science Methodology",
    description: "A course on Data Science methodologies.",
    image: dtm,
    link: "https://drive.google.com/file/d/1XRdY_X7eDK7jV9VCiBsDtwtAqnpJTs0L/view?usp=drive_link",
    year: "2023"
  },
  {
    name: "Machine Learning with Python",
    description: "A course on Machine Learning using Python.",
    image: mlp,
    link: "https://drive.google.com/file/d/1FZCfpyx7xtYyWhYQ95SITiPSZXeAe0O4/view?usp=sharing",
    year: "2023"
  },
  {
    name: "Python for Data Science",
    description: "A course on Python for Data Science.",
    image: pds,
    link: "https://drive.google.com/file/d/1aLkCy5Y-hqQ7_JCvVgwKICxdRcgPg4j3/view?usp=drive_link",
    year: "2023"
  },
  {
    name: "TOEFL",
    description: "A certification for TOEFL exam preparation.",
    image: toefl,
    link: "https://drive.google.com/file/d/1KR3iKs8FKJpV6ItnCeFqf5XAdKGHqcyg/view?usp=sharing",
    year: "2024"
  }
];

const License = () => {
  return (
    <section className="min-h-screen px-6 md:px-12 bg-black text-white font-jetbrains flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12">My Licenses</h2>
      <p className="text-lg text-center text-gray-300 mb-8">
        Explore the licenses and certifications I have earned throughout my career, demonstrating my commitment to continuous learning and growth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {licenses.map((license, index) => (
          <div
            key={index}
            className="relative bg-[#0f0f0f] p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
          >
            <img
              src={license.image}
              alt={license.name}
              className="rounded-xl w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/100 via-black/95 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-2xl font-semibold text-white">{license.name}</h3>
              <p className="text-green-400">{license.year}</p>
              <p className="text-sm text-gray-400">{license.description}</p>
              <a
                href={license.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                View License
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default License;
