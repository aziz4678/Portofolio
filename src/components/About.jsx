import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen px-6 md:px-12 bg-black text-white font-jetbrains flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-4">
        About Me
      </h2>

      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Here's a quick overview of my academic background and work experience that shaped me into who I am today.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Education</h3>
          <div className="grid gap-6">
            <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold">Bachelor of Informatics Engineering</h4>
              <p>Maulana Malik Ibrahim State Islamic University Malang | 2020 - 2024</p>
              <p>GPA: 3.63 / 4.00</p>
            </div>
            <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold">React JS - Web Frontend Development</h4>
              <p>Sanbercode Bootcamp Batch 64 | 2025</p>
              <p>Final Score: 93 / 100</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Experience</h3>
          <div className="grid gap-6">
            <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold">IT Support</h4>
              <p>State University of Malang | Jun 2018 - Jan 2019</p>
              <p className="text-sm mt-1">Provided technical assistance and troubleshooting for campus IT infrastructure.</p>
            </div>
            <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold">IT Support</h4>
              <p>Malang City Religious Affairs Office | Jun 2023 - Aug 2023</p>
              <p className="text-sm mt-1">Maintained and optimized computer systems and network operations for staff. Successfully built a major project: a WhatsApp chatbot integrated with ChatGPT using Python to enhance public service.</p>
            </div>
            <div className="bg-[#0f0f0f] p-6 rounded-2xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold">Freelance Web & Game Developer</h4>
              <p>2024 - Present</p>
              <p className="text-sm mt-1">Developed custom websites and 2D/3D games for various clients and projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
