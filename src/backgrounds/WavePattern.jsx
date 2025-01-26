import { motion } from 'framer-motion';
import React from 'react';
import { useAnimationSettings } from '../hooks/useAnimationSettings';

export const WavePattern = () => {
  const { enabled, transition } = useAnimationSettings();
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {enabled && Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 will-change-transform"
          style={{
            border: `${2 + i}px solid rgba(255, 255, 255, ${0.05 - i * 0.008})`,
            borderRadius: '30%',
            transformOrigin: 'center',
          }}
          animate={{
            rotate: 360,
            scale: 1,
          }}
          transition={{
            duration: 25 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * -3,
          }}
        />
      ))}
      
      
      {enabled && Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(${
              i === 0 ? '147, 51, 234' : i === 1 ? '79, 70, 229' : '50, 2, 246'
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