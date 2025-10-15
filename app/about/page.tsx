'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSun, FaUsers, FaAward } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: <FaCheckCircle className="text-4xl text-brand-orange" />,
      title: 'Quality First',
      description: 'We never compromise on the quality of our eggs or the care of our chickens.',
    },
    {
      icon: <FaSun className="text-4xl text-brand-yellow" />,
      title: 'Natural Living',
      description: 'Our chickens thrive in clean, bright spaces with fresh air and balanced feed.',
    },
    {
      icon: <FaUsers className="text-4xl text-brand-orange" />,
      title: 'Community Focused',
      description: 'We support local businesses and give back to our mountain community.',
    },
    {
      icon: <FaAward className="text-4xl text-brand-yellow" />,
      title: 'Future Plans',
      description: 'To raise our chickens on home grown grains produced on our farm.',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Mountain yolk grain image.jpg"
            alt="Mountain Yolks Grain Fields"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dark overlay to maintain brand colors and text readability */}
          <div className="absolute inset-0 bg-black/75"></div>
          {/* Gradient overlay for extra depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-brand-orange/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-brand-orange">Mountain Yolks</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a family-owned farm dedicated to producing the finest farm produced eggs 
              in the most ethical and sustainable way possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-brand-yellow">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Mountain Yolks began with a simple vision: to raise chickens the way nature intended 
                  and produce eggs that taste like they should – fresh, flavorful, and nutritious.
                </p>
                <p>
                  Nestled in the pristine Southern Drakensberg mountain range, our farm provides the perfect environment for our hens to thrive. Raised under ethical and carefully managed conditions, they enjoy spacious, clean housing with plenty of natural light and fresh air. Our hens are fed a balanced, nutrient-rich diet and cared for by dedicated farmers who prioritise their health, comfort, and well-being—ensuring the highest quality eggs, produced responsibly and sustainably.
                </p>
                <p>
                  What began as a humble family operation three generations ago has evolved into an exciting new chapter for our farm. This venture marks the next step in ensuring that our legacy endures for generations to come. By integrating poultry production with our existing grain operations, we aim to create a fully sustainable cycle—where the grain grown on our land will one day feed our chickens. Our commitment remains rooted in the same values that have guided our family for decades: quality, integrity, and care for the land and animals. Through innovation and responsible farming, we are building a competitive, forward-looking enterprise that honours our past while securing our future.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-orange to-brand-yellow p-1 rounded-2xl"
            >
              <div className="bg-black p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-brand-yellow mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg mb-6">
                  To provide the highest quality, ethically-produced eggs while maintaining 
                  sustainable farming practices and supporting our local community.
                </p>
                <h3 className="text-2xl font-bold text-brand-orange mb-4">Our Promise</h3>
                <p className="text-gray-300 text-lg">
                  Every egg we produce comes from happy, healthy chickens raised with care, 
                  respect, and the fresh mountain air of the Southern Drakensberg which gives our eggs the edge.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-brand-orange">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black border border-brand-orange/30 rounded-lg p-6 text-center hover:border-brand-orange transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Our </span>
              <span className="text-brand-yellow">Commitment</span>
            </h2>
            <div className="bg-brand-dark border-2 border-brand-orange rounded-2xl p-8 md:p-12">
              <ul className="space-y-4 text-left text-gray-300 text-lg">
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand-orange mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Ethical care.</strong> Our chickens are never caged and are raised in spacious, well-ventilated environments with natural light and fresh air.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand-orange mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Natural nutrition.</strong> Fed a balanced, grain-based diet—soon produced right here on our own farm.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand-orange mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Sustainable future.</strong> Every step we take protects our soil, water, and land for the next generation.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand-orange mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Local roots.</strong> Proudly supporting our community and reducing our carbon footprint through local sourcing.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand-orange mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Transparency.</strong> We believe in honesty—you're always welcome to visit and see how we farm.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

