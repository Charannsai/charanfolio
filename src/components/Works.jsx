import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Predicting Solar Power Output",
      description: "Predicting solar power output using regression models",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/Charannsai/Solar-power-prediction",
      live: "https://github.com/Charannsai/Solar-Power-Prediction/blob/main/solarpowerprediction.ipynb",
      details: "This Project is a part of my internship at AICTE. The project aims to predict the solar power output using regression models based on historical data by considering various factors like weather conditions, time of the day, and geographical location."
      
    },
    {
      id: 2,
      title: "JNTUHUB",
      description: "A platform where students can access all the resources",
      image: "https://via.placeholder.com/400x300",
      tags: ["React","Tailwind CSS", "Node.js", "POSTGRESQL"],
      github: "https://github.com",
      live: "https://demo.com",
      details: "A comprehensive resource accessibility solution featuring notes, syllabus, academic year plans. The platform includes an NLP based Chatbot Model dashboard where it resolves all possible queries asked by the students regarding learning and academics."
    },
    {
      id: 3,
      title: "KaaryaLink",
      description: "A Collabarative, Community Driven Web Application",
      image: "https://via.placeholder.com/400x300",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      live: "https://demo.com",
      details: "A semi-featured(Still Working) task management application with real-time updates, team collaboration features, and progress tracking. Includes features like task assignment, due dates, comments, and file attachments."
    }
  ]

  return (
    <div className="space-y-6">
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
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-zinc-400 mb-6">{selectedProject.details}</p>
              <div className="flex gap-4 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
            <button 
              onClick={() => setSelectedProject(null)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              ← Back to projects
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-zinc-800 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zinc-800/50 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}