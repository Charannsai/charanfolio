import { motion } from 'framer-motion';
import React from 'react';

export const WavePattern = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-800 to-black overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: `${2 + i}px solid rgba(255, 255, 255, ${0.05 - i * 0.008})`,
            borderRadius: '30%',
            transformOrigin: 'center',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * -3,
          }}
        />
      ))}
      
      
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(${
              i === 0 ? '147, 51, 234' : i === 1 ? '79, 70, 229' : '139, 92, 246'
            }, 0.15) 0%, transparent 70%)`,
            left: `${i * 30}%`,
            top: `${i * 20}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * -2,
          }}
        />
      ))}
    </div>
  );
};