import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development...",
      date: "Oct 15, 2023",
      content: `
        Web development is rapidly evolving with new frameworks, tools, and methodologies. From WebAssembly to Edge Computing, the landscape is changing dramatically.

        ## Key Trends

        1. **WebAssembly (Wasm)**
           - Bringing native performance to the web
           - Enabling new types of applications
           - Growing ecosystem and tooling

        2. **Edge Computing**
           - Reduced latency
           - Better performance
           - Improved user experience

        3. **AI Integration**
           - Smarter development tools
           - Automated testing
           - Intelligent debugging

        ## Impact on Developers

        The evolution of web development tools and practices is changing how we build applications. Developers need to adapt and learn new skills to stay relevant in this rapidly changing landscape.

        ## Looking Ahead

        The future of web development looks exciting with new possibilities and challenges. Staying updated with these trends will be crucial for developers in the coming years.
      `,
      tags: ["Web Development", "Technology", "Future"]
    },
    {
      id: 2,
      title: "Designing for Accessibility",
      excerpt: "Best practices for inclusive design and development...",
      date: "Oct 10, 2023",
      content: `
        Accessibility is not just a checkbox to tick off - it's a fundamental aspect of web development that ensures everyone can use your application.

        ## Core Principles

        1. **Perceivable**
           - Alternative text for images
           - Captions for videos
           - Clear typography and contrast

        2. **Operable**
           - Keyboard navigation
           - No time limits
           - Clear navigation

        3. **Understandable**
           - Clear instructions
           - Error prevention
           - Consistent navigation

        ## Implementation Tips

        - Use semantic HTML
        - Implement ARIA attributes correctly
        - Test with screen readers
        - Ensure keyboard navigation works

        ## Benefits

        Making your application accessible not only helps users with disabilities but also improves the experience for all users and can boost SEO.
      `,
      tags: ["Accessibility", "Design", "Development"]
    },
    {
      id: 3,
      title: "Modern State Management",
      excerpt: "Comparing different approaches to state management...",
      date: "Oct 5, 2023",
      content: `
        State management is a crucial aspect of modern web applications. From Redux to Zustand, React Query to Jotai, this post analyzes different state management solutions.

        ## Popular Solutions

        1. **Redux**
           - Predictable state container
           - Large ecosystem
           - DevTools support

        2. **Zustand**
           - Simple and lightweight
           - No boilerplate
           - Great TypeScript support

        3. **React Query**
           - Server state management
           - Automatic background updates
           - Cache management

        ## Choosing the Right Solution

        The choice of state management solution depends on various factors:
        - Application size and complexity
        - Team size and experience
        - Performance requirements
        - Development timeline

        ## Best Practices

        - Keep state as local as possible
        - Use appropriate tools for different types of state
        - Consider performance implications
      `,
      tags: ["React", "State Management", "Development"]
    }
  ]

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {selectedPost ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card p-8"
          >
            <article className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-display mb-2">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 text-zinc-400 text-sm mb-8">
                <span>{selectedPost.date}</span>
                <div className="flex gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-zinc-500 dark:text-zinc-200 dark:bg-zinc-800/50 bg-zinc-200 border-zinc-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 text-zinc-300">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
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
                key={post.id}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-6 cursor-pointer hover:font-semibold hover:shadow-lg transition-all duration-200 hover:blur-none"
                onClick={() => setSelectedPost(post)}
              >
                <h3 className="text-xl font-mono mb-2 ">{post.title}</h3>
                <div className="flex items-center gap-4 text-zinc-400 text-sm mb-4">
                  <span>{post.date}</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-zinc-500 dark:text-zinc-200 border border-zinc-400 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 mb-4">{post.excerpt}</p>
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