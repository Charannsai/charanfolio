import React, {  useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import PageLayout from '../layout/PageLayout';
import Navigation from '../components/Navigation';


const BlogSection = React.lazy(() => import('../components/cards/BlogCard'));
const ContactSection = React.lazy(() => import('../components/cards/ContactCard'));
const Skills = React.lazy(() => import('../components/cards/Skills'));

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <Navigation />
      <section className="min-h-screen relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-500/20 flex justify-center items-center" />
        
        <div className="px-4 sm:px-6 py-12 relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-full mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: [0, 1, 1, 0], y: [0, 0, 0, -20] }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="mt-16 mb-6 inline-block bg-primary/10 dark:bg-primary/20 rounded-full text-primary"
            >
              Welcome to my portfolio 👋 
            </motion.div>


            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white min-[320px]:text-2xl"
            >
              <TypeAnimation
                sequence={[
                  'Hi, I\'m Charan Sai.', 2000,
                  'I\'m a Developer.', 2000,
                  'I\'m a Tech Enthusiast.', 2000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-neutral-300 mb-12 px-4 max-w-screen-md leading-relaxed mx-auto text-center mt-6"
            >
              I'm a developer with a knack for creating user-friendly applications and solving complex problems.
              With expertise in [technologies], I'm passionate about building tools that empower users and make technology accessible.
              When I’m not coding, you’ll find me exploring the latest in AI and building projects that make an impact.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center py-4 min-[375px]:mb-20"
            >
              <motion.a
                href="/contact?"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                Hire Me
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/assets/myResume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                View My Resume
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          </motion.div>


          <Suspense fallback={<div>Loading Skills...</div>}>
            <Skills />
          </Suspense>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-2"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/about"
              className="bg-gray-800 mt-8 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors font-semibold text-base"
            >
              Explore More Skills
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <Suspense fallback={<div>Loading Blogs...</div>}>
            <div className="max-w-full mx-auto px-4 mt-8">
              <BlogSection />
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/blog"
                  className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors font-semibold text-base mt-6"
                >
                  Explore More Blogs
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </Suspense>

          <Suspense fallback={<div>Loading Contact...</div>}>
            <ContactSection />
          </Suspense>
        </div>
      </section>
    </PageLayout>
  );
}
