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
  
  const experience = [ 
    {
      title: 'Full Stack Intern',
      company: 'Edunet Foundation',
      date: 'March 2025 - Present',
      description: 'Worked as a research intern and analyzed various marketing strategies.',
    },
    {
      title: 'AI Intern',
      company: 'AICTE',
      date: 'January 2025 - February 2025',
      description: 'Currently working on a project which predicts solar power output using regression models.'
    },
    {
      title: 'Full Stack Lead - ICN',
      date: 'November 2022 - Present',
      description: 'I am currently leading multiple teams and building a foster community in Full stack development.'
    },
    {
      title: 'Freelance Web Developer',
      date: 'November 2022 - Present',
      description: 'Collaborated with multiple clients and delivered projects by developing on time.'
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative glass-card p-4 flex flex-col items-center justify-center  
                bg-cover bg-center min-h-[350px] overflow-hidden"
        style={{ 
          borderRadius: '1rem' 
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
          style={{ 
            backgroundImage: "url('https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/SAVE_20241128_122547-removebg%20(1).png')",
            filter: 'blur(0.8px)',
          }}
        ></div>
        
        
        <div className="absolute inset-0 z-0"></div>
        
        <h2 className="section-title text-center text-2xl relative z-10">About Me</h2>
        <p className="dark:text-zinc-300  relative z-10 max-w-lg tracking-wide font-light text-justify p-6">
          I am an engineering student passionate about AI and Software Development, with a keen interest in research and innovation. I aspire to contribute to cutting-edge projects that address real-world challenges through technology. My experience includes working on research papers, developing innovative projects, and participating in hackathons. I am eager to expand my knowledge and enhance my technical and analytical skills.
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
        <h2 className="section-title mb-2 text-center text-2xl">Experience</h2>
        <div className="overflow-y-auto pr-4 p-2 custom-scrollbar">
          <div className="space-y-6">
            {experience.map(({ title, company, date, description }) => (
              <div key={`${title}-${date}`} className="space-y-2 glass-card p-3">
                <a href="https://www.linkedin.com/in/charan-sai-pathuri-177a9a282/details/experience/">
                  <h3 className="mb-2 font-normal font-monolisa ">{title}</h3>
                  {company && <p className="text-zinc-600 dark:text-zinc-400 text-sm">{company}</p>}
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">{date}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm">{description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}