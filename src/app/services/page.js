"use client";

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Star, Menu, X, Utensils, Users, Clock, Award } from 'lucide-react';
import Link from 'next/link';

const businessData = {
  name: "Legends Of Punjab by Pepperazzi",
  phone: "074050 12175",
  address: "1 st, 120 Feet Ring Rd, Gulbai Tekra, Ahmedabad, Gujarat 380015",
  rating: 4.5,
  reviewCount: 4100,
  navigation: [
    {label:"Home",href:"/"},
    {label:"About",href:"/about"},
    {label:"Services",href:"/services"},
    {label:"Gallery",href:"/gallery"},
    {label:"Contact",href:"/contact"}
  ],
  services: [
    {icon:"🍛",title:"Traditional Punjabi Thalis",description:"Complete meals featuring dal makhani, butter chicken, fresh rotis, and seasonal vegetables served on traditional brass plates."},
    {icon:"🔥",title:"Tandoor Specialties",description:"Succulent kebabs, perfectly charred naans, and aromatic biryanis prepared in our authentic clay tandoor oven."},
    {icon:"🥘",title:"Rich Curry Collection",description:"From creamy paneer makhani to robust rajma, each curry simmers with carefully balanced spices and authentic cooking techniques."},
    {icon:"🍞",title:"Fresh Bread Varieties",description:"Hand-rolled rotis, flaky parathas, and stuffed kulchas made fresh throughout the day to complement every meal."},
    {icon:"🚗",title:"Home Delivery",description:"Enjoy authentic Punjab flavors in the comfort of your home with our reliable delivery service across Gulbai Tekra."},
    {icon:"🎉",title:"Family Celebrations",description:"Let us cater your special occasions with generous portions and festive presentations that honor Punjabi hospitality traditions."}
  ]
};

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', '#d97706');
    document.documentElement.style.setProperty('--color-secondary', '#dc2626');
    document.documentElement.style.setProperty('--color-accent', '#f59e0b');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-orange-800">Legends Of Punjab</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {businessData.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {businessData.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block px-4 py-2 text-gray-700 hover:bg-orange-50">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/img_1780376317093_2.jpg" alt="Punjab cuisine" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/60"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Flavors That Tell <span className="text-yellow-400">Stories</span>
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Every dish we serve carries the heritage of Punjab, from our tandoor to your table
              </p>
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{businessData.rating}</span>
                </div>
                <span>•</span>
                <span>{businessData.reviewCount} Reviews</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Culinary Offerings</h2>
              <p className="text-lg text-gray-600">Each service crafted with passion and authentic Punjabi traditions</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessData.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{delay:index*0.1}}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-orange-100 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Punjab Today</h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Ready to taste the authentic flavors of Punjab? Call us now or visit our restaurant in Gulbai Tekra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${businessData.phone}`} className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                  Visit Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/images/logo.png" alt="Logo" className="h-12 w-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Legends Of Punjab</h3>
              <p className="text-gray-400">Authentic Punjabi cuisine in the heart of Gulbai Tekra</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {businessData.navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="block text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{businessData.phone}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{businessData.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="text-gray-400 space-y-1">
                <div>Mon - Sun</div>
                <div>11:00 AM - 11:00 PM</div>
                <div className="mt-4 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span>{businessData.rating} ({businessData.reviewCount} reviews)</span>
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