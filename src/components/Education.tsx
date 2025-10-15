"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science (M.Sc) in Artificial Intelligence",
      institution: "Brandenburg University of Technology (BTU)",
      duration: "Oct 2025 – Present",
      // score: "CGPA: Exams not yet conducted",
      description:
        "Currently pursuing advanced studies in Artificial Intelligence, focusing on Machine Learning, Neural Networks, and Autonomous Systems. Engaging in research and applied AI solutions in Germany.",
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution:
        "Kalasalingam Academy of Research and Education, Srivilliputhur",
      duration: "2020 – 2024",
      score: "CGPA: 7.95 / 10 (160 Credits Earned)",
      description:
        "Graduated with a strong foundation in Computer Science, specializing in Artificial Intelligence, Data Science, and Software Engineering. Developed hands-on expertise through academic and industry projects.",
    },
    {
      id: 3,
      degree: "Higher Secondary Education",
      institution: "Narayana Junior College",
      duration: "2018 – 2020",
      score: "Percentage: 87%",
      description:
        "Focused on core disciplines of Physics, Chemistry, and Mathematics, cultivating analytical and logical reasoning skills.",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-20 bg-[#020617] text-gray-200 overflow-hidden"
    >
      {/* === Animated Gradient Background (same as Hero) === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[600px] h-[600px] bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* === Section Heading === */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-shine"
      >
        Education
      </motion.h2>

      {/* === Horizontal Scrollable Cards === */}
      <div className="relative z-10 flex flex-wrap md:flex-nowrap justify-center gap-10 md:gap-14 items-stretch overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="min-w-[300px] md:min-w-[350px] lg:min-w-[380px] snap-center relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all duration-500"
          >
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 hover:border-cyan-400/20 transition-all duration-500 flex flex-col">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] mx-auto animate-pulse">
                <GraduationCap className="text-white w-6 h-6" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-2">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-400 text-center mb-2">
                {edu.institution}
              </p>
              <div className="text-center mb-3">
                <p className="text-sm text-purple-400 font-medium">
                  {edu.duration}
                </p>
                <p className="text-sm text-blue-400 font-medium">
                  {edu.score}
                </p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === Animations === */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Education;
