"use client";

import { motion } from "framer-motion";
import { Heart, Mail, MapPin, Phone, ArrowUp, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center"
              >
                <Code size={20} className="text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">Sammy Wanyoike</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovative Software Engineer specializing in web development, backend systems, and cloud-based automation. Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "Services", "Projects", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-amber-500 transition-colors text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 text-sm"
              >
                <Mail size={16} className="text-amber-500" />
                <span>swanyoike154@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 text-sm"
              >
                <Phone size={16} className="text-amber-500" />
                <span>0713660231</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 text-sm"
              >
                <MapPin size={16} className="text-amber-500" />
                <span>Kenya</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© 2025 Samidev</span>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-shadow"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
