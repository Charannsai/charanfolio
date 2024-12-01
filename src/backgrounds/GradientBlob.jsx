import { motion } from 'framer-motion';
import React from 'react';

export const GradientBlob = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-black">
      <motion.div
        className="absolute -inset-[100px] opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl" />
      </motion.div>
      <motion.div
        className="absolute -inset-[100px] opacity-50"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [180, 360, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}