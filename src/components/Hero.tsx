"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero: React.FC = () => {
  const fullName = "Nikhil Durgesh Katta";
  const [typedName, setTypedName] = useState("");

  // Typing + looping animation for name
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i));
      i++;
      if (i > fullName.length) i = 0;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to About section
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#020617] text-gray-100 px-8 md:px-20 overflow-hidden">
        {/* --- Neon Gradient Background Blobs (same as Skills) --- */}
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* LEFT: Text Section */}
        <motion.div
          className="relative z-10 md:w-1/2 space-y-6 md:space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className={`${poppins.className} text-5xl md:text-6xl font-bold leading-tight`}
          >
            <span className="block text-gray-300">Hi, I’m</span>

            {/* Animated Name with shine effect */}
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 ease-in-out hover:scale-110 animate-shine">
              {typedName}
            </span>

            {/* Continuously Animated Subtitle */}
            <span className="block text-xl md:text-2xl font-semibold bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent mt-2 animate-shine">
              Certified Python Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
            Front-End Developer specializing in OTT & AI-powered digital
            experiences. With over{" "}
            <span className="text-cyan-400 font-semibold">
              1 year of hands-on
            </span>{" "}
            development.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Local resume file */}
            <a
              href="/Resume_NikhilDurgesh.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-400/30 transition-all hover:scale-105"
            >
              📄 Download CV
            </a>

            <button
              onClick={handleScrollToAbout}
              className="px-6 py-3 rounded-full border border-gray-600 hover:border-cyan-400 text-gray-300 font-semibold hover:text-white hover:bg-gray-800 transition-all"
            >
              Know more about me
            </button>
          </div>
        </motion.div>

        {/* RIGHT: Profile Image */}
        <motion.div
          className="relative z-10 md:w-1/2 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[6px] border-transparent bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[3px] shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
              <Image
                src={require("../assets/nikhil.jpg")}
                alt="Nikhil Durgesh Katta"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Continuous shine animation */}
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
    </>
  );
};

export default Hero;
