import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const posts = [
  {
    title: "How AI Changed My Life",
    excerpt: "AI has transformed my workflow and thought process. From automating tasks to exploring machine learning algorithms...",
    date: "Oct 20, 2024",
    readTime: "5 min read",
    content:
      "AI has revolutionized the way I work and think. It started with simple tools for task automation, but over time, I began to explore AI-powered recommendations, intelligent chatbots, and machine learning algorithms. These innovations have made my processes more efficient and opened my eyes to the future of technology. As a developer, AI has influenced how I approach problem-solving, providing new avenues for research and creativity. It’s no longer just a tool but a partner in innovation, helping me to grow both professionally and personally.",
    image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Why Freelancing is a Great Way to Kickstart Your Career",
    excerpt: "Freelancing is more than just a flexible job; it’s an excellent way to build your career and gain valuable...",
    date: "Oct 20, 2024",
    readTime: "5 min read",
    content:
      "Freelancing is an incredible way to launch your career, offering flexibility, real-world experience, and income potential. As a freelancer, you gain hands-on experience by working on diverse projects, which helps you develop a solid portfolio. This exposure allows you to hone your skills while working with clients across various industries.The freedom to set your own schedule and rates gives you control over your work-life balance and income. Plus, freelancing opens up networking opportunities with clients and other professionals, which can lead to future job prospects.Overall, freelancing is a powerful stepping stone to building a successful career while gaining invaluable experience.",
    image: "https://images.pexels.com/photos/5862374/pexels-photo-5862374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "My First Hackathon Experience",
    excerpt: "Hackathons are intense yet incredibly rewarding. In my recent Hack-Arena participation, I had the opportunity to collaborate with brilliant minds...",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    content:
      "Participating in a hackathon is one of the most exhilarating experiences of my life. In the 2024 Hack-Arena, I had the chance to work with talented individuals, brainstorm creative solutions, and build a project under time pressure. It was a thrilling challenge to conceptualize and develop our project from scratch. The collaboration, problem-solving, and learning that happened over those intense hours taught me invaluable skills, especially in rapid prototyping and innovation. I also got feedback from industry juries, which helped refine our approach. Hackathons push you to think outside the box and grow as a developer.",
    image: "/assets/hackathon.jpg",
  },
];

export default function BlogSection({ limit }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedPost, setSelectedPost] = useState(null);

  const openPopup = (post) => setSelectedPost(post);
  const closePopup = () => setSelectedPost(null);

  
  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.h2 className="text-4xl min-[320px]:text-3xl min-[768px]:text-4xl font-bold mb-6">
          Thoughts & Ideas
        </motion.h2>
        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        <p className="text-neutral-300 max-w-2xl mx-auto mt-2">
          Dive into my recent blogs for expert insights, tips, and industry trends.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {displayedPosts.map((post, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.2 }}
            onClick={() => openPopup(post)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl  transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative rounded-xl backdrop-blur-md border border-white/10 p-6 bg-black/40 hover:bg-black/50 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <img
                src={post.image}
                alt={post.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-neutral-400 mb-2">{post.excerpt}</p>
                <p className="text-xs text-neutral-500">{post.date} · {post.readTime}</p>
              </div>
              <button className="mt-4 cursor-pointer inline-flex items-center gap-2 text-primary hover:text-green-500">
                  Read More <ArrowRight size={16} />
                </button>
            </div>
          </motion.div>
        ))}
      </div>

      {limit && (
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          
        </motion.div>
      )}

      {selectedPost && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative bg-black/80 p-4 sm:p-6 lg:p-10 rounded-lg shadow-xl max-w-lg sm:max-w-xl lg:max-w-3xl w-full mx-4"
    >
      <button
        onClick={closePopup}
        className="absolute top-4 right-4 text-neutral-400 hover:text-black rounded-full hover:bg-white transition-all"
      >
        <X size={24} />
      </button>
      <img
        src={selectedPost.image}
        alt={selectedPost.title}
        className="w-full h-40 sm:h-64 lg:h-72 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {selectedPost.title}
      </h2>
      <p className="text-neutral-400 text-sm mb-6">
        {selectedPost.date} • {selectedPost.readTime}
      </p>
      <div className="max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-auto pr-2">
        <p className="text-neutral-300">{selectedPost.content}</p>
      </div>
    </motion.div>
  </div>
)}

    </div>
  );
}
