import { motion } from 'framer-motion';
import React from 'react';
import { useAnimationSettings } from '../hooks/useAnimationSettings';
import { useBackgroundAnimation } from '../hooks/useBackgroundAnimation';

export const GradientBlob = () => {
  const { enabled } = useAnimationSettings();
  const animation = useBackgroundAnimation(20);
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-black">
      <motion.div
        className="absolute -inset-[100px] opacity-50 will-change-transform"
        {...animation}
        animate={enabled ? {
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        } : { scale: 1, rotate: 0 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl" />
      </motion.div>
      <motion.div
        className="absolute -inset-[100px] opacity-50 will-change-transform"
        {...animation}
        animate={enabled ? {
          scale: [1.1, 1, 1.1],
          rotate: [180, 360, 180],
        } : { scale: 1, rotate: 180 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
};