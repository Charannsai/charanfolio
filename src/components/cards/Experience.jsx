import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    location: 'San Francisco, CA',
    description: 'Led the development of enterprise-scale React applications, improving performance by 40%. Mentored junior developers and implemented modern CI/CD practices.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2019 - 2021',
    location: 'New York, NY',
    description: 'Developed and maintained multiple full-stack applications using React, Node.js, and PostgreSQL. Implemented real-time features using WebSocket.',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: '2017 - 2019',
    location: 'Boston, MA',
    description: 'Created responsive web applications and implemented modern UI/UX designs. Collaborated with designers to ensure pixel-perfect implementations.',
  },
];

export default function Experience() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
            
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12"
            >
              <div className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="md:px-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="backdrop-blur-3xl backdrop-brightness-90 p-6 rounded-xl shadow-xl  transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-green-400 mb-4">{exp.company}</h4>
                      <div className="flex items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </motion.div>
                  </div>
                </div>
              </div>


              <div className="absolute left-0 md:left-1/2 top-8 transform -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
      )}