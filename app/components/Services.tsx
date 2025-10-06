"use client";

import { motion } from "framer-motion";
import { Palette, Code, Smartphone, Sparkles, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create a beautiful and useful user interface design with a seamless user experience for your website or mobile app.",
      projectCount: "80 Projects",
      color: "from-pink-500 to-rose-500",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Build a quality website with the best technology and optimization on search engines to reach more customers.",
      projectCount: "120 Projects",
      color: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "SEO Optimization", "Performance", "Security"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Create an app from your own idea that can be used on Android and iOS with the best quality and performance.",
      projectCount: "50 Projects",
      color: "from-purple-500 to-indigo-500",
      features: ["Cross-Platform", "Native Apps", "App Store", "Push Notifications"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
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
            <span className="text-amber-500 font-semibold">What I Offer</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering exceptional digital solutions tailored to your needs with expertise and creativity
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-[#16213e] to-[#0f1729] rounded-3xl p-8 border border-gray-800 hover:border-amber-500/50 transition-all duration-500 h-full"
              >
                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                  >
                    <service.icon size={32} className="text-white relative z-10" />
                    
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
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}
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
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Count Badge */}
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium">
                      <Sparkles size={14} />
                      {service.projectCount}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-medium group/btn mt-4"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
