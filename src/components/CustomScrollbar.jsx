import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const CustomScrollbar = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    
    window.scrollTo(0, 0);
    const resetScroll = new Event('scroll');
    window.dispatchEvent(resetScroll);
  }, [location.pathname]);

  return (
    <motion.div
      className="fixed right-0 top-0 bottom-0 w-0.5 bg-gray-700"
      style={{ originY: 0 }}
    >
      <motion.div
        className="w-full bg-gradient-to-b from-sky-600 to-blue-700"
        style={{
          height: '100%',
          scaleY,
          originY: 0,
        }}
      />
    </motion.div>
  );
};
