import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    "Full Stack Development",
    "Machine Learning",
    "UI/UX Design",
    "React.js",
    "Node.js",
    "Tailwind CSS"
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8"
      >
        <h2 className="section-title">About Me</h2>
        <img src="/imgg2.png" alt="Image" className=''/>
        <p className="text-zinc-400 mb-2">
          A passionate developer with a keen eye for design and a drive for creating 
          seamless user experiences. Combining technical expertise with creative problem-solving 
          to build innovative digital solutions.
        </p>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 glass-card text-sm">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8"
      >
        <h2 className="section-title mb-2">Experience</h2>
        <div className="space-y-6 ">
         
            <div className="glass-card p-4">
              <h3 className="font-medium">AI Intern</h3>
              <p className="text-sm text-zinc-400 ">AICTE</p>
              <p className="text-sm text-zinc-500  mb-2">January 2025 - Present</p>
              <p className="text-sm text-zinc-400">
               Currently working on a project which predicts solar power output using regression models.
              </p>
              
            </div>
            <div className="glass-card p-4">
              <h3 className="font-medium">Freelance Web Developer</h3>
              <p className="text-sm text-zinc-500  mb-2">November 2022 - Present</p>
              <p className="text-sm text-zinc-400">
                Collaborated with multiple clients and delivered projects by developing on time.
              </p>
              
            </div>
            <div className="glass-card p-4">
              <h3 className="font-medium">Research Intern</h3>
              <p className="text-sm text-zinc-400 ">BharatUp Skill</p>
              <p className="text-sm text-zinc-500  mb-2">October 2023 - Present</p>
              <p className="text-sm text-zinc-400">
               Worked as a research intern and analyzed various marketing strategies.
              </p>
              
            </div>
        </div>
      </motion.div>
    </div>
  )
}