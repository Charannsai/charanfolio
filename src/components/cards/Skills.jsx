import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Cpu } from 'lucide-react';
import { FaLightbulb } from 'react-icons/fa';

const skills = [
  { name: 'Frontend Development', icon: Code2, level: 95 },
  { name: 'Backend Development', icon: Database, level: 80 },
  { name: 'Design and Prototyping', icon: FaLightbulb, level: 95 },
  { name: 'Version Control and Collaboration', icon: Terminal, level: 90 },
  { name: 'Deployment Tools', icon: Cpu, level: 90 },
  
];

export default function Skills() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl font-bold text-white mb-4">Tech Stack</motion.h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl p-6 relative overflow-hidden group backdrop-blur-3xl backdrop-brightness-150"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <skill.icon className="w-8 h-8 text-orange-500" />
                  <span className="text-xl font-bold text-white">{skill.level}%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-600 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )}