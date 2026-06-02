"use client";

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Menu, X, Star, Phone, MapPin, Clock, Heart, Users, Award } from 'lucide-react';
import Link from 'next/link';

const businessData = {
  name: "Legends Of Punjab by Pepperazzi",
  phone: "074050 12175",
  address: "1 st, 120 Feet Ring Rd, Gulbai Tekra, Ahmedabad, Gujarat 380015",
  rating: 4.5,
  reviews: 4100,
  navigation: [
    {label: "Home", href: "/"},
    {label: "About", href: "/about"},
    {label: "Services", href: "/services"},
    {label: "Gallery", href: "/gallery"},
    {label: "Contact", href: "/contact"}
  ]
};

const storyData = [
  {
    title: "Founded on Tradition",
    description: "Started in 2018 with a simple mission: bring the authentic flavors of Punjab to Gulbai Tekra. Our recipes have been passed down through generations.",
    icon: "🏠",
    year: "2018"
  },
  {
    title: "Community Love",
    description: "What began as a small family kitchen has grown into Gulbai Tekra's most beloved Punjabi destination, serving over 4,100 happy families.",
    icon: "❤️",
    year: "2024"
  },
  {
    title: "Authentic Flavors",
    description: "Every spice is hand-selected, every recipe tested by our mothers and grandmothers. We never compromise on authenticity for convenience.",
    icon: "🌶️",
    year: "Always"
  }
];

const valuesData = [
  {
    icon: Heart,
    title: "Family First",
    description: "Every meal is prepared with the same love we'd serve our own family"
  },
  {
    icon: Award,
    title: "Authentic Recipes",
    description: "Traditional methods and genuine ingredients, no shortcuts ever"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Creating a space where Gulbai Tekra feels the warmth of Punjab"
  }
];

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        :root {
          --color-primary: #d97706;
          --color-secondary: #dc2626;
          --color-accent: #f59e0b;
        }
      `}</style>

      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Legends Of Punjab" className="h-8 w-8 rounded-full" />
              <span className="font-bold text-xl text-gray-900">Legends Of Punjab</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {businessData.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-orange-600 ${
                    item.href === '/about' ? 'text-orange-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${businessData.phone}`}
                className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors"
              >
                Order Now
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 border-t"
            >
              {businessData.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-orange-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Where Punjab Meets <span className="text-orange-600">Gulbai Tekra</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our story began with homesick hearts and hungry souls, determined to recreate the authentic tastes of Punjab right here on 1st Street.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-400 fill-current" size={20} />
                    <span className="font-semibold">{businessData.rating}</span>
                    <span className="text-gray-600">({businessData.reviews.toLocaleString()} reviews)</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/images/img_1780376317093_2.jpg"
                  alt="Authentic Punjab restaurant atmosphere"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From a small family kitchen to Gulbai Tekra's favorite Punjabi destination
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {storyData.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="text-6xl mb-4">{story.icon}</div>
                  <div className="text-orange-600 font-bold text-lg mb-2">{story.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/img_1780376317675_4.jpg"
                  alt="Traditional Punjabi cooking"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  What Drives Us
                </h2>
                <div className="space-y-6">
                  {valuesData.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-orange-100 p-3 rounded-full">
                        <value.icon className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/logo.png" alt="Logo" className="h-8 w-8 rounded-full" />
                <span className="font-bold text-lg">Legends Of Punjab</span>
              </div>
              <p className="text-gray-400 mb-4">Authentic Punjab flavors in the heart of Gulbai Tekra</p>
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="font-semibold">{businessData.rating}</span>
                <span className="text-gray-400">({businessData.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {businessData.navigation.map((item) => (
                  <Link key={item.label} href={item.href} className="block text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href={`tel:${businessData.phone}`} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Phone size={16} />
                  <span>{businessData.phone}</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>{businessData.address}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Hours</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>Daily: 11 AM - 11 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Legends Of Punjab by Pepperazzi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}