'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useState } from 'react';
import EggSpinner from '@/components/EggSpinner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Replace YOUR_FORM_ID with your actual Formspree form ID
  // Or use environment variable: NEXT_PUBLIC_FORMSPREE_FORM_ID
  // Get your form ID from: https://formspree.io/
  const FORMSPREE_ENDPOINT = 
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID 
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
      : 'https://formspree.io/f/YOUR_FORM_ID';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('There was an error sending your message. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-4xl text-brand-orange" />,
      title: 'Visit Us',
      content: 'Inkerman Farm\nSouthern Drakensberg\nSwartberg, KZN',
    },
    {
      icon: <FaPhone className="text-4xl text-brand-yellow" />,
      title: 'Call Us',
      content: 'Phone: 072 3474850',
    },
    {
      icon: <FaEnvelope className="text-4xl text-brand-orange" />,
      title: 'Email Us',
      content: 'info@mountainyolks.com\nwholesale@mountainyolks.com',
    },
    {
      icon: <FaClock className="text-4xl text-brand-yellow" />,
      title: 'Farm Store Hours',
      content: 'Mon-Fri: 9am-6pm\nSat: 10am-4pm\nSun: Closed',
    },
  ];

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
              <FaEnvelope className="text-7xl text-brand-orange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get In </span>
              <span className="text-brand-yellow">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We'd love to hear from you! Whether you have questions about our products, 
              want to become a stockist, or just want to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-brand-dark to-black border-2 border-brand-orange/30 rounded-xl p-6 text-center hover:border-brand-orange transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Send Us a </span>
                <span className="text-brand-orange">Message</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            {/* Success Message */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-brand-yellow text-black border-2 border-brand-orange rounded-xl p-6 mb-8 flex items-center gap-4"
                >
                  <FaCheckCircle className="text-3xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Message Sent Successfully!</h4>
                    <p>Thank you for contacting Mountain Yolks. We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-red-900/30 text-white border-2 border-red-500 rounded-xl p-6 mb-8 flex items-center gap-4"
                >
                  <FaExclamationTriangle className="text-3xl text-red-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Error Sending Message</h4>
                    <p className="text-gray-300">{errorMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-black border-2 border-brand-orange/30 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-brand-orange/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-brand-orange/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-brand-orange/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors duration-200"
                    placeholder="072 3474850"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-brand-orange/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale/Stockist</option>
                    <option value="product">Product Question</option>
                    <option value="farm-visit">Farm Visit</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-brand-orange/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors duration-200 resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <EggSpinner size={24} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="text-white">Frequently Asked </span>
              <span className="text-brand-yellow">Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Can I visit your farm?',
                  a: 'Yes! We welcome farm visits by appointment. Please contact us to schedule a tour.',
                },
                {
                  q: 'Do you offer wholesale pricing?',
                  a: 'Absolutely! We work with retailers, restaurants, and institutions. Contact us for wholesale information.',
                },
                {
                  q: 'How fresh are your eggs?',
                  a: 'Our eggs are collected daily and delivered to stockists within 24-48 hours. Always farm-fresh!',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-brand-dark border border-brand-orange/30 rounded-lg p-6 hover:border-brand-orange transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-brand-yellow mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

