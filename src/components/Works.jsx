import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const projects = [
    {
      id: 1,
      title: "EventOrgX",
      description: "The EventOrgX is a platform to create, manage events on their specified sub domains.",
      image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/Screenshot%202025-03-14%20001426.png",
      tags: ["Typescript", "React", "Node.js", "Postgresql", "Tailwind CSS", "supabase"],
      github: "https://charanfolio.site/",
      live: "https://charanfolio.site/",
      details: "The EventOrgx is a platform where one will get assigned a subdomain to host their events on their subdomain and with that organizations can create, manage events, handle registrations or participants, trigger mails to the participants directly through platform, generate certifications at once for all the participants after the event is completed."
    },
    {
      id: 2,
      title: "EventOrgX",
      description: "The EventOrgX is a platform to create, manage events on their specified sub domains.",
      image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/Screenshot%202025-03-14%20001426.png",
      tags: ["Typescript", "React", "Node.js", "Postgresql", "Tailwind CSS", "supabase"],
      github: "https://charanfolio.site/",
      live: "https://charanfolio.site/",
      details: "The EventOrgx is a platform where one will get assigned a subdomain to host their events on their subdomain and with that organizations can create, manage events, handle registrations or participants, trigger mails to the participants directly through platform, generate certifications at once for all the participants after the event is completed."
    },
    {
      id: 3,
      title: "EventOrgX",
      description: "The EventOrgX is a platform to create, manage events on their specified sub domains.",
      image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/Screenshot%202025-03-14%20001426.png",
      tags: ["Typescript", "React", "Node.js", "Postgresql", "Tailwind CSS", "supabase"],
      github: "https://charanfolio.site/",
      live: "https://charanfolio.site/",
      details: "The EventOrgx is a platform where one will get assigned a subdomain to host their events on their subdomain and with that organizations can create, manage events, handle registrations or participants, trigger mails to the participants directly through platform, generate certifications at once for all the participants after the event is completed."
    },
    {
      id: 4,
      title: "EventOrgX",
      description: "The EventOrgX is a platform to create, manage events on their specified sub domains.",
      image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/Screenshot%202025-03-14%20001426.png",
      tags: ["Typescript", "React", "Node.js", "Postgresql", "Tailwind CSS", "supabase"],
      github: "https://charanfolio.site/",
      live: "https://charanfolio.site/",
      details: "The EventOrgx is a platform where one will get assigned a subdomain to host their events on their subdomain and with that organizations can create, manage events, handle registrations or participants, trigger mails to the participants directly through platform, generate certifications at once for all the participants after the event is completed."
    },
    {
      id: 5,
      title: "Predicting Solar Power Output",
      description: "Predicting solar power output using regression models",
      image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/download.png",
      tags: ["Python", "Machine Learning", "Regression", "Jupyter Notebook"],
      github: "https://github.com/Charannsai/Solar-power-prediction",
      live: "https://github.com/Charannsai/Solar-Power-Prediction/blob/main/solarpowerprediction.ipynb",
      details: "This Project is a part of my internship at AICTE. The project aims to predict the solar power output using regression models based on historical data by considering various factors like weather conditions, time of the day, and geographical location."
    },
    {
      id: 6,
      title: "JNTUHUB",
      description: "A platform where students can access all the resources",
      image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/Screenshot%202025-02-05%20231334.png",
      tags: ["React", "Tailwind CSS", "Node.js", "POSTGRESQL"],
      github: "https://github.com/charannsai/JntuHub",
      live: "https://jntuhub.vercel.app",
      details: "A comprehensive resource accessibility solution featuring notes, syllabus, academic year plans. The platform includes an NLP based Chatbot Model dashboard where it resolves all possible queries asked by the students regarding learning and academics."
    },
    {
      id: 7,
      title: "KaaryaLink",
      description: "A Collabarative, Community Driven Web Application",
      image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/Screenshot%202025-02-12%20145104.png",
      tags: ["React", "firebase", "nodejs", "PostgreSQL"],
      github: "https://github.com",
      live: "https://demo.com",
      details: "A semi-featured(Still Working) Skill Exchange and task management Application with real time updates. Includes features like skill exchange, task management, and a community-driven platform."
    }
  ]

  const InfiniteMoveCards = ({ tags }) => {
    const duplicatedTags = [...tags, ...tags]
    
    return (
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex gap-4 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTags.map((tag, idx) => (
            <span
              key={`${tag}-${idx}`}
              className="whitespace-nowrap px-3 py-1 bg-zinc-300/50 dark:bg-zinc-800/50 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    )
  }

  const renderTags = (tags) => {
    if (isMobile) {
      return <InfiniteMoveCards tags={tags} />
    }
    
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-zinc-300/50 dark:bg-zinc-800/50 rounded-full mt-1 font-mono text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6 mt-10">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card p-8"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-display mb-4">{selectedProject.title}</h2>
              <div className="aspect-video bg-zinc-800 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg border border-zinc-800"
                />
              </div>
              <p className="text-zinc-400 mb-3 font-light">{selectedProject.details}</p>
              <h3 className="py-4 font-monolisa">Technologies</h3>
              {renderTags(selectedProject.tags)}
              <div className="flex gap-4 mt-6">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-300/50 dark:bg-zinc-800/50 rounded-full font-mono hover:bg-zinc-500 dark:hover:bg-zinc-500 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-300/50 dark:bg-zinc-800/50 rounded-full font-mono hover:bg-zinc-700/50 dark:hover:bg-zinc-500 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
            <button 
              onClick={() => setSelectedProject(null)}
              className="text-zinc-400 hover:text-zinc-500 transition-colors"
            >
              ← Back to projects
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 font-light md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4 overflow-hidden ">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg border border-zinc-400/50"
                  />
                </div>
                <h3 className="text-xl font-mono
                mb-2">{project.title}</h3>
                <p className="text-zinc-500 text-sm mt-2 mb-4">{project.description}</p>
                {renderTags(project.tags)}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}