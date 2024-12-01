import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserIcon, BriefcaseIcon, BookOpenIcon, MessageSquareIcon } from 'lucide-react';

const navItems = [
  { icon: <HomeIcon size={20} />, label: 'Home', to: '/' },
  { icon: <UserIcon size={20} />, label: 'About', to: '/about' },
  { icon: <BriefcaseIcon size={20} />, label: 'Works', to: '/works' },
  { icon: <BookOpenIcon size={20} />, label: 'Blog', to: '/blog' },
  { icon: <MessageSquareIcon size={20} />, label: 'Contact', to: '/contact' },
];

export default function Navigation() {
  return (
    
      <div className='w-full flex justify-center '>
        <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="z-50 flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-full px-6 py-3 space-x-6 shadow-md fixed mt-10"
    >
      <ul className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {navItems.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex justify-center items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors ${
                  isActive ? 'font-semibold text-neutral-900 dark:text-white' : ''
                }`
              }
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
      </div>
  );
}
