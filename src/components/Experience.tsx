"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    company: "Colour Moon Technologies",
    role: "React Native Developer",
    duration: "Nov 2024 – Present",
    mode: "On-site",
    description:
      "Developing high-quality mobile applications with seamless UI/UX. Implementing custom video players, offline HLS downloads, and interactive OTT features ensuring performance and smooth experience.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    company: "Edu-Versity",
    role: "Machine Learning Intern",
    duration: "1 Month",
    mode: "Virtual",
    description:
      "Worked on building and training predictive models, gaining practical experience in data preprocessing and supervised learning during a virtual internship.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510] text-gray-200 overflow-hidden"
    >
      {/* 🔮 Animated Gradient Background Layers */}
      <div className="absolute -top-40 -left-32 w-[35rem] h-[35rem] bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-[160px] opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[38rem] h-[38rem] bg-gradient-to-bl from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-[160px] opacity-25 -z-10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.1),transparent_60%)] -z-10"></div>

      {/* ✨ Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 animate-shine"
      >
        Experience
      </motion.h2>

      {/* 🎯 Timeline */}
      <div className="relative mx-auto max-w-5xl before:absolute before:inset-y-0 before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 via-blue-400 to-cyan-500">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative mb-16 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } md:items-center`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.6)] z-10">
              {exp.icon}
            </div>

            {/* Card */}
            <div
              className={`relative w-full md:w-[45%] mt-10 md:mt-0 p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 ${
                index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
              }`}
            >
              <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan-400/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-3">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-4 mb-3">
                  <p className="text-sm text-purple-400 font-medium">
                    {exp.duration}
                  </p>
                  <p className="text-sm text-blue-400 font-medium">
                    {exp.mode}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Gradient Shine Animation */}
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
      `}</style>
    </section>
  );
};

export default Experience;
