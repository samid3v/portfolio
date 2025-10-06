"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      image: "🛍️",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500",
      github: "#",
      live: "#",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by AI with natural language processing and smart responses.",
      image: "🤖",
      tags: ["React", "Node.js", "OpenAI", "Socket.io"],
      color: "from-purple-500 to-pink-500",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals with drag-and-drop interface and SEO optimization.",
      image: "📱",
      tags: ["Vue.js", "Firebase", "Tailwind", "Vercel"],
      color: "from-green-500 to-emerald-500",
      github: "#",
      live: "#",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking app with workout plans, progress analytics, and social features.",
      image: "💪",
      tags: ["React Native", "MongoDB", "Express", "AWS"],
      color: "from-orange-500 to-red-500",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management platform with kanban boards, time tracking, and team analytics.",
      image: "📊",
      tags: ["Angular", "NestJS", "GraphQL", "Docker"],
      color: "from-indigo-500 to-purple-500",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with real-time data, forecasts, and interactive maps.",
      image: "🌤️",
      tags: ["Svelte", "API Integration", "D3.js", "Netlify"],
      color: "from-yellow-500 to-amber-500",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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
            <Sparkles size={20} className="text-amber-500" />
            <span className="text-amber-500 font-semibold">Featured Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative designs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#16213e] to-[#0f1729] rounded-3xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all duration-500 h-full flex flex-col">
                {/* Project Icon/Image */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg`}
                  >
                    {project.image}
                  </motion.div>
                  
                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6 pt-6 border-t border-gray-800">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-lg shadow-amber-500/30"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
