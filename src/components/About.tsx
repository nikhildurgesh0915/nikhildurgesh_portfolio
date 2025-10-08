"use client";

import { motion } from "framer-motion";

const About: React.FC = () => {
  const skills = ["Python", "Machine Learning", "AI", "OTT platforms"];
  const imageUrl =
    "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-gray-950/90"></div>
      </div>

      {/* Floating Gradient Blobs */}
      <div className="absolute -top-32 -left-24 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center md:text-left">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="leading-relaxed text-lg md:text-xl text-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I’m{" "}
          <span className="font-semibold text-white">Nikhil Durgesh Katta</span>, a
          passionate and driven developer deeply interested in technology and
          innovation. My expertise lies in{" "}
          {skills.map((skill, index) => (
            <span
              key={index}
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-1"
            >
              {skill}
            </span>
          ))}
          . I have{" "}
          <span className="font-medium text-cyan-400">1+ year of experience</span>{" "}
          in front-end mobile application development — particularly{" "}
          <span className="font-medium text-cyan-400">OTT platforms</span> — where
          I focus on creating intuitive, high-performance, and visually engaging
          applications.
          <br />
          <br />
          My approach combines elegant UI/UX design, efficient code architecture,
          and a deep curiosity for emerging technologies. I’m constantly learning
          and evolving to craft modern, seamless experiences across both web and
          mobile platforms.
        </motion.p>

        {/* Accent Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
