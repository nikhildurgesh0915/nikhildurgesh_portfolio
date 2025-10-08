"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const services = [
  {
    name: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Building responsive, modern, and scalable websites using HTML, CSS, JS, and React.",
  },
  {
    name: "App Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Creating performant mobile applications with React Native and modern front-end technologies.",
  },
  {
    name: "Python / AI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Developing AI solutions, automation scripts, and backend services with Python.",
  },
  {
    name: "Node.js / Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Designing robust backend services and REST APIs using Node.js and Express.",
  },
  {
    name: "Database / MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "Implementing scalable database solutions using MongoDB for web and mobile apps.",
  },
  {
    name: "Frontend Frameworks",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Creating dynamic and interactive frontends with JavaScript and modern frameworks.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0a0a0f] text-gray-100 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-700 rounded-full opacity-20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          className={`${poppins.className} text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 shadow-lg"
            >
              <div className="w-16 h-16 mb-4">
                <img src={service.icon} alt={service.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-[pulse_6s_ease-in-out_infinite] { animation: pulse 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Services;
