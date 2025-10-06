"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Users, Award, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    { 
      icon: Briefcase,
      value: 250, 
      suffix: "+", 
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Users,
      value: 100, 
      suffix: "+", 
      label: "Satisfied Clients",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Award,
      value: 30, 
      suffix: "+", 
      label: "Awards Won",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: Clock,
      value: 10, 
      suffix: "+", 
      label: "Years Experience",
      color: "from-orange-500 to-amber-500"
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => setIsVisible(true)}
      className="group relative"
    >
      {/* Glow Effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="relative bg-gradient-to-br from-[#16213e] to-[#0f1729] rounded-3xl p-6 md:p-8 border border-gray-800 hover:border-amber-500/50 transition-all duration-500"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
        >
          <stat.icon size={24} className="text-white" />
        </motion.div>

        {/* Number */}
        <div className="space-y-2">
          <motion.h3
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
          >
            {count}{stat.suffix}
          </motion.h3>

          {/* Label */}
          <p className="text-gray-400 text-sm md:text-base font-medium">
            {stat.label}
          </p>
        </div>

        {/* Shine Effect */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 rounded-3xl"
        />

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
