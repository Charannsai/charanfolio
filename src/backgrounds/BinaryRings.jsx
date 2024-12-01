import React from 'react';
import { motion } from 'framer-motion';

export const BinaryRings = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {Array.from({ length: 4 }).map((_, ringIndex) => (
        <motion.div
          key={ringIndex}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 + ringIndex * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-xs"
              style={{
                transform: `rotate(${(i * 360) / 20}deg) translateY(-${120 + ringIndex * 40}px)`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                color: ['rgb(56,189,248)', 'rgb(186,230,253)', 'rgb(56,189,248)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i * 2) / 20,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </motion.div>
      ))}
      
      
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)',
          filter: 'blur(10px)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}