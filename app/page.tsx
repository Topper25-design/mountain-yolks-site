'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEgg, FaLeaf, FaMountain, FaHeart, FaArrowRight } from 'react-icons/fa';
import Button from '@/components/Button';

export default function Home() {
  const features = [
    {
      icon: <FaEgg className="text-5xl text-brand-orange" />,
      title: 'Premium Quality',
      description: 'Fresh, beautiful eggs from healthy, happy chickens.',
    },
    {
      icon: <FaLeaf className="text-5xl text-brand-yellow" />,
      title: 'Exciting Future',
      description: 'Our chickens will soon be raised on home grown grains produced on our farm and locally sourced.',
    },
    {
      icon: <FaMountain className="text-5xl text-brand-orange" />,
      title: 'Mountain Fresh',
      description: 'Raised in the pristine air of the beautiful mountains.',
    },
    {
      icon: <FaHeart className="text-5xl text-brand-yellow" />,
      title: 'Ethically Raised',
      description: 'We care deeply about animal welfare and sustainability.',
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
        <Image
            src="/Mountain yolks hero image.jpg"
            alt="Mountain landscape"
            fill
            className="object-cover"
          priority
            quality={100}
          />
          {/* Dark overlay to maintain brand colors and text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Gradient overlay for extra depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-brand-orange/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Premium</span>
                <br />
                <span className="text-brand-orange">Southern Drakensberg Mountains</span>
                <br />
                <span className="text-brand-yellow">Eggs</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience the difference of fresh, healthy eggs from chickens raised in the pristine air of the Southern Drakensberg mountains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/products" variant="primary" size="lg">
                  View Products
                </Button>
                <Button href="/stockists" variant="outline" size="lg">
                  Find a Stockist
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-end"
            >
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
            <Image
                  src="/Mountain Yolks Logo.png"
                  alt="Mountain Yolks"
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-brand-yellow animate-bounce">
            <FaArrowRight className="rotate-90 text-3xl" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-brand-orange">Mountain Yolks</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're committed to providing the highest quality eggs while caring for our chickens and the environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-black border border-brand-orange/30 rounded-lg p-8 text-center hover:border-brand-orange transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-brand-yellow">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Find Mountain Yolks at a store near you or contact us for more information.
            </p>
            <Button href="/contact" size="lg" className="bg-black text-brand-yellow hover:bg-brand-dark">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
