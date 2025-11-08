"use client";
import React, { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import { Menu, X, ChevronRight, Phone, Clock, MapPin } from "lucide-react";

type MenuCategory =
  | "sushi"
  | "hosomaki"
  | "california"
  | "signature"
  | "entree"
  | "brochettes"
  | "mixbox"
  | "wok"
  | "streetfood"
  | "boisson";

export default function NewPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("sushi");
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
    <div className="bg-black text-white min-h-screen font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;600;700&display=swap");
      `}</style>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 " : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <h1
            className="text-2xl font-bold text-orange-500"
            style={{
              fontFamily: "Cinzel, serif",
              letterSpacing: "0.05em",
              fontWeight: "600",
            }}
          >
            HIKARI SUSHI
          </h1>
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
                className="uppercase tracking-wide hover:text-orange-500 transition"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                }}
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
                className="block uppercase hover:text-orange-500 transition"
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
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627462133149-167e7e9a91b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center brightness-50"
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
          <h1
            className="text-6xl md:text-8xl font-serif text-orange-500 mb-4"
            style={{
              fontFamily: "Cinzel, serif",
              fontWeight: "700",
              letterSpacing: "0.05em",
            }}
          >
            HIKARI SUSHI
          </h1>
          <p
            className="text-gray-400 text-xl md:text-2xl mb-10"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.9rem",
            }}
          >
            Authentic Japanese Cuisine with a Touch of Passion
          </p>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg inline-flex items-center gap-2"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}
          >
            Explore Menu <ChevronRight />
          </motion.a>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-black">
        <motion.h2
          className="text-center text-5xl font-serif text-orange-500 mb-12"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: "700",
            letterSpacing: "0.05em",
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          OUR MENU
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
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-gray-700 text-gray-400 hover:border-orange-500 hover:text-white"
              }`}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              {menuData[category].title}
            </button>
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image Container - Left Side */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-gray-800 aspect-square w-full max-w-700 h-125 mx-auto md:mx-0 md:sticky md:top-24"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src={menuData[activeCategory].image}
              alt={menuData[activeCategory].title}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3
                className="text-4xl font-serif text-white mb-3"
                style={{
                  fontFamily: "Cinzel, serif",
                  fontWeight: "600",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                {menuData[activeCategory].title}
              </h3>
            </div>
          </motion.div>

          {/* Menu Items - Right Side */}
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
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 30px -5px rgba(249, 115, 22, 0.3)",
                }}
                className="p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all relative z-10"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4
                      className="text-2xl font-light"
                      style={{
                        fontFamily: "Cinzel, serif",
                        fontWeight: "400",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.name}
                    </h4>
                    {item.description && (
                      <p
                        className="text-gray-400 text-sm mt-1"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "300",
                        }}
                      >
                        {item.description}
                      </p>
                    )}
                    {item.pieces && (
                      <p
                        className="text-gray-400 text-sm mt-1"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "300",
                        }}
                      >
                        {item.pieces} pieces
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <div
                      className="text-3xl text-orange-500"
                      style={{ fontFamily: "Cinzel, serif", fontWeight: "700" }}
                    >
                      {item.price}
                    </div>
                    <div
                      className="text-gray-400 text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      DA
                    </div>
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
        <h2
          className="text-5xl text-orange-500 mb-6"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: "700",
            letterSpacing: "0.15em",
          }}
        >
          OUR STORY
        </h2>
        <p
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "300",
            lineHeight: "1.8",
          }}
        >
          Hikari Sushi was born from a deep passion for authentic Japanese
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
        <h2
          className="text-5xl text-orange-500 mb-8"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: "700",
            letterSpacing: "0.15em",
          }}
        >
          CONTACT US
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800"
          >
            <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400",
              }}
            >
              21 avenue khemisti mall bellagra, Mostaganem, Algeria
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800"
          >
            <Clock className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400",
              }}
            >
              open all week <br /> 12h to 23h !
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800"
          >
            <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400",
              }}
            >
              +213 549 435 540
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-500">
        <p
          className="mb-2 text-orange-500 text-xl font-serif"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: "600",
            letterSpacing: "0.15em",
          }}
        >
          HIKARI SUSHI
        </p>
        <p
          className="text-sm"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "300" }}
        >
          © 2025 Hikari Sushi — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

const menuData: Record<
  MenuCategory,
  {
    title: string;
    image: string;
    items: Array<{
      name: string;
      pieces: number | null;
      price: number;
      description?: string;
    }>;
  }
