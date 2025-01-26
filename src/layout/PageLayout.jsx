import React from 'react';
import { motion } from 'framer-motion';
import { WavePattern } from '../backgrounds/WavePattern';

const PageLayout = ({ children, title, description }) => {
  return (
    <div className="relative min-h-screen">
      
        <WavePattern/>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 container mx-auto px-4 layout-container will-change-transform"
      >
        {title && (
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
        )}
        {description && (
          <motion.p 
            className="text-lg text-white/80 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default PageLayout;
