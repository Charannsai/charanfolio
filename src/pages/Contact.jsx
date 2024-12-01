import { motion } from 'framer-motion';
import { BinaryRings } from '../backgrounds/BinaryRings'
import Navigation from '../components/Navigation'
import { Mail, Github, Linkedin, Instagram, SendHorizontal, Sparkles } from 'lucide-react';

const ContactPage = () => {
  
    return (
      <div>
        <Navigation/>
        <section className="min-h-screen relative overflow-hidden bg-transparent mt-14">
        <BinaryRings/>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-white rounded-full opacity-30"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
  
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 min-[320px]:text-3xl">
                Let's Connect
              </h1>
              <Sparkles className="w-8 h-8 text-violet-400" />
            </div>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Have an exciting project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </motion.div>
  
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200 transition-all"
                  />
                </motion.div>
  
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200 transition-all"
                  />
                </motion.div>
  
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200 transition-all resize-none"
                  ></textarea>
                </motion.div>
              </div>
  
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-violet-600 transition-all"
              >
                Send Message
                <SendHorizontal className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
  
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex justify-center gap-8"
          >
            <motion.a
              href="mailto:pathurisai31@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.github.com/Charannsai"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/charan-sai-pathuri-177a9a282"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/saircasticc"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      </div>
    );
  }
  

export default ContactPage;


 