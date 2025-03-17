import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaHeart, FaConnectdevelop, FaCheckCircle, FaTimesCircle, FaInstagram, FaAppStore, FaAddressCard } from 'react-icons/fa'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target

    const formData = new FormData(form)
    const response = await fetch('https://formspree.io/f/xwplpvzb', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })

    if (response.ok) {
      setStatus({ type: 'success', message: 'Message sent successfully!\n\n\nI will reach you out soon' })
      form.reset()
    } else {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }

    setIsModalOpen(true) 
  }

  const socialLinks = [
    { icon: <FaEnvelope />, label: 'Email', url: 'mailto:pathurisai31@.com'},
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/Charannsai'},
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'www.linkedin.com/in/charan-sai-pathuri-177a9a282'},
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/saircasticc'},
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://x.com/saircasticc'},
    { icon: <FaAddressCard />, label: 'Bento', url: 'https://bento.me/saircastic'},
    
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-light gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8"
      >
        <h1 className="section-title text-2xl mb-2">
          Get in Touch. <FaConnectdevelop className="w-6 h-6 inline text-zinc-400 dark:text-zinc-500" />
        </h1>
        <p className="text-zinc-400 mb-6">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="inline-flex gap-4 flex-wrap justify-center items-center text-center">
          {socialLinks.map(({ icon, label }) => (
            <motion.a
              key={label}
              href= {socialLinks.find((link) => link.label === label)?.url}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-4 flex items-center gap-4 cursor-pointer "
            >
              {icon}<span className="text-base">{label}</span>
            </motion.a>
          ))}
        </div>
        <div className='mt-10'>
          <footer className="text-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-6">
            Made with <FaHeart className="inline-block w-4 h-4 text-pink-600" /> by Charan Sai Pathuri.
          </footer>
          <footer className='text-center text-xs sm:text-sm mt-4 text-zinc-500 dark:text-zinc-400'>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="glass-card p-8 space-y-6"
      >
        <div>
          <label className="block text-sm dark:text-zinc-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-zinc-200/50 border border-zinc-700/30 rounded-lg p-3 dark:bg-zinc-800/50 focus:outline-none focus:border-zinc-600"
          />
        </div>
        <div>
          <label className="block text-sm dark:text-zinc-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-zinc-200/50 border border-zinc-700/30 rounded-lg p-3 dark:bg-zinc-800/50 focus:outline-none focus:border-zinc-600"
          />
        </div>
        <div>
          <label className="block text-sm dark:text-zinc-400 mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full bg-zinc-200/50 border dark:bg-zinc-800/50 border-zinc-700/30 rounded-lg p-3 focus:outline-none focus:border-zinc-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-300/50 hover:bg-zinc-300 dark:hover:bg-zinc-700/50 dark:bg-zinc-800/50 py-3 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </motion.form>


      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center font-monolisa text-sm justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 w-96 text-center relative"
            >
              {status?.type === 'success' ? (
                <>
                  <FaCheckCircle className="text-green-500 w-12 h-12 mx-auto mb-3" />
                  <h2 className="text-lg text-green-600 font-thin">Success!</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 my-2">{status.message}</p>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-red-500 w-12 h-12 mx-auto mb-3" />
                  <h2 className="text-lg font-thin text-red-600">Oops!</h2>
                  <p className="text-zinc-500 dark:text-zinc-400">{status.message}</p>
                </>
              )}
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 bg-zinc-300 dark:bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-400 dark:hover:bg-zinc-600 transition hover:text-zinc-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
