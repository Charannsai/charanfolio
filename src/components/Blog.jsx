import { useState, useRef } from 'react'
import { getBlogPosts } from '../lib/post'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { Copy, Check } from 'lucide-react'
import { Mail, Instagram, Linkedin, Facebook, Twitter, Moon, Sun, Github } from 'lucide-react'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [copiedStates, setCopiedStates] = useState({})
  const [showToast, setShowToast] = useState(false)
  const posts = getBlogPosts()
  const codeIdRef = useRef(Math.random().toString(36).substr(2, 9)); 
  const codeId = codeIdRef.current; 
  const isActive = copiedStates[codeId];
  const [activeCodeId, setActiveCodeId] = useState(null);

  const copyToClipboard = async (text, blockId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prevState) => ({ ...prevState, [blockId]: true }));
  
      setShowToast(true);
      setTimeout(() => {
        setActiveCodeId(null);
        setCopiedStates((prevState) => ({ ...prevState, [blockId]: false }));
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  
  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:pathurisai31@gmail.com'},
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/Saircasticc' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/charan-sai-pathuri-177a9a282/' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Charannsai' }
  ]
  const CodeBlock = ({ children, className }) => {
    

    const highlightCode = (code) => {
      return code.split("\n").map((line, lineIndex) => {
        const tokens = line.split(/(\s+|[{}[\]().,;:]|=>|[A-Za-z_][A-Za-z0-9_]*|\d+|['"`].*?['"`]|\/\/.*$)/).filter(Boolean);
    
        return (
          <div key={lineIndex} className="leading-6">
            {tokens.map((token, index) => {
              // Keywords (const, return, export, etc.)
              if (token.match(/^(const|let|return|export|import|from|default)$/)) {
                return <span key={index} className="text-[#f15454]">{token}</span>;
              }
              // Function names and Hooks (useState, setDarkMode, etc.)
              if (token.match(/^(useState|useEffect|setDarkMode|toggleTheme)$/)) {
                return <span key={index} className="text-[#b077e6]">{token}</span>;
              }
              // JSX Tags (button, div, span, etc.)
              if (token.match(/^(button|div|span)$/)) {
                return <span key={index} className="text-[#569CD6]">{token}</span>;
              }
              // JSX Attributes (className, onClick, etc.)
              if (token.match(/^(className|onClick)$/)) {
                return <span key={index} className="text-[#9CDCFE]">{token}</span>;
              }
              // Strings (inside quotes)
              if (token.match(/^['"`].*['"`]$/)) {
                return <span key={index} className="text-[#f08a62]">{token}</span>;
              }
              // Operators (=, =>, !, ?, :)
              if (token.match(/^(=>|=|\!|\?|\:)$/)) {
                return <span key={index} className="text-[#569CD6]">{token}</span>;
              }
              // Numbers
              if (token.match(/^\d+$/)) {
                return <span key={index} className="text-[#B5CEA8]">{token}</span>;
              }
              // Comments (// this is a comment)
              if (token.match(/^\/\/.*$/)) {
                return <span key={index} className="text-[#6A9955]">{token}</span>;
              }
              // Brackets and punctuation
              if (token.match(/^[{}[\]().,;]$/)) {
                return <span key={index} className="text-[#838282]">{token}</span>;
              }
    
              return <span key={index}>{token}</span>;
            })}
          </div>
        );
      });
    };
    
    return (
      <div className="relative group bg-[#e7e7e760] dark:bg-[#0D1117] border dark:border-0 rounded-lg overflow-hidden">
      <div className="bg-[#1a1a1a] rounded-t-lg p-2 flex items-center gap-2 border-b border-[#2a2a2a]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <span className="text-sm text-zinc-400 ml-2 flex-1">Code Block</span>
      </div>
      <pre className="bg-white dark:bg-[#282c34] rounded-b-lg font-mono text-sm leading-6">
        <code className={className}>
          {highlightCode(children)}
        </code>
      </pre>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => copyToClipboard(children, codeId)}
        className={`absolute top-12 right-3 hidden group-hover:flex items-center gap-1.5
          opacity-0 hover:opacity-100 transition-all duration-200 rounded-md p-1.5
          ${isActive ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' : 'bg-[#2d2d2d] text-zinc-400 hover:bg-[#3d3d3d]'}`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Check className="w-4 h-4 text-green-400" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Copy className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
  return (
    <div className="mt-10  ">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 right-4 font-monolisa bg-green-900 dark:bg-green-500/20 z-50 text-green-400 px-2 py-2 rounded-full border text-xs border-green-500/30"
          >
           🤝 Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedPost ? (
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 glass-card mt-16"
          >
           
            <article className="prose prose-invert max-w-none md:text-justify  blog-content">
              <h1 className="text-3xl text-center font-monolisa mb-2 ">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 justify-center text-center text-zinc-400 text-sm mb-8">
                <span>{selectedPost.date}</span>
                <div className="col-span-12 sm:col-span-6 p-3 sm:p-3 font-monolisa">
            <div className="flex justify-center gap-4 sm:gap-8 ">
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
              <ReactMarkdown 
                className="space-y-4"
                components={{
                  code: CodeBlock
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </article>
            <button 
              onClick={() => setSelectedPost(null)}
              className="mt-8 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              ← Back to posts
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6"
          >
            {posts.map((post) => (
              <motion.div
                key={post.slug}
                whileHover={{ scale: 1.01 }}
                className="glass-card  p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:blur-none"
                onClick={() => setSelectedPost(post)}
              >
                <h3 className="text-xl font-monolisa mb-2">{post.title}</h3>
                <div className="flex items-center gap-4 text-zinc-400 text-sm mb-4">
                  <span>{post.date}</span>
                </div>
                <p className="text-zinc-400 mb-4">
                  {post.excerpt ? post.excerpt : post.content.substring(0, 100) + '...'}
                </p>
                <span className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors">
                  Read more →
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}