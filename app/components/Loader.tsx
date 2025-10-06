"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const creativeMessages = [
  "Loading your portfolio...",
  "Almost ready...",
  "Just a moment...",
];

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Change message every 600ms (faster)
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % creativeMessages.length);
    }, 600);

    // Faster loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return prev + 4; // Faster increment
      });
    }, 20); // Faster interval

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e]"
    >
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mx-auto w-24 h-24"
        >
          {/* Outer glow ring */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 blur-xl"
          />
          
          {/* Inner circle */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-4xl"
            >
              ⚡
            </motion.span>
          </div>
        </motion.div>

        {/* Loading Message */}
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-white">
            {creativeMessages[messageIndex]}
          </h2>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full"
              style={{
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)",
              }}
            />
          </div>
          
          {/* Progress Percentage */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-amber-500 font-mono text-sm"
          >
            {progress}%
          </motion.p>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-amber-500 rounded-full blur-sm"
            style={{
              left: `${30 + i * 10}%`,
              top: `${40 + (i % 3) * 10}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