> = {
  sushi: {
    title: "Sushi",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Sushi Daurade", pieces: 2, price: 500 },
      { name: "Nigiri Saumon", pieces: 2, price: 600 },
      { name: "Nigiri Thon", pieces: 2, price: 500 },
      { name: "Nigiri Crevette", pieces: 2, price: 500 },
    ],
  },
  hosomaki: {
    title: "Hosomaki",
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Maki Saumon", pieces: 6, price: 1000 },
      { name: "Maki Thon", pieces: 6, price: 1000 },
      { name: "Maki Avocat", pieces: 6, price: 800 },
    ],
  },
  california: {
    title: "California",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Spicy Crab",
        pieces: 8,
        price: 1600,
        description: "Surimi Avocat Fromage",
      },
      { 
        name: "Tiger Roll",
        pieces: 8,
        price: 1600,
        description: "Avocat Crevette Fromage Le Th",
      },
      {
        name: "Thon Roll",
        pieces: 8,
        price: 1700,
        description: "Avocat Mayonnaise Thon",
      },
      {
        name: "Chicken Roll",
        pieces: 8,
        price: 1200,
        description: "Poulet Avocat Fromage",
      },
      {
        name: "Crunchy Futomaki",
        pieces: 5,
        price: 1300,
        description: "Avocat Fromage Surimi Crevette",
      },
      {
        name: "Crispy Roll",
        pieces: 8,
        price: 1800,
        description: "Crevet Avocat Fromage Sumo",
      },
      {
        name: "Fresh Salmon",
        pieces: 8,
        price: 1600,
        description: "Avocat Fromage Sumo",
      },
    ],
  },
  signature: {
    title: "Signature",
    image:
      "https://lady-sushi.fr/app/uploads/2021/10/SAUMON-AVOCAT-FROMAGE.png",
    items: [
      { name: "Saumon Avocat Fromage", pieces: 8, price: 2000 },
      { name: "Saumon Fromage", pieces: 8, price: 2000 },
      {
        name: "Hikaru Sushi",
        pieces: 8,
        price: 2500,
        description: "Saumon Avocat Concombre Œuf de Poisson",
      },
      { name: "Cheeseburger Japanese", pieces: 1, price: 2600 },
      {
        name: "Dragon Roll",
        pieces: 8,
        price: 2700,
        description: "Fromage Crevette Avocat",
      },
      {
        name: "Maki Printemp",
        pieces: 8,
        price: 2200,
        description: "Fromage Crevette Avocat Frais de Riz",
      },
    ],
  },
  entree: {
    title: "Entrée",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Salade Thaï", pieces: 1, price: 1200 },
      { name: "Salade de Chou", pieces: 1, price: 600 },
      { name: "Crevette Dynamite", pieces: 1, price: 1300 },
      { name: "Crevette Tempura", pieces: 4, price: 1300 },
      { name: "Nems Poulet", pieces: 3, price: 600 },
      { name: "Nems Crevette", pieces: 3, price: 700 },
      { name: "Miso Soup", pieces: null, price: 1200 },
    ],
  },
  brochettes: {
    title: "Brochettes",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Brochettes Yakitori Boeuf", pieces: 3, price: 750 },
      { name: "Brochettes Yakitori Fromage", pieces: 3, price: 1000 },
      { name: "Brochettes Poulet", pieces: 3, price: 600 },
      { name: "Brochettes Saumon", pieces: 3, price: 1100 },
    ],
  },
  mixbox: {
    title: "Mix Box",
    image:
      "https://images.unsplash.com/photo-1563612116621-9c56e0f3a35e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Combo B1",
        pieces: 9,
        price: 2000,
        description: "4 California 3 Maki 2 Nigiri",
      },
      {
        name: "Combo B2",
        pieces: 14,
        price: 2600,
        description: "4 California 3 Maki 5 Futomaki 2 Nigiri",
      },
      {
        name: "Combo D1",
        pieces: 28,
        price: 5000,
        description: "8 California 6 Maki 10 Crunchy 4 Nigiri",
      },
      {
        name: "Familiale",
        pieces: 52,
        price: 9500,
        description:
          "8 California 8 Crispy 12 Maki 8 Nigiri 10 Futomaki 8 Tiger Rolls",
      },
    ],
  },
  wok: {
    title: "Les Wok",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Légumes", pieces: null, price: 700 },
      { name: "Poulet", pieces: null, price: 1200 },
      { name: "Boeuf Légumes", pieces: null, price: 1400 },
      { name: "Crevettes Légumes", pieces: null, price: 1600 },
    ],
  },
  streetfood: {
    title: "Street Food",
    image:
      "https://images.unsplash.com/photo-1563245372-f5d0f4e18b1c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Poulet Coréen", pieces: 1, price: 1800 },
      { name: "Chirashi Saumon Avocat", pieces: 1, price: 2500 },
      { name: "Street Boeuf Japanese", pieces: 1, price: 2000 },
      { name: "Chicken Katsu", pieces: 1, price: 2000 },
      { name: "Kiri Chicken Katsu", pieces: 1, price: 2200 },
      { name: "Poke Saumon", pieces: 1, price: 2300 },
    ],
  },
  boisson: {
    title: "Boisson",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Eau Gazeuse Citronnée", pieces: null, price: 250 },
      { name: "Mojito Classic", pieces: null, price: 500 },
      { name: "Jus de Saison", pieces: null, price: 600 },
      { name: "Canette", pieces: null, price: 200 },
      { name: "Soda Fruit", pieces: null, price: 500 },
      { name: "Mojito Fruit", pieces: null, price: 600 },
    ],
  },
};
