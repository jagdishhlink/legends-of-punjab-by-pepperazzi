"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Menu, X, Phone, MapPin, Star, Camera, Grid3X3, Filter, Heart } from 'lucide-react';
import Link from 'next/link';

const businessData = {
  name: "Legends Of Punjab by Pepperazzi",
  category: "Punjabi restaurant",
  phone: "074050 12175",
  address: "1 st, 120 Feet Ring Rd, Gulbai Tekra, Ahmedabad, Gujarat 380015",
  rating: 4.5,
  reviewCount: 4100,
  logo: "/images/logo.png"
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

const galleryImages = [
  { src: "/images/img_1780376317093_2.jpg", category: "dishes", title: "Signature Thali" },
  { src: "/images/img_1780376317675_4.jpg", category: "dishes", title: "Butter Chicken" },
  { src: "/images/img_1780376317949_5.jpg", category: "tandoor", title: "Fresh Naan" },
  { src: "/images/img_1780376318224_6.jpg", category: "dishes", title: "Dal Makhani" },
  { src: "/images/img_1780376318498_7.jpg", category: "tandoor", title: "Tandoori Platter" },
  { src: "/images/img_1780376318771_8.jpg", category: "ambiance", title: "Dining Area" },
  { src: "/images/img_1780376319044_9.jpg", category: "dishes", title: "Paneer Specialties" },
  { src: "/images/img_1780376319594_11.jpg", category: "tandoor", title: "Grilled Kebabs" },
  { src: "/images/gmap_1780376320129_0.jpg", category: "ambiance", title: "Restaurant Interior" },
  { src: "/images/gmap_1780376320225_1.jpg", category: "dishes", title: "Traditional Curry" },
  { src: "/images/gmap_1780376320313_2.jpg", category: "dishes", title: "Biryani Special" },
  { src: "/images/gmap_1780376320600_3.jpg", category: "ambiance", title: "Cozy Seating" }
];

const categories = [
  { id: "all", label: "All Photos", icon: Grid3X3 },
  { id: "dishes", label: "Our Dishes", icon: Camera },
  { id: "tandoor", label: "Tandoor Items", icon: Filter },
  { id: "ambiance", label: "Ambiance", icon: Heart }
];

function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onClose} />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <img src={businessData.logo} alt={businessData.name} className="h-8" />
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={20} />
              </button>
            </div>
            <nav className="p-4">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block py-3 text-gray-700 hover:text-orange-600 font-medium" onClick={onClose}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GalleryGrid({ images, selectedCategory }) {
  const filteredImages = selectedCategory === "all" ? images : images.filter(img => img.category === selectedCategory);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredImages.map((image, index) => (
        <motion.div key={`${image.src}-${selectedCategory}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100">
          <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-sm">{image.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-white" style={{"--color-primary": "#d97706", "--color-secondary": "#dc2626", "--color-accent": "#f59e0b"}}>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src={businessData.logo} alt={businessData.name} className="h-10 w-auto" />
              <span className="font-bold text-xl text-gray-900 hidden sm:block">{businessData.name}</span>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className={`font-medium transition-colors ${item.href === '/gallery' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Link href={`tel:${businessData.phone}`} className="hidden sm:flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                <Phone size={16} />
                <span className="font-medium">Call Now</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-700 hover:text-orange-600">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main>
        <section className="relative py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Taste the <span className="text-orange-600">Tradition</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Every dish captures the authentic flavors of Punjab, crafted with love and served with pride at our Gulbai Tekra location.
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{businessData.rating}</span>
                  <span>({businessData.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-orange-600" />
                  <span>{galleryImages.length} Photos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category.id ? 'bg-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'}`}>
                    <IconComponent size={18} />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </motion.div>
            <GalleryGrid images={galleryImages} selectedCategory={selectedCategory} />
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={businessData.logo} alt={businessData.name} className="h-12 mb-4" />
              <p className="text-gray-300 mb-4">Authentic Punjabi cuisine served with traditional hospitality in the heart of Gulbai Tekra.</p>
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(businessData.rating) ? "fill-current" : ""} />
                ))}
                <span className="text-white ml-2">{businessData.rating} ({businessData.reviewCount.toLocaleString()})</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-300 hover:text-orange-400 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-2">
                  <Phone size={16} className="mt-1 text-orange-400" />
                  <Link href={`tel:${businessData.phone}`} className="hover:text-orange-400 transition-colors">{businessData.phone}</Link>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1 text-orange-400" />
                  <span>{businessData.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Mon - Thu:</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri - Sun:</span>
                  <span>11:00 AM - 12:00 AM</span>
                </div>
              </div>
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