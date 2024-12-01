import React from "react";
import { motion } from "framer-motion";
import { GradientBlob } from "../backgrounds/GradientBlob";
import Navigation from "../components/Navigation";
import ContactSection from "../components/cards/ContactCard";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      <div className="relative rounded-xl backdrop-blur-md border border-white/10 p-6 bg-black/40 hover:bg-black/50 transition-all duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {project.title}
          </h2>
          <p className="mt-3 text-gray-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.split(", ").map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start space-x-2 text-gray-300">
                <span className="text-cyan-400">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-slate-400">Outcome: {project.outcome}</p>
          <div className="mt-6 flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Github size={16} />
              Repository
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WorkPage = () => {
  const projects = [
    {
      title: "SkillTrade",
      description:
        "A platform for skill-based learning and teaching through live video sessions and a gamified ecosystem.",
      techStack: "React, Firebase, WebRTC, TailwindCSS",
      highlights: [
        "Designed and implemented a real-time video chat system using WebRTC.",
        "Developed a gamified leveling system to enhance user engagement.",
        "Integrated skill-matching algorithms for automatic and manual matches.",
      ],
      outcome: "Increased user retention by 20% in beta testing. Currently Working to produce the full-fledged application with more Enhancements",
      liveLink: "https://skill-trade-nine.vercel.app/",
      repoLink: "https://github.com/Charannsai/SkillTrade",
    },
    {
      title: "Weather App",
      description:
        "A sleek and intuitive weather application providing real-time weather data and forecasts.",
      techStack: "React, OpenWeather API, TailwindCSS",
      highlights: [
        "Integrated OpenWeather API to fetch and display real-time weather data.",
        "Designed a responsive and user-friendly UI with dynamic weather icons and themes.",
        "Implemented location-based search functionality for accurate results.",
      ],
      outcome:
        "Enhanced user experience with a visually appealing and informative weather platform.",
      liveLink: "https://charannsai.github.io/Weather-App/",
      repoLink: "https://github.com/Charannsai/Weather-App",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <GradientBlob />
      <Navigation />
      
      <div className="relative z-10 px-6 max-w-7xl mx-auto mt-24">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Work
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm passionate about creating scalable, user-centric solutions that
            bridge technology and innovation. Here's a glimpse of some of the
            projects and roles that have shaped my journey as a developer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default WorkPage;