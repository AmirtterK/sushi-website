"use client";
import React, { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import { Menu, X, ChevronRight, Phone, Clock, MapPin } from "lucide-react";

type MenuCategory =
  | "nigiri"
  | "uramaki"
  | "futomaki"
  | "maki"
  | "crispy"
  | "fusion"
  | "shimpry"
  | "signature"
  | "tempura"
  | "nems"
  | "nouilles"
  | "boissons";

export default function NewPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("nigiri");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1, ease: easeOut },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 border-b border-red-800/40" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-red-600">Mr Sushi 27</h1>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <div className="hidden md:flex space-x-8">
            {["home", "menu", "about", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="uppercase tracking-wide hover:text-red-500 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 p-4 space-y-3 text-center">
            {["home", "menu", "about", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="block uppercase hover:text-red-500 transition"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="h-screen relative flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601315481375-58a6e3e4e1b3?w=1600')] bg-cover bg-center brightness-50"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-red-600 mb-4">
            Mr Sushi 27
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-10">
            Authentic Japanese Cuisine with a Touch of Passion
          </p>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg inline-flex items-center gap-2"
          >
            Explore Menu <ChevronRight />
          </motion.a>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-black">
        <motion.h2
          className="text-center text-5xl font-serif text-red-600 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Our Menu
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {(Object.keys(menuData) as MenuCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === category
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-gray-700 text-gray-400 hover:border-red-500 hover:text-white"
              }`}
            >
              {menuData[category].title}
            </button>
          ))}
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-gray-800"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src={menuData[activeCategory].image}
              alt={menuData[activeCategory].title}
              className="w-full h-96 object-cover transform hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-3xl font-serif text-white">
              {menuData[activeCategory].title}
            </h3>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {menuData[activeCategory].items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className=" p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-light">{item.name}</h4>
                    {item.pieces && (
                      <p className="text-gray-400 text-sm">
                        {item.pieces} pieces
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl text-red-500">{item.price}</div>
                    <div className="text-gray-400 text-sm">DA</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-5xl text-red-600 mb-6">Our Story</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Mr Sushi 27 was born from a deep passion for authentic Japanese
          craftsmanship. Every roll, every slice, every flavor tells a story —
          one of dedication, precision, and love for tradition.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4  text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-5xl text-red-600 mb-8">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800"
          >
            <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <p>123 Sushi Street, Tokyo District</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800"
          >
            <Clock className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <p>Mon - Sun: 11am - 11pm</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800"
          >
            <Phone className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <p>+213 555 123 456</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-500">
        <p className="mb-2 text-red-600 text-xl font-serif">Mr Sushi 27</p>
        <p className="text-sm">© 2025 Mr Sushi 27 — All Rights Reserved.</p>
      </footer>
    </div>
  );
}
const menuData: Record<
  MenuCategory,
  {
    title: string;
    image: string;
    items: Array<{ name: string; pieces: number | null; price: number }>;
  }
> = {
  nigiri: {
    title: "Nigiri",
    image: "/menu/nigiri.jpeg",
    items: [
      { name: "Crevettes", pieces: 2, price: 700 },
      { name: "Saumon", pieces: 2, price: 600 },
      { name: "Mango", pieces: 2, price: 500 },
    ],
  },
  uramaki: {
    title: "Uramaki",
    image: "https://images.unsplash.com/photo-1617196035154-b0f6da440763?w=800",
    items: [
      { name: "Crevettes", pieces: 4, price: 850 },
      { name: "Saumon", pieces: 4, price: 850 },
      { name: "Surimi", pieces: 4, price: 800 },
      { name: "Chiken", pieces: 4, price: 700 },
    ],
  },
  futomaki: {
    title: "Futomaki",
    image: "/menu/futomaki.jpeg",
    items: [
      { name: "Crevettes", pieces: 4, price: 900 },
      { name: "Saumon", pieces: 4, price: 900 },
      { name: "Surimi", pieces: 4, price: 850 },
      { name: "Chiken", pieces: 4, price: 750 },
      { name: "Végé", pieces: 4, price: 750 },
    ],
  },
  maki: {
    title: "Maki",
    image: "/menu/maki.jpeg",
    items: [
      { name: "Crevettes", pieces: 6, price: 800 },
      { name: "Saumon", pieces: 6, price: 800 },
      { name: "Surimi", pieces: 6, price: 700 },
      { name: "Avocat", pieces: 6, price: 700 },
    ],
  },
  crispy: {
    title: "Crispy",
    image: "https://images.unsplash.com/photo-1617196035165-f6c0c16d4b86?w=800",
    items: [
      { name: "Crevettes", pieces: 4, price: 950 },
      { name: "Saumon", pieces: 4, price: 950 },
      { name: "Surimi", pieces: 4, price: 900 },
      { name: "Chiken", pieces: 4, price: 800 },
      { name: "Végé", pieces: 4, price: 800 },
    ],
  },
  fusion: {
    title: "Roll Salmo Fusion",
    image: "/menu/roll-salmo.jpeg",
    items: [
      { name: "Salamon roll", pieces: 6, price: 1200 },
      { name: "Frech salamon", pieces: 4, price: 1000 },
    ],
  },
  shimpry: {
    title: "Roll Shimpry Touch",
    image: "/menu/roll-shimpry.jpeg",
    items: [
      { name: "Tiger roll", pieces: 4, price: 1100 },
      { name: "Dragon roll", pieces: 4, price: 1100 },
    ],
  },
  signature: {
    title: "Roll Signature",
    image: "/menu/roll-signature.jpeg",
    items: [
      { name: "Crasy roll", pieces: 4, price: 1300 },
      { name: "Golden roll", pieces: 4, price: 1100 },
      { name: "Tasty crousty", pieces: 4, price: 700 },
    ],
  },
  tempura: {
    title: "Tempura",
    image: "/menu/tempura.jpeg",
    items: [
      { name: "Creuvette", pieces: 3, price: 1800 },
      { name: "Chiken", pieces: 3, price: 700 },
    ],
  },
  nems: {
    title: "Nems",
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800",
    items: [
      { name: "Crevettes", pieces: 3, price: 800 },
      { name: "Chiken", pieces: 3, price: 600 },
    ],
  },
  nouilles: {
    title: "Nouilles",
    image: "/menu/nouilles.jpeg",
    items: [
      { name: "Crevettes", pieces: null, price: 1400 },
      { name: "Chiken", pieces: null, price: 1000 },
    ],
  },
  boissons: {
    title: "Boissons",
    image: "/menu/boissons.jpeg",
    items: [
      { name: "Soda/Jus (1l)", pieces: null, price: 150 },
      { name: "Soda/Jus (33cl)", pieces: null, price: 100 },
      { name: "Eau (1.5l)", pieces: null, price: 50 },
      { name: "Eau (0.5l)", pieces: null, price: 30 },
    ],
  },
};
