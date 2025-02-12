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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="relative glass-card p-4 flex flex-col items-center justify-center text-white 
             bg-cover bg-center min-h-[350px]"
  // style={{ backgroundImage: "url('https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/SAVE_20241128_122547-removebg%20(1).png')", borderRadius: '1rem' }}
>
  
  <div className="absolute inset-0"></div>

  <h2 className="section-title text-center text-2xl font-bold relative z-10 ">About Me</h2>
  <p className="text-zinc-300 mb-2 relative z-10 max-w-lg text-justify">
  I am an engineering student passionate about AI and Software Development, with a keen interest in research and innovation. I aspire to contribute to cutting-edge projects that address real-world challenges through technology. My experience includes working on research papers, developing innovative projects, and participating in hackathons. I am eager to expand my knowledge by collaborating with leading researchers and industry professionals, enhancing my technical and analytical skills. I thrive in dynamic environments that encourage creativity and problem-solving, and I am committed to continuous learning to stay at the forefront of emerging technologies.
  </p>

  <div className="flex flex-wrap gap-3 relative z-10">
    {skills.map((skill) => (
      <span key={skill} className="px-4 py-2 glass-card text-sm bg-white/20 rounded-md">
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
        <h2 className="section-title mb-2 text-center text-2xl font-bold">Experience</h2>
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