'use client';

import { motion } from 'framer-motion';
import { FaStore } from 'react-icons/fa';
import Button from '@/components/Button';

export default function Stockists() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <FaStore className="text-7xl text-brand-orange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Stockists</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Become a Stockist Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Interested in </span>
              <span className="text-brand-orange">Stocking</span>
              <span className="text-white"> Our Products?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking to partner with retailers who share our commitment 
              to quality and sustainability.
            </p>

            <div className="bg-brand-dark border-2 border-brand-orange rounded-2xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold text-brand-yellow mb-6">
                Benefits of Partnering with Mountain Yolks
              </h3>
              <ul className="text-left text-gray-300 text-lg space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3">✓</span>
                  <span>Premium quality products your customers will love</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3">✓</span>
                  <span>Reliable, consistent supply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3">✓</span>
                  <span>Competitive wholesale pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3">✓</span>
                  <span>Marketing support and point-of-sale materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3">✓</span>
                  <span>Partnership with a trusted local brand</span>
                </li>
              </ul>
            </div>

            <Button href="/contact" variant="primary" size="lg">
              Contact Us About Wholesale
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

