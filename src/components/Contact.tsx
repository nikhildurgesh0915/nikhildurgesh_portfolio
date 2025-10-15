"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_2lpaut4",
        "template_2163k94",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "durgesh.techie@gmail.com",
        },
        "oUxGPhPy-FgI18JqT"
      )
      .then(
        () => {
          setIsLoading(false);
          setSent(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsLoading(false);
        }
      );
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/nikhildurgesh0915?tab=repositories",
      color: "from-gray-700 to-gray-900",
      delay: 0.6,
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/nikhil-durgesh/",
      color: "from-blue-500 to-cyan-400",
      delay: 0,
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/yourprofile",
      color: "from-sky-400 to-blue-600",
      delay: 0.2,
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/919441275014",
      color: "from-green-400 to-emerald-600",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative min-h-screen py-24 px-6 md:px-20 text-gray-200 overflow-hidden bg-[#020617]">
      {/* Background Accents */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Let's Connect
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Have an idea, opportunity, or collaboration in mind? I’m always open to
            discussing exciting projects or innovations. Let’s create something amazing together.
          </p>

          <div className="mt-10 space-y-5 text-gray-300">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400 w-6 h-6" />
              <span className="text-lg">durgesh.techie@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400 w-6 h-6" />
              <span className="text-lg">+91 9441275014</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400 w-6 h-6" />
              <span className="text-lg">India / Germany (relocating)</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -6, 0],
                  boxShadow: [
                    "0 0 10px rgba(0,0,0,0.1)",
                    "0 0 20px rgba(0,0,0,0.2)",
                    "0 0 10px rgba(0,0,0,0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: social.delay,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-full bg-gradient-to-tr ${social.color} shadow-lg shadow-cyan-500/30 text-white text-2xl transition-transform`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl space-y-6"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-purple-600/5 to-transparent pointer-events-none"></div>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full bg-black/40 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-black/40 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 h-32 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-5 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
            {!isLoading && <Send className="w-5 h-5" />}
          </motion.button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center font-medium mt-4"
            >
              ✅ Message Sent Successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
