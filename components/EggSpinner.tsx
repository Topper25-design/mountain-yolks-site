'use client';

import { motion } from 'framer-motion';

interface EggSpinnerProps {
  size?: number;
}

export default function EggSpinner({ size = 80 }: EggSpinnerProps) {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '3px solid transparent',
          borderTopColor: 'var(--accent-orange)',
          borderRightColor: 'var(--accent-yellow)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner egg shape */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width={size * 0.5}
          height={size * 0.6}
          viewBox="0 0 50 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Egg shape with gradient */}
          <defs>
            <linearGradient id="eggGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-orange)" />
              <stop offset="100%" stopColor="var(--accent-yellow)" />
            </linearGradient>
          </defs>
          <ellipse cx="25" cy="35" rx="20" ry="25" fill="url(#eggGradient)" opacity="0.9" />
          <ellipse cx="25" cy="35" rx="20" ry="25" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Pulsing glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-brand-orange/30 blur-xl"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

