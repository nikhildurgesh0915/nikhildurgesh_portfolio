"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 🧭 Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (item: { name: string; id: string }) => {
    setIsOpen(false);
    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-lg border-b border-white/20 shadow-lg"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">
            MyPortfolio
          </span>
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-10">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                scale: 1.15,
                color: "#38bdf8",
                textShadow: "0px 0px 10px rgba(56,189,248,0.8)",
              }}
              className={`relative text-lg font-semibold cursor-pointer transition-all ${
                activeSection === item.id ? "text-cyan-400" : "text-white"
              }`}
              onClick={() => handleMenuClick(item)}
            >
              {item.name}
              {/* Glowing underline */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* MOBILE MENU ICON */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-white w-7 h-7" />
          ) : (
            <Menu className="text-white w-7 h-7" />
          )}
        </motion.div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-[72px] left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-t border-white/20"
          >
            <ul className="flex flex-col items-center py-8 space-y-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    color: "#38bdf8",
                    textShadow: "0px 0px 10px rgba(56,189,248,0.9)",
                  }}
                  className={`text-xl font-semibold cursor-pointer ${
                    activeSection === item.id ? "text-cyan-400" : "text-white"
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
