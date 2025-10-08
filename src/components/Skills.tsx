"use client";

import { motion } from "framer-motion";
import { FaPython, FaAws, FaDatabase, FaBrain } from "react-icons/fa";

const Skills: React.FC = () => {
  const icons = [
    { icon: <FaPython size={40} />, label: "Python" },
    { icon: <FaBrain size={40} />, label: "Machine Learning" },
    { icon: <FaAws size={40} />, label: "Cloud Computing" },
    { icon: <FaDatabase size={40} />, label: "SQL" },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {icons.map(({ icon, label }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center text-center p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-blue-400 mb-2">{icon}</div>
            <p>{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
