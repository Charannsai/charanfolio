import { motion } from 'framer-motion';
import React from 'react';

export const GridPattern = () => {
  const gridSize = 10;
  
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0">
        
      
{Array.from({ length: gridSize }).map((_, i) => (
  <motion.div
    key={`h-${i}`}
    className="absolute left-0 right-0 h-[1px] bg-[#1a1a1a]" 
    
    style={{ 
      top: `${(i + 1) * (100 / gridSize)}%`,
      opacity: i % 2 === 0 ? 1 : 0.5,
      
    }}
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{ 
      opacity: [0, 1, 0.5, 1],
      scaleX: [0, 1, 0.97, 1],
    }}
    transition={{
      duration: 4,
      delay: i * 0.05, 
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
))}


{Array.from({ length: gridSize }).map((_, i) => (
  <motion.div
    key={`v-${i}`}
    className="absolute top-0 bottom-0 w-[1px] bg-[#1a1a1a]" 
    style={{ 
      left: `${(i + 1) * (100 / gridSize)}%`,
      opacity: i % 2 !== 0 ? 1 : 0.2,
    }}
    initial={{ opacity: 0, scaleY: 0 }}
    animate={{ 
      opacity: [1],
      scaleY: [0, 1, 0.97, 1],
    }}
    transition={{
      duration: 4,
      delay: i * 0.05, 
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
))}

        <motion.div
          className="absolute w-[200%] h-[200%] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 50%)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: ['-25%', '25%', '-25%'],
            y: ['-25%', '25%', '-25%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />


        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/5 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div 
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        animate={{
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};