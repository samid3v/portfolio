"use client";

import { motion } from "framer-motion";

export default function CompanyLogos() {
  const companies = [
    { name: "Meta", logo: "🔵", color: "from-blue-500 to-blue-600" },
    { name: "Google", logo: "🔴", color: "from-red-500 to-orange-500" },
    { name: "LinkedIn", logo: "🔷", color: "from-blue-600 to-cyan-500" },
    { name: "Slack", logo: "🎨", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Trusted By Leading Companies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-r ${company.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#16213e] to-[#0f1729] rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 h-32 md:h-36">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl"
                >
                  {company.logo}
                </motion.div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-amber-500 transition-colors">
                  {company.name}
                </p>

                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
