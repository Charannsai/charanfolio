import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const projects = [
  {
    title: "E-Commerce Solution",
    description:
      "Modern e-commerce platform with seamless user experience and advanced features.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=2000&h=1200",
    link: "#",
  },
  
  // Add more projects here as needed
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="px-6">
      <motion.h2
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-4xl sm:text-5xl font-bold mb-16 text-center"
      >
        Projects
      </motion.h2>

      {/* Center the grid by wrapping it in a div with proper centering */}
      <div className="max-w-7xl mx-auto"> {/* Added max-w-7xl and mx-auto to center */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <a
                href={project.link}
                className="block rounded-2xl overflow-hidden shadow-lg bg-neutral-800 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-75 z-10" />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-2">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 line-clamp-2 sm:line-clamp-none">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all mt-4">
                    Read More <ArrowUpRight size={16} />
                  </button>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
