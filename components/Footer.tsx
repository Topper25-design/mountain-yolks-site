'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-brand-orange/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-brand-yellow text-xl font-bold mb-4">Mountain Yolks</h3>
            <p className="text-gray-300 mb-4">
              Premium fresh eggs from happy, healthy chickens raised in the beautiful Southern Drakensberg mountains.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-orange transition-colors duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-orange transition-colors duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-orange transition-colors duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-yellow text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/stockists" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Stockists
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-brand-yellow text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-brand-orange" />
                <span className="text-gray-300">Inkerman Farm, Swartberg, KZN</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-brand-orange" />
                <a href="tel:+27723474850" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  072 3474850
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-brand-orange" />
                <a href="mailto:info@mountainyolks.com" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">
                  info@mountainyolks.cc.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-orange/30 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Mountain Yolks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

