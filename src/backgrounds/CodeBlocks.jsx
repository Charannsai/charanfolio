import React from 'react';
import { motion } from 'framer-motion';

export const CodeBlocks = () => {
  const codeSnippets = [
    'function optimize() {',
    'const data = [];',
    'if (isValid) {',
    'return result;',
    'async function init() {',
    'export default {',
    'const [state, setState] =',
    'useEffect(() => {',
    'npm install',
    'git commit -m "feat:"',
    'npm build',
    'npm run dev',
    'npm i',
    'npm i motion',
  ];

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute p-4 rounded-lg backdrop-blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: [0.4, 0.8, 0.4],
            y: [0, -30, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * -10,
          }}
        >
          <pre className="text-sm font-mono">
            <code className="text-blue-400">
              {codeSnippets[i % codeSnippets.length]}
            </code>
          </pre>
        </motion.div>
      ))}
    </div>
  );
}