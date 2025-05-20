import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import mee from "../assets/mee.jpg";
import drawing from "../assets/architectural drawing.jpg";
import software from "../assets/dev.jpg";


const Home = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      client: "Alice Johnson",
      title: "CEO, Tech Innovators",
      comment:
        "Leslie's ability to merge creative design with robust technical solutions is truly exceptional. Our project exceeded expectations.",
    },
    {
      id: 2,
      client: "Mark Smith",
      title: "Founder, Creative Ventures",
      comment:
        "Working with Leslie was a game-changer. The seamless blend of architecture and software expertise brought our vision to life.",
    },
  ];

  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 mix-blend-overlay"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
        {/* Profile Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 mt-20">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Leslie<span className="text-white"> Mwangi.</span>
              </h1>
              <h2 className="text-xl md:text-3xl font-bold mt-4 text-white">
                Architect & Software Engineer
              </h2>
              <h3 className="mt-6 text-2xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                From Blueprints to Code: Crafting Seamless Digital Experiences
              </h3>
              <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
                I started my journey in architecture, mastering the art of design,
                structure and functionality in physical spaces. Over the past five
                years, I have transitioned into full-stack development, blending my
                architectural precision with technical expertise to build intuitive,
                high-performing digital solutions. Whether designing seamless user
                interfaces or architecting robust back-end systems, I bring ideas to
                life with a balance of creativity and logic.
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative md:ml-8">
              <img
                src={mee}
                alt="Profile"
                className="w-60 h-50 rounded-full border-4 border-blue-400 shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Services Cards */}
        <section className="mt-16 w-full max-w-6xl text-center px-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
            What I Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="group relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700/50"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-6 left-6 bg-blue-500 rounded-xl p-3 shadow-lg text-white font-bold">
                🏛️
              </div>
              <h3 className="text-2xl font-semibold text-blue-300 mt-4">
                Architecture Design
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Creating modern and functional spaces with innovative designs that
                push boundaries.
              </p>
              <button
                onClick={() => navigate("/projects")}
                className="mt-6 w-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={drawing}
                  alt="Architecture"
                  className="rounded-lg w-full object-cover"
                />
              </button>
            </motion.div>

            <motion.div
              className="group relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700/50"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-6 left-6 bg-purple-500 rounded-xl p-3 shadow-lg text-white font-bold">
                💻
              </div>
              <h3 className="text-2xl font-semibold text-purple-300 mt-4">
                Software Development
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Building cutting-edge web applications that enhance user experiences.
              </p>
              <button
                onClick={() => navigate("/projects")}
                className="mt-6 w-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={software}
                  alt="Development"
                  className="rounded-lg w-full object-cover"
                />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24 w-full max-w-6xl text-center px-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-12">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(({ id, client, title, comment }) => (
              <motion.div
                key={id}
                className="relative bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700/50"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -top-6 right-6 text-2xl">⭐</div>
                <div className="flex items-center mb-6">
                  <img
                    src={`/api/placeholder/60/60`}
                    alt={client}
                    className="w-12 h-12 rounded-full border-2 border-blue-400"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="font-semibold text-blue-300">{client}</h4>
                    <p className="text-sm text-gray-400">{title}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">{comment}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          className="mt-24 mb-24 text-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-12 rounded-3xl backdrop-blur-lg border border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Let us Create Something Amazing
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Ready to bring your ideas to life? Let us start the conversation.
          </p>
          <motion.a
            href="/contact"
            className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;