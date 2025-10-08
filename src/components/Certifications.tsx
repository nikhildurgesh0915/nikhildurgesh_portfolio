"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useRef, useState } from "react";

// Certificates with images and validation links
const certifications = [
  {
    id: 1,
    name: "PCAP – Certified Associate in Python Programming",
    issuer: "Python Institute",
    link: "https://verify.openedg.org/?id=eHuP.1Cwr.zKcg",
    description: "Certified Associate in Python Programming (PCAP).",
    image: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1496536626/image15394355032870408899.png",
  },
  {
    id: 2,
    name: "Software Testing",
    issuer: "Self / Training",
    link: "https://drive.google.com/file/d/1cTAZfCG6O3LVz44MslVdh3VdnEbM-Y6N/view?usp=sharing",
    description: "Completed a certification in Software Testing fundamentals.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFeVuPM4PYJlg/article-cover_image-shrink_423_752/B56ZYbTHcoGsAU-/0/1744214719592?e=2147483647&v=beta&t=6_UqcEvY3_yVfJYVD_ekG7cyPXbETCO7GiBLR5jxK3w",
  },
  {
    id: 3,
    name: "PCEP – Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    link: "https://verify.openedg.org/?id=TNWL.oMLA.UJeF",
    description: "Entry-level Python Programmer certification (PCEP).",
    image: "https://pythoninstitute.org/assets/61f11fac8e6f4153315957.png",
  },
  {
    id: 4,
    name: "Cloud Computing",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1tbPbJDWmYR-zH5Mu5yRvNDThl4Vru944/view?usp=sharing",
    description: "Completed NPTEL certification on Cloud Computing fundamentals.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFeVuPM4PYJlg/article-cover_image-shrink_423_752/B56ZYbTHcoGsAU-/0/1744214719592?e=2147483647&v=beta&t=6_UqcEvY3_yVfJYVD_ekG7cyPXbETCO7GiBLR5jxK3w",
  },
  {
    id: 5,
    name: "Operation Management",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1cTAZfCG6O3LVz44MslVdh3VdnEbM-Y6N/view?usp=sharing",
    description: "Completed NPTEL certification on Operation Management principles.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFeVuPM4PYJlg/article-cover_image-shrink_423_752/B56ZYbTHcoGsAU-/0/1744214719592?e=2147483647&v=beta&t=6_UqcEvY3_yVfJYVD_ekG7cyPXbETCO7GiBLR5jxK3w",
  },
];

const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="certifications"
      className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510] text-gray-200 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute -top-40 -left-32 w-[35rem] h-[35rem] bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-[160px] opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[38rem] h-[38rem] bg-gradient-to-bl from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-[160px] opacity-25 -z-10 animate-pulse"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 animate-shine"
      >
        Certifications
      </motion.h2>

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex flex-nowrap justify-start gap-10 items-stretch overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="min-w-[320px] md:min-w-[360px] lg:min-w-[400px] snap-center relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500"
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-6 h-full border border-white/20 hover:border-cyan-400/40 transition-all duration-500 flex flex-col justify-between">
              
              {/* Certificate Image with Glow */}
              <div className="relative flex items-center justify-center w-28 h-28 mb-4 rounded-full shadow-lg mx-auto overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 blur-2xl animate-pulse"></div>
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="relative w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <Award className="text-white w-6 h-6 relative" />
                )}
              </div>

              {/* Certificate Info */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-400 text-center mb-2">{cert.issuer}</p>
                <p className="text-gray-300 text-sm leading-relaxed text-center mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Validate Button */}
              {cert.link && (
                <div className="flex justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition-colors"
                  >
                    Validate
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gradient Shine Animation */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
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

export default Certifications;
