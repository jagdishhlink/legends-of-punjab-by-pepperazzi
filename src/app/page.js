"use client";


import { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Star, Clock, Users, ChefHat } from 'lucide-react';
import Link from 'next/link';

const businessData = {
  name: "Legends Of Punjab by Pepperazzi",
  category: "Punjabi restaurant",
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
  ],
  testimonials: [
    {name:"Rajesh Sharma",role:"Regular Customer",text:"The butter chicken here reminds me of my grandmother's cooking. Every visit feels like coming home to Punjab.",rating:5},
    {name:"Priya Patel",role:"Food Enthusiast",text:"Finally found authentic Punjabi food in Ahmedabad! The dal makhani is absolutely divine and the service is so warm.",rating:5},
    {name:"Arjun Singh",role:"Local Resident",text:"Been ordering from here for months now. The consistency in taste and quality is remarkable. Highly recommend the tandoori platter!",rating:5}
  ]
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-orange-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Legends Of Punjab" className="h-10 w-10 rounded-full" />
            <span className="text-lg font-bold text-orange-800">Legends Of Punjab</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {businessData.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                {item.label}
              </Link>
            ))}
            <a href={`tel:${businessData.phone}`} className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {businessData.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block text-gray-700 hover:text-orange-600 font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/img_1780376317093_2.jpg" alt="Authentic Punjabi cuisine" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="mb-6">
          <div className="inline-flex items-center bg-orange-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">{businessData.rating}</span>
            <span className="text-white/80 ml-2">({businessData.reviewCount} reviews)</span>
          </div>
        </motion.div>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Authentic Punjab Flavors in <span className="text-orange-400">Gulbai Tekra</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.4}} className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Step into the heart of Punjab right here on 1st Street. Every dish tells a story of tradition, prepared with love and served with the warmth that makes Gulbai Tekra feel like home.
        </motion.p>
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.6}} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${businessData.phone}`} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Order Now</span>
          </a>
          <Link href="/gallery" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            View Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Taste the <span className="text-orange-600">Tradition</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From our tandoor to your table, experience authentic Punjabi cuisine crafted with generations of culinary wisdom</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessData.services.map((service, index) => (
            <motion.div key={index} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*0.1}} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600">Real stories from our Punjabi food family</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {businessData.testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*0.2}} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <h2 className="text-4xl font-bold mb-6">Ready for an Authentic Punjab Experience?</h2>
          <p className="text-xl mb-8 text-orange-100">Call now to reserve your table or place an order for delivery to Gulbai Tekra</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${businessData.phone}`} className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>{businessData.phone}</span>
            </a>
            <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Find Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/logo.png" alt="Legends Of Punjab" className="h-10 w-10 rounded-full" />
              <span className="text-lg font-bold">Legends Of Punjab</span>
            </div>
            <p className="text-gray-400 mb-4">Authentic Punjabi cuisine in the heart of Gulbai Tekra</p>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">{businessData.rating}</span>
              <span className="text-gray-400">({businessData.reviewCount} reviews)</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {businessData.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block text-gray-400 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">{businessData.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <a href={`tel:${businessData.phone}`} className="text-gray-400 hover:text-white transition-colors">{businessData.phone}</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Mon - Sun</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <p className="text-sm mt-4">Delivery available throughout Gulbai Tekra</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Legends Of Punjab by Pepperazzi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <style jsx global>{`
        :root {
          --color-primary: #d97706;
          --color-secondary: #dc2626;
          --color-accent: #f59e0b;
        }
      `}</style>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}