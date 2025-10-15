'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEgg, FaStar, FaLeaf, FaCheckCircle } from 'react-icons/fa';
import Button from '@/components/Button';

export default function Products() {
  const products = [
    {
      name: 'Healthy Eggs',
      size: 'Half Dozen (6 Eggs)',
      price: 'R18',
      description: 'Our signature healthy eggs from happy chickens roaming mountain pastures.',
      features: ['Healthy', 'No Hormones', 'Omega-3 Rich', 'Farm Fresh'],
      popular: false,
    },
    {
      name: 'Healthy Eggs',
      size: 'Dozen (12 Eggs)',
      price: 'R36',
      description: 'Our signature healthy eggs from happy chickens roaming mountain pastures.',
      features: ['Healthy', 'No Hormones', 'Omega-3 Rich', 'Farm Fresh'],
      popular: true,
    },
    {
      name: 'Ethically Raised',
      size: '18 Pack',
      price: 'R54',
      description: 'Premium eggs from happy chickens fed quality feed.',
      features: ['Ethically Raised', 'Healthy', 'Non-GMO Feed', 'Premium Quality'],
      popular: false,
    },
    {
      name: 'Jumbo Family Pack',
      size: '36 Pack',
      price: 'R108',
      description: 'Our largest pack of healthy eggs, perfect for families and bulk buyers.',
      features: ['Great Value', 'Bulk Pack', 'Healthy', 'Family Size'],
      popular: false,
    },
  ];

  const benefits = [
    'Rich, golden yolks packed with flavor',
    'Higher protein content than conventional eggs',
    'Excellent source of Omega-3 fatty acids',
    'Vitamins A, D, E, and B12',
    'No antibiotics or hormones',
    'Sustainably and ethically produced',
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/mountain yolk product.jpg"
            alt="Mountain Yolks Premium Eggs"
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
            <div className="flex justify-center mb-6">
              <FaEgg className="text-7xl text-brand-orange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-brand-yellow">Products</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Premium quality eggs from happy, healthy chickens. 
              Taste the Mountain Yolks difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-brand-dark to-black border-2 border-brand-orange/30 rounded-2xl p-6 hover:border-brand-orange transition-all duration-300"
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-orange text-black px-4 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                      <FaStar /> Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <FaEgg className="text-5xl text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.size}</p>
                  <div className="text-4xl font-bold text-brand-orange mb-4">{product.price}</div>
                </div>

                <p className="text-gray-300 text-center mb-6">{product.description}</p>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <FaCheckCircle className="text-brand-orange mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href="/stockists" variant="primary" size="md" fullWidth className="mt-6">
                  Find Stockist
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="text-white">Why </span>
              <span className="text-brand-orange">Mountain Yolks</span>
              <span className="text-white">?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-black border border-brand-orange/30 rounded-lg p-4 hover:border-brand-orange transition-all duration-300"
                >
                  <FaLeaf className="text-brand-yellow text-2xl mr-4 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-r from-brand-orange to-brand-yellow rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-black/80 text-xl mb-8">
              Find Mountain Yolks products at a stockist near you today.
            </p>
            <Button href="/stockists" size="lg" className="bg-black text-brand-yellow hover:bg-brand-dark">
              Find a Stockist
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

