import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    "Frontend Development",
    "UI/UX Design",
    "React.js",
    "Node.js",
    "TypeScript",
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
        <p className="text-zinc-400 mb-6">
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
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card p-4">
              <h3 className="font-medium">Senior Developer</h3>
              <p className="text-sm text-zinc-400">Company {i}</p>
              <p className="text-sm text-zinc-500">2020 - Present</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}