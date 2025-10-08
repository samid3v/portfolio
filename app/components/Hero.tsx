"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Sparkles } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/samid3v", label: "Github" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sammydev", label: "LinkedIn" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-amber-500 text-lg font-semibold flex items-center gap-2"
              >
                <Sparkles size={20} className="animate-pulse" />
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Sammy Wanyoike
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {["Web Developer", "Automation & AI Solutions", "IT Support"].map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium backdrop-blur-sm"
                  >
                    {role}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 text-lg max-w-xl leading-relaxed"
              >
                Innovative Full-Stack Developer with a strong background in web development, backend systems, and cloud-based automation. Skilled in designing and deploying full-stack applications, integrating AI-driven tools, and optimizing business workflows through technology.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/cv/Sammy_CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-amber-500/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all inline-block text-center"
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 hover:text-white transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Glowing Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer Glow Rings */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 blur-3xl opacity-50"
              />
              
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-2xl opacity-30"
              />

              {/* Profile Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-[#1a1a2e]" />
                </div>

                {/* Profile Image */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-transparent shadow-2xl">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-purple-500/10 to-orange-500/20 rounded-full z-10" />
                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 rounded-full z-20"
                  />
                  <img
                    src="/img/Sami-profle-img.png"
                    alt="Sammy Wanyoike"
                    className="w-full h-full object-cover z-30 rounded-full"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-amber-500/50"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles size={20} />
                    Available for Work
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
