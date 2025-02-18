import React from "react";
import { motion } from "framer-motion";
import drawing from "../assets/drawing 1.jpg";
import thumb from "../assets/thumb1.png";
import weather from "../assets/weather.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Apartment Design",
    description: "A sleek, modern apartment with smart features and energy-efficient lighting.",
    image: drawing,
  },
  {
    id: 2,
    title: "Eco-Friendly House",
    description: "A sustainable home with solar panels and an organic garden.",
    image: drawing,
  },
  {
    id: 3,
    title: "Haki App",
    description: "A revolutionary platform that seamlessly connects motorbike riders with legal professionals, ensuring quick and efficient access to legal assistance when needed.",
    image: thumb,
    link: "https://main--hakiproject.netlify.app/",
  },
  {
  id: 4,
  title: "Weather App",
  description: "A user-friendly weather app that provides accurate and up-to-date weather forecasts for any location",
  image: weather,
  link: "https://weather-app-kappa-hazel.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('/api/placeholder/1920/1080')]" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 mt-16">
        <motion.h1
          className="text-4xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>

        <p className="mt-6 text-lg text-white max-w-2xl text-center">
          A collection of architectural and software development projects showcasing innovation and expertise.
        </p>

        {/* Projects Grid */}
        <section className="mt-16 w-full max-w-6xl grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700/50"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <div className="absolute -top-6 left-6 bg-blue-500 rounded-xl p-3 shadow-lg text-white font-bold">
                🏛️
              </div> */}

              {/* Clickable Image if a Link Exists */}
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full object-cover mt-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              ) : (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full object-cover mt-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <h3 className="text-2xl font-semibold text-blue-300 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
