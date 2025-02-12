import { useState } from 'react'
import { getBlogPosts } from '../lib/post'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { Copy, Check } from 'lucide-react'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [copiedStates, setCopiedStates] = useState({})
  const [showToast, setShowToast] = useState(false)
  const posts = getBlogPosts()

  const copyToClipboard = async (text, blockId) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates({ ...copiedStates, [blockId]: true })
      setShowToast(true)
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [blockId]: false })
        setShowToast(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const CodeBlock = ({ children, className }) => {
    const codeId = Math.random().toString(36).substr(2, 9)
    const isActive = copiedStates[codeId]

    const highlightCode = (code) => {
      return code.split('\n').map((line, lineIndex) => {
        const tokens = line.split(/(\s+|[{}[\]().,;:]|=>|[A-Za-z_][A-Za-z0-9_]*|\d+|['"`].*?['"`]|\/\/.*$)/).filter(Boolean);
    
        return (
          <div key={lineIndex} className="line">
            {tokens.map((token, index) => {
              if (token.startsWith('//')) {
                return <span key={index} className="text-[#6A9955] dark:text-[#89CA78]">{token}</span>; // Green for comments
              }
              if (token.match(/^(import|export|from|const|return|default|let|var|function|async|await)$/)) {
                return <span key={index} className="text-[#E06C75] dark:text-[#F07178] font-semibold">{token}</span>; // Red for keywords
              }
              if (token.match(/^[A-Z][A-Za-z0-9]*$/)) {
                return <span key={index} className="text-[#61AFEF] dark:text-[#82AAFF]">{token}</span>; // Blue for components & classes
              }
              if (token.match(/^(useState|useEffect|className|onClick|setState)$/)) {
                return <span key={index} className="text-[#E5C07B] dark:text-[#FFCB6B]">{token}</span>; // Yellow for React hooks & properties
              }
              if (token.match(/^['"`].*['"`]$/)) {
                return <span key={index} className="text-[#98C379] dark:text-[#C3E88D]">{token}</span>; // Green for strings
              }
              if (token.match(/^[<>\/]$/)) {
                return <span key={index} className="text-[#D19A66] dark:text-[#F78C6C]">{token}</span>; // Orange for JSX tags
              }
              if (token.match(/^(=>|\!|\?|\:|=)$/)) {
                return <span key={index} className="text-[#C678DD] dark:text-[#C792EA]">{token}</span>; // Purple for operators
              }
              if (token.match(/^[{}[\]().,;]$/)) {
                return <span key={index} className="text-[#ABB2BF] dark:text-[#B2CCD6]">{token}</span>; // Grey for brackets & punctuation
              }
              if (token.match(/^\d+$/)) {
                return <span key={index} className="text-[#D19A66] dark:text-[#F78C6C]">{token}</span>; // Orange for numbers
              }
              if (token.match(/^[a-z][A-Za-z0-9]*$/)) {
                return <span key={index} className="text-[#c57f7f] dark:text-[#c57f7f]">{token}</span>; // White for variables
              }
              if (token.match(/^\s+$/)) {
                return <span key={index}>{token}</span>; // Keep spacing intact
              }
    
              return <span key={index}>{token}</span>;
            })}
          </div>
        );
      });
    };
    
    

    return (
      <div className="relative group bg-[#ffffff] dark:bg-[#272727] rounded-lg overflow-hidden">
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
          className={`
            absolute top-12 right-1 
            opacity-0 group-hover:opacity-100
            transition-all duration-200 
            rounded-md
            p-1.5
            ${isActive 
              ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' 
              : 'bg-[#2d2d2d] text-zinc-400 hover:bg-[#3d3d3d]'
            }
          `}
        >
          {isActive ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </motion.button>
      </div>
    )
  }
  return (
    <div className="space-y-6 mt-10">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 right-4 bg-green-500/20 z-40 text-green-400 px-4 py-2 rounded-md border border-green-500/30"
          >
            Code copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedPost ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8"
          >
            <article className="prose prose-invert max-w-none md:text-justify  blog-content">
              <h1 className="text-3xl text-center font-display mb-2 ">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 justify-center text-center text-zinc-400 text-sm mb-8">
                <span>{selectedPost.date}</span>
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
                className="glass-card p-6 cursor-pointer hover:font-semibold hover:shadow-lg transition-all duration-200 hover:blur-none"
                onClick={() => setSelectedPost(post)}
              >
                <h3 className="text-xl font-mono mb-2">{post.title}</h3>
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