"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Smartphone, Zap, Sparkles } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: Code,
      name: "Full-Stack Development",
      level: 95,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      name: "Web Development",
      level: 90,
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Database,
      name: "Database Management",
      level: 88,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      name: "Automation & Scripting",
      level: 92,
      color: "from-blue-600 to-indigo-500",
    },
    {
      icon: Smartphone,
      name: "AI & Cloud Solutions",
      level: 85,
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Palette,
      name: "Cybersecurity",
      level: 80,
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4"
          >
            <Sparkles size={20} className="text-amber-500 animate-pulse" />
            <span className="text-amber-500 font-semibold">Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life with precision and creativity
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-[#16213e] to-[#0f1729] rounded-3xl p-8 border border-gray-800 hover:border-amber-500/50 transition-all duration-500"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                  >
                    <skill.icon size={32} className="text-white relative z-10" />

                    {/* Icon Shine */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${10 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-amber-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
