"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading a team of developers in building scalable web applications using React and Next.js. Implemented modern UI/UX designs and improved performance by 40%.",
      achievements: ["Led 15+ projects", "Mentored 5 junior devs", "Reduced load time by 40%"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed full-stack applications using MERN stack. Collaborated with design teams to create responsive and accessible user interfaces.",
      achievements: ["Built 20+ web apps", "Integrated 3rd party APIs", "Improved UX scores by 30%"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: "Started my career building mobile and web applications. Learned modern development practices and contributed to agile development processes.",
      achievements: ["Developed first mobile app", "Learned React Native", "Contributed to open-source"],
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
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
            <span className="text-amber-500 font-semibold">Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the valuable experiences that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-transparent h-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-[#1a1a2e] z-10`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full max-w-lg ${index % 2 === 0 ? "mr-8" : "ml-8"} group relative`}
              >
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />

                <div className="relative bg-gradient-to-br from-[#16213e] to-[#0f1729] rounded-3xl p-8 border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <Briefcase size={24} className="text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-amber-500 font-medium mb-2">{exp.company}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
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
