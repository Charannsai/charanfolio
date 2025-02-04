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
      <div className="glass-card p-4 hover:bg-zinc-700/30 transition-colors cursor-pointer">
        <p className="text-zinc-400 dark:text-zinc-300">{update.text}</p>
        <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 block">
          {update.date}
        </span>
      </div>
    </a>
  )
}

export default function Home({ setActiveSection, theme, toggleTheme }) {
  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Github className="w-5 h-5" />, href: '#' }
  ]

  const latestUpdates = [
    {
      text: "Launched a new e-commerce platform with React and Node.js",
      date: "October 2023",
      link: "https://example.com/ecommerce"
    },
    {
      text: "Completed full-stack development bootcamp certification",
      date: "September 2023",
      link: "https://example.com/certification"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-4">
      <div className="w-28 h-28 md:w-72 md:h-72 rounded-3xl overflow-hidden transition-transform glass-card duration-300 hover:scale-105 sm:text-left relative">
        <div className='absolute text-2xl w-full h-full opacity-80 flex items-center justify-center bottom-24 z-0'>
          <h2 className='font-bold hidden md:inline-flex'>Think. Code. Deploy.</h2>
        </div>
        <img 
          src="/imgg2.png"
          alt="Profile"
          className="w-full h-full object-cover mt-12 relative z-10"
        />
      </div>

        <div className="flex-1">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="mb-2 font-cursive text-2xl sm:text-3xl dark:text-white text-zinc-900">Hey, I'm Charan Sai Pathuri</h1>
            <p className="text-sm md:inline-flex md:text-base text-zinc-600 dark:text-zinc-500 hidden">Welcome to my portfolio. I'm a passionate developer dedicated to crafting cutting-edge applications that solve real-world problems. Currently, I'm expanding my expertise in AI/ML while honing my problem-solving skills through DSA challenges. I strive to create impactful solutions that make a difference. Connect with me to discuss your project or to collaborate on exciting projects. Let's build something amazing together!</p>
            
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <button
                className="glass-card px-4 sm:px-6 py-2 mt-2 transition-transform duration-200 hover:scale-105 text-sm sm:text-base"
                onClick={() => setActiveSection('works')}
              >
                View Works
              </button>
              <button
                onClick={toggleTheme}
                className="glass-card p-3 sm:p-4 mt-2 transition-transform duration-200 hover:scale-105"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
          <div
            className="col-span-1 sm:col-span-3 glass-card p-4 sm:p-6 cursor-pointer transition-transform duration-200 hover:scale-102"
            onClick={() => setActiveSection('about')}
          >
            <h3 className="text-xl sm:text-2xl mb-2 dark:text-white text-zinc-900 text-center">About</h3>
          </div>

          <div
            className="col-span-1 sm:col-span-3 glass-card p-4 sm:p-6 cursor-pointer text-center transition-transform duration-200 hover:scale-102"
            onClick={() => setActiveSection('blog')}
          >
            <h3 className="text-xl sm:text-2xl mb-2 dark:text-white text-zinc-900">Blogs</h3>
          </div>

          <div className="col-span-1 sm:col-span-6 glass-card p-4 sm:p-8">
            <div className="flex justify-center gap-4 sm:gap-6">
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
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
          {/* Latest Updates Section */}
          <div className="col-span-1 sm:col-span-8 glass-card p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl mb-4 dark:text-white text-zinc-900">Latest Updates</h3>
            <div className="space-y-4">
              {latestUpdates.map((update, index) => (
                <LatestUpdate key={index} update={update} />
              ))}
            </div>
          </div>

          <div className="col-span-1 sm:col-span-4 space-y-4">
         
         
            <div className="glass-card p-4 sm:p-6">
              <div className="flex justify-around">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1 dark:text-white text-zinc-900">
                    <CountUp end={15} />+
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-500">Projects</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1 dark:text-white text-zinc-900">
                    <CountUp end={30} />+
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-500">Clients</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1 dark:text-white text-zinc-900">
                    <CountUp end={2} />+
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-500">Experience</p>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-4">
              <div
                className="glass-card p-3 sm:p-4 text-center cursor-pointer transition-transform duration-200 hover:scale-102"
                onClick={() => setActiveSection('works')}
              >
                <span className="text-sm sm:text-base dark:text-white text-zinc-900">Works</span>
              </div>
              <div
                className="glass-card p-3 sm:p-4 text-center cursor-pointer transition-transform duration-200 hover:scale-102"
              >
                <span className="text-sm sm:text-base dark:text-white text-zinc-900">Resume</span>
              </div>
            </div>


            <div
              className="glass-card p-4 sm:p-6 text-center cursor-pointer transition-transform duration-200 hover:scale-102"
              onClick={() => setActiveSection('contact')}
            >
              <span className="text-sm sm:text-base dark:text-white text-zinc-900">Contact Me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}