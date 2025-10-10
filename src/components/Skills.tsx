"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import icons to prevent SSR hydration errors
const SiJavascript = dynamic(() => import("react-icons/si").then(mod => mod.SiJavascript), { ssr: false });
const SiTypescript = dynamic(() => import("react-icons/si").then(mod => mod.SiTypescript), { ssr: false });
const SiReact = dynamic(() => import("react-icons/si").then(mod => mod.SiReact), { ssr: false });
const SiNodedotjs = dynamic(() => import("react-icons/si").then(mod => mod.SiNodedotjs), { ssr: false });
const SiFirebase = dynamic(() => import("react-icons/si").then(mod => mod.SiFirebase), { ssr: false });
const SiSwift = dynamic(() => import("react-icons/si").then(mod => mod.SiSwift), { ssr: false });
const SiKotlin = dynamic(() => import("react-icons/si").then(mod => mod.SiKotlin), { ssr: false });
const SiCss3 = dynamic(() => import("react-icons/si").then(mod => mod.SiCss3), { ssr: false });
const SiPython = dynamic(() => import("react-icons/si").then(mod => mod.SiPython), { ssr: false });
const SiOpencv = dynamic(() => import("react-icons/si").then(mod => mod.SiOpencv), { ssr: false });
const SiTensorflow = dynamic(() => import("react-icons/si").then(mod => mod.SiTensorflow), { ssr: false });
const SiPytorch = dynamic(() => import("react-icons/si").then(mod => mod.SiPytorch), { ssr: false });
const SiNumpy = dynamic(() => import("react-icons/si").then(mod => mod.SiNumpy), { ssr: false });
const SiPandas = dynamic(() => import("react-icons/si").then(mod => mod.SiPandas), { ssr: false });
const SiMysql = dynamic(() => import("react-icons/si").then(mod => mod.SiMysql), { ssr: false });
const SiGit = dynamic(() => import("react-icons/si").then(mod => mod.SiGit), { ssr: false });
const SiGooglecloud = dynamic(() => import("react-icons/si").then(mod => mod.SiGooglecloud), { ssr: false });
const FaJava = dynamic(() => import("react-icons/fa").then(mod => mod.FaJava), { ssr: false });
const FaCode = dynamic(() => import("react-icons/fa").then(mod => mod.FaCode), { ssr: false });
const VscVscode = dynamic(() => import("react-icons/vsc").then(mod => mod.VscVscode), { ssr: false });

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
  { name: "Swift", icon: <SiSwift className="text-red-400" /> },
  { name: "Machine Learning", icon: <SiTensorflow className="text-orange-400" /> },
  { name: "Deep Learning", icon: <SiPytorch className="text-red-500" /> },
  { name: "Computer Vision", icon: <SiOpencv className="text-blue-500" /> },
  { name: "NLP", icon: <SiPandas className="text-emerald-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
  { name: "MySQL / SQLite", icon: <SiMysql className="text-sky-400" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
  { name: "Git / GitHub", icon: <SiGit className="text-orange-500" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
  { name: "DSA", icon: <FaCode className="text-gray-300" /> },
];

const AnimatedSkill: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300"
  >
    <div className="text-4xl mb-3">{skill.icon}</div>
    <p className="font-medium text-gray-300">{skill.name}</p>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 text-gray-200 overflow-hidden bg-[#020617]">
      {/* Background Neon Gradient Circles */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        >
          Tech Stack & Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
        >
          A blend of mobile app development, AI, and cloud technologies — combining React Native expertise
          with a strong foundation in Python, Machine Learning, and Cloud Computing.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10">
          {skills.map((skill, index) => (
            <AnimatedSkill key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
