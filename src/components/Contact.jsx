import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaLinkedin />, label: 'LinkedIn' },
    { icon: <FaEnvelope />, label: 'Email' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8"
      >
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-zinc-400 mb-6">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map(({ icon, label }) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-4 flex items-center gap-3 cursor-pointer"
            >
              {icon}
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 space-y-6"
      >
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Name</label>
          <input
            type="text"
            className="w-full bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-3 focus:outline-none focus:border-zinc-600"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-3 focus:outline-none focus:border-zinc-600"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-3 focus:outline-none focus:border-zinc-600"
          ></textarea>
        </div>
        <button className="w-full bg-zinc-700/50 hover:bg-zinc-600/50 py-3 rounded-lg transition-colors">
          Send Message
        </button>
      </motion.form>
    </div>
  )
}