import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mt-10 flex flex-col items-center justify-center px-4 py-4 text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
        Let's Connect
      </h2>
      <p className="text-lg sm:text-xl text-neutral-300 mb-12 max-w-xl">
        Have a project in mind or just want to say hello? Let's create something
        amazing together.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
        <motion.a
          href="mailto:pathurisai31@gmail.com"
          target="_top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-neutral-800 p-4 rounded-full hover:bg-neutral-700 transition-all"
          aria-label="Email"
        >
          <FaEnvelope className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/charan-sai-pathuri-177a9a282"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-neutral-800 p-4 rounded-full hover:bg-neutral-700 transition-all"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://github.com/Charannsai"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-neutral-800 p-4 rounded-full hover:bg-neutral-700 transition-all"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://instagram.com/saircasticc"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-neutral-800 p-4 rounded-full hover:bg-neutral-700 transition-all"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
        </motion.a>
      </div>
    </motion.div>
  );
}
