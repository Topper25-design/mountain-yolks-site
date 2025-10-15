'use client';

import { motion } from 'framer-motion';
import { FaEgg } from 'react-icons/fa';

interface LoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Loading({ text = 'Loading...', size = 'md' }: LoadingProps) {
  const sizes = {
    sm: 'text-4xl',
    md: 'text-6xl',
    lg: 'text-8xl',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-6">
      {/* Animated Egg Container */}
      <div className="relative">
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-brand-orange/20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
        />

        {/* Rotating egg */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaEgg className={`${sizes[size]} text-brand-orange drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]`} />
          </motion.div>
        </motion.div>

        {/* Inner pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaEgg className={`${sizes[size]} text-brand-yellow`} />
        </motion.div>
      </div>

      {/* Loading text with dots animation */}
      <div className="flex items-center gap-2">
        <motion.p
          className="text-white text-xl font-medium"
          animate={{
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.p>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-brand-orange rounded-full"
              animate={{
                y: [0, -8, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

