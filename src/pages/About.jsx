import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Wrench, 
  ArrowRight, 
  ExternalLink 
} from "lucide-react";
import { GridPattern } from "../backgrounds/GridPattern";
import Navigation from "../components/Navigation";
import ContactSection from "../components/cards/ContactCard";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "JavaScript", "C", "HTML", "CSS"],
    color: "bg-gradient-to-r from-purple-400 to-purple-600",
  },
  {
    title: "Libraries",
    icon: <Server className="w-6 h-6" />,
    skills: ["React"],
    color: "bg-gradient-to-r from-red-400 to-red-600",
  },
  {
    title: "Frameworks",
    icon: <Layout className="w-6 h-6" />,
    skills: ["Flask", "Express.js"],
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB"],
    color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  },
  {
    title: "Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Tailwind CSS", "WebRTC", "Firebase", "Node.js"],
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
];

const SkillCard = ({ category, index }) => (
  <motion.div
    key={category.title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden"
  >
    <div className={`p-4 ${category.color} text-white flex items-center`}>
      <div className="p-2 bg-white/10 rounded-lg">{category.icon}</div>
      <h3 className="ml-2 text-xl font-semibold">{category.title}</h3>
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
      <Navigation />
      <GridPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 mt-14">
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1
              className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #FF512F, #F09819)",
              }}
            >
              Hello, I'm Charan Sai
            </h1>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            A passionate Full Stack Developer building scalable web applications and mobile solutions.
              A curious coder and a problem solver. I've built impactful solutions, from scalable web apps to AI-driven tools
              with a strong focus on creating elegant and efficient solutions to complex problems.
            </p>
            <div className="space-y-2">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-36 lg:w-40"
              >
                Hire Me
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/assets/myResume.pdf" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-48 lg:w-56"
              >
                View My Resume
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative lg:w-1/2"
          >
            <div className="w-96 h-96 sm:w-[500px] sm:h-[500px] overflow-hidden shadow-xl mx-auto">
              <img
                src="/assets/imgg2.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="-mt-16 min-[320px]:text-xl min-[768px]:text-3xl font-bold text-3xl text-gray-400 text-center lg:text-left">
              "Driven by curiosity, fueled by code."
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
            <div className="mt-2 w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </div>
          <ContactSection className="mt-10" />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
