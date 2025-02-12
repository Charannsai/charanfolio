import { useState, useEffect } from 'react'
import { Mail, Instagram, Linkedin, Facebook, Twitter, Moon, Sun, Github } from 'lucide-react'

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}</span>
}

const LatestUpdate = ({ update }) => {
  return (
    <a
      href={update.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-all duration-200 hover:scale-102"
    >
      <div className="glass-card p-4 hover:bg-zinc-400/30 transition-colors cursor-pointer">
        <p className="text-zinc-800 dark:text-zinc-300 text-sm sm:text-base">{update.text}</p>
        <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2 block">
          {update.date}
        </span>
      </div>
    </a>
  )
}

export default function Home({ setActiveSection, theme, toggleTheme }) {
  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:pathurisai31@gmail.com'},
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/Saircasticc' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/charan-sai-pathuri-177a9a282/' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Charannsai' }
  ]

  const latestUpdates = [
    {
      text: "📌 Joined as ML Intern at AICTE",
      date: "January 2025",
      link: "https://linkedin.com/in/charan-sai-pathuri-177a9a282/"
    },
    {
      text: "📌 Published a Web Application for JNTUH Students",
      date: "December 2024",
      link: "https://jntuhub.vercel.app"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-6">
      <div className="flex flex-row items-start gap-4 mb-4">
        {/* Profile Image Section */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-72 md:h-72 rounded-3xl overflow-hidden transition-transform glass-card relative flex-shrink-0">
          <div className="absolute text-xl md:text-2xl w-full h-full opacity-80 flex items-center justify-center bottom-16 md:bottom-24 z-0">
            <h2 className="font-bold text-center px-2 md:inline-flex hidden">Think.  Code.  Deploy.</h2>
          </div>
          <img 
            src="https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/imgg2.png"
            alt="Profile"
            className="w-full h-full object-cover mt-8 md:mt-12 relative z-10 shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1">
          <div className="space-y-2">
            <h1 className="mb-2 font-cursive text-lg sm:text-xl md:text-3xl dark:text-white text-zinc-900">
              Hey, I'm Charan Sai Pathuri
            </h1>
            <p className="text-xs md:text-base text-zinc-600 hidden md:inline-flex dark:text-zinc-500">
            Welcome to my portfolio. I'm a passionate developer dedicated to crafting cutting-edge applications that solve real-world problems. Currently, I'm expanding my expertise in AI/ML while honing my problem-solving skills through DSA challenges. I strive to create impactful solutions that make a difference. Connect with me to discuss your project or to collaborate on exciting projects. Let's build something amazing together!
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-2 md:mt-4">
              <button
                className="glass-card px-3 py-1.5 md:px-8 md:py-4 transition-transform duration-200 hover:scale-105 text-xs sm:text-base flex-1"
                onClick={() => setActiveSection('works')}
              >
                View Works
              </button>
              <button
                className="glass-card px-3 py-1.5 md:px-16 md:py-2 transition-transform duration-200 hover:scale-105 text-xs sm:text-base flex-1"
                onClick={() => setActiveSection('contact')}
              >
                Let's Talk
              </button>
              <button
                onClick={toggleTheme}
                className="glass-card p-1.5 md:p-4 transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 mx-auto" /> : <Moon className="w-4 h-4 mx-auto" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Navigation Cards */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 items-start">
          <div
            className="col-span-6 sm:col-span-3 glass-card p-3 sm:p-6 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setActiveSection('about')}
          >
            <h3 className="text-lg sm:text-2xl dark:text-white font-semibold text-zinc-900 text-center">About</h3>
          </div>

          <div
            className="col-span-6 sm:col-span-3 glass-card p-3 sm:p-6 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setActiveSection('blog')}
          >
            <h3 className="text-lg sm:text-2xl font-semibold dark:text-white text-zinc-900 text-center">Blogs</h3>
          </div>

          <div className="col-span-12 sm:col-span-6 glass-card p-3 sm:p-3">
            <div className="flex justify-center gap-4 sm:gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-center mt-3 text-xs sm:text-base text-zinc-400">Stay Connected with me!</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 items-start">
          {/* Latest Updates Section */}
          <div className="col-span-12 sm:col-span-8 glass-card p-3 sm:p-6">
            <h3 className="text-base sm:text-xl mb-3 dark:text-white text-zinc-900">Latest Updates</h3>
            <div className="space-y-3">
              {latestUpdates.map((update, index) => (
                <LatestUpdate key={index} update={update} />
              ))}
            </div>
          </div>

          {/* Stats and Quick Links */}
          <div className="col-span-12 sm:col-span-4 space-y-2 md:space-y-4">
            <div className="glass-card p-3 sm:p-6">
              <div className="flex justify-around">
                <div className="text-center">
                  <h3 className="text-xl sm:text-3xl font-bold mb-1 dark:text-white text-zinc-900">
                    <CountUp end={20} />+
                  </h3>
                  <p className="text-xs sm:text-base text-zinc-600 dark:text-zinc-500">Projects</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-3xl font-bold mb-1 dark:text-white text-zinc-900">
                    <CountUp end={15} />+
                  </h3>
                  <p className="text-xs sm:text-base text-zinc-600 dark:text-zinc-500">Clients</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-3xl font-bold mb-1 dark:text-white text-zinc-900">
                    <CountUp end={2} />+
                  </h3>
                  <p className="text-xs sm:text-base text-zinc-600 dark:text-zinc-500">Experience</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div
                className="glass-card p-2 sm:p-4 text-center cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setActiveSection('works')}
              >
                <span className="text-xs sm:text-base dark:text-white text-zinc-900">Works</span>
              </div>
              <div
                className="glass-card p-2 sm:p-4 text-center cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => src='/Resumee.pdf'}
              >
                <span className="text-xs sm:text-base dark:text-white text-zinc-900">Resume</span>
              </div>
            </div>

            <div
              className="glass-card p-2 sm:p-4 text-center cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setActiveSection('contact')}
            >
              <span className="text-xs sm:text-base dark:text-white text-zinc-900">Contact Me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}