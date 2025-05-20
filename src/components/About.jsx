import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaJs,
  FaDraftingCompass,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiArchicad,
  SiTailwindcss,
  SiAdobexd,
  SiBlender,
  SiMongodb,
} from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";
import mee from "../assets/Leslie.jpg";

const architecturalSkills = [
  { name: "Archicad", icon: <SiArchicad /> },
  { name: "Building Design", icon: <FaDraftingCompass /> },
  { name: "3D Modeling", icon: <SiBlender /> },
  { name: "Lumion", icon: <MdOutlineAnimation /> },
];

const softwareSkills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "UI/UX Design", icon: <SiAdobexd /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Responsive Design", icon: <SiMongodb /> },
];

const About = () => {
  const stats = [
    { number: "4+", label: "Years of Experience" },
    { number: "30+", label: "Satisfied Clients" },
    { number: "15+", label: "Finished Projects" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-10">
            Captivating stories birth magnificent designs.
          </h1>
        </motion.div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={mee}
              alt="Profile"
              className="w-60 h-100 rounded-full border-4 border-blue-400 shadow-lg ml-10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Hi, I am{" "}
              <span className="text-blue-400">Leslie Wambui Mwangi</span>
            </h2>
            <p className="text-lg text-white leading-relaxed mb-6 mr-10">
  I am a former architect turned software engineer. With a foundation in design and problem-solving from my years in architecture, I bring a unique perspective to building
  user-focused digital experiences. My passion lies in blending creativity with technology, crafting intuitive and visually compelling applications. Whether designing structures or writing code, I thrive on innovation and continuous learning to create solutions that enhance functionality, efficiency, and user engagement.
</p>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Portfolio
            </motion.button> */}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 text-center transform hover:rotate-2 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            Skills & Expertise
          </h2>

          {/* Architectural Skills */}
          <h3 className="text-4xl font-bold text-white mb-6">
            Architectural Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {architecturalSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 px-6 py-3 rounded-full text-white"
              >
                <span className="text-white text-3xl">{skill.icon}</span>{" "}
                <span>{skill.name}</span>
              </motion.span>
            ))}
          </div>

          {/* Software Engineering Skills */}
          <h3 className="text-4xl font-bold text-white mb-6">
            Software Engineering Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softwareSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 px-6 py-3 rounded-full text-white"
              >
                <span className="text-white text-3xl">{skill.icon}</span>{" "}
                <span>{skill.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
