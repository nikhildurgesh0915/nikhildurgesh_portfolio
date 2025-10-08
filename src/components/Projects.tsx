"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);

  const projects = [
    {
      id: 1,
      title: "IntelliStream – OTT Video Streaming App",
      description:
        "A full-fledged OTT mobile app built with React Native. Supports HLS streaming, offline downloads, push notifications, and multi-quality playback. Inspired by Netflix UI, it delivers a seamless viewing experience.",
      tech: ["React Native", "Firebase", "HLS", "SQLite"],
      live: "#",
      github: "#",
      image: "https://www.etvwin.com/images/logo-25.png",
    },
    {
      id: 2,
      title: "AI Disease Prediction System",
      description:
        "A machine learning web application that predicts potential diseases from user input using advanced ML algorithms. Developed with Flask, it delivers real-time predictions through a modern, minimal dashboard.",
      tech: ["Python", "Flask", "Machine Learning"],
      live: "#",
      github: "#",
      image:
        "https://datatunnel.io/wp-content/uploads/2024/10/ai-disease-detection.webp",
    },
    {
      id: 3,
      title: "3D Interactive Portfolio",
      description:
        "A visually rich developer portfolio created using Next.js, Three.js, and Framer Motion. It features 3D visuals, parallax motion, and smooth animations for a futuristic and immersive browsing experience.",
      tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
      live: "#",
      github: "#",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/8ba613223050639.Y3JvcCw2MTM2LDQ4MDAsMTM2LDA.png",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 md:px-20 text-gray-200 overflow-hidden bg-[#020617]"
    >
      {/* Glowing Orbs */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Subtle overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
      >
        Featured Projects
      </motion.h2>

      {/* Project List */}
      <div className="flex flex-col gap-24 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className={`relative flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 md:gap-20`}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 160 }}
              className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-cyan-400/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[500px] h-[300px] object-cover rounded-3xl transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </motion.div>

            {/* Text Content */}
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-1.5 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 shadow-md shadow-purple-600/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-6">
                <motion.a
                  href={project.live}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-cyan-400/30 transition-all"
                >
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-2.5 rounded-full text-white hover:bg-white/20 transition"
                >
                  <Github className="w-5 h-5" /> Source Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
