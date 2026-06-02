"use client";


import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, Star, Menu, X } from 'lucide-react';
import Link from 'next/link';

const businessData = {
  name: "Legends Of Punjab by Pepperazzi",
  category: "Punjabi restaurant", 
  phone: "074050 12175",
  address: "1 st, 120 Feet Ring Rd, Gulbai Tekra, Ahmedabad, Gujarat 380015",
  rating: 4.5,
  reviews: 4100
};

const navigation = [
  {label:"Home",href:"/"},
  {label:"About",href:"/about"},
  {label:"Services",href:"/services"},
  {label:"Gallery",href:"/gallery"},
  {label:"Contact",href:"/contact"}
];

const contactInfo = [
  { icon: Phone, label: "Call Us", value: businessData.phone, href: `tel:${businessData.phone}` },
  { icon: MapPin, label: "Visit Us", value: businessData.address, href: "#location" },
  { icon: Clock, label: "Hours", value: "11:00 AM - 11:00 PM", href: "#" },
  { icon: Mail, label: "Email", value: "info@legendsofpunjab.com", href: "mailto:info@legendsofpunjab.com" }
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <style jsx global>{`
        :root {
          --color-primary: #d97706;
          --color-secondary: #dc2626;
          --color-accent: #f59e0b;
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Legends Of Punjab" className="h-10 w-auto" />
              <span className="font-bold text-xl text-gray-900">Legends Of Punjab</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="block py-2 text-gray-700 hover:text-orange-600 font-medium">
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </nav>
      </header>

      <main>
        <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-bold mb-6">
              Come Hungry, Leave Happy
            </motion.h1>
            <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-xl md:text-2xl opacity-90">
              Your table is waiting at Gulbai Tekra's favorite Punjabi destination
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">Ready for authentic Punjab flavors? We're here to serve you</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.a key={item.label} href={item.href} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*0.1}} className="flex items-start space-x-4 p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors group">
                    <div className="p-3 bg-orange-600 text-white rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  <textarea rows="4" placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                  <button type="submit" className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="location" className="py-16 bg-orange-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">Located in the heart of Gulbai Tekra on 120 Feet Ring Road</p>
            </motion.div>

            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">{businessData.address}</p>
                </div>
              </div>
              <div className="p-6 bg-orange-600 text-white text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-bold">{businessData.rating}</span>
                  <span>({businessData.reviews.toLocaleString()} reviews)</span>
                </div>
                <p className="opacity-90">Ahmedabad's favorite Punjabi restaurant</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/images/logo.png" alt="Legends Of Punjab" className="h-12 w-auto mb-4" />
              <p className="text-gray-400">{businessData.category}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link key={item.label} href={item.href} className="block text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">{businessData.phone}</p>
              <p className="text-gray-400">{businessData.address}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-gray-400">Mon - Sun</p>
              <p className="text-gray-400">11:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {businessData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}