'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PageLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function PageLoader({ onComplete, duration = 2000 }: PageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-orange/30 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Logo */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/Mountain Yolks Logo.png"
                  alt="Mountain Yolks"
                  width={120}
                  height={120}
                  className="drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              <span className="text-brand-orange">Mountain</span>{' '}
              <span className="text-brand-yellow">Yolks</span>
            </motion.h1>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-brand-dark rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-orange to-brand-yellow"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: duration / 1000, ease: 'easeInOut' }}
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-400 mt-4 text-sm"
            >
              Premium Mountain Eggs
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

