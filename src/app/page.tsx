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
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;600;700&display=swap");

        html {
          scroll-behavior: smooth;
        }
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
            className="md:hidden transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="transition-transform duration-300">
              {isMenuOpen ? <X className="rotate-90" /> : <Menu />}
            </div>
          </button>
          <div className="hidden md:flex space-x-8">
            {["home", "menu", "about", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="uppercase tracking-wide hover:text-orange-500 transition"
                style={{
                  fontFamily: "Cinzel, sans-serif",
                  fontWeight: "500",
                  letterSpacing: "0.05em",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div
          className={`md:hidden bg-black/95 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-3 text-center">
            {["home", "menu", "about", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="block uppercase hover:text-orange-500 transition"
                style={{
                  fontFamily: "Cinzel, serif",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
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

        <div className="max-w-6xl mx-auto">
          {/* Menu Items - Instagram Story Style */}
          <motion.div
            className="space-y-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {menuData[activeCategory].items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-8 flex-wrap md:flex-nowrap justify-center"
              >
                {/* Left Side - Text (always left) */}
                <div
                  className={`${
                    index % 2 === 0 ? "order-1" : "order-1 md:order-3"
                  } text-left min-w-[280px] max-w-md flex-shrink-0`}
                >
                  <motion.h4
                    className="text-3xl md:text-4xl mb-2 text-white uppercase tracking-widest font-bold"
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontWeight: "700",
                      letterSpacing: "0.15em",
                    }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.h4>

                  {item.description && (
                    <p
                      className="text-gray-300 text-xs mb-3 uppercase tracking-widest"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "400",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {item.description}
                    </p>
                  )}

                  <div className="flex items-center gap-4 mt-3">
                    {item.pieces && (
                      <>
                        <span
                          className="text-gray-400 text-sm uppercase tracking-wider"
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: "500",
                          }}
                        >
                          {item.pieces} pieces
                        </span>
                        <div className="w-px h-6 bg-white/20" />
                      </>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-4xl md:text-5xl text-orange-500 font-bold"
                        style={{ fontFamily: "Cinzel, serif" }}
                      >
                        {item.price}
                      </span>
                      <span
                        className="text-orange-400 text-lg font-semibold"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        DA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Line */}
                <div
                  className={`${
                    index % 2 === 0 ? "order-2" : "order-2"
                  } hidden md:block w-64 lg:w-80 flex-shrink-0`}
                >
                  <div className="w-full border-t-2 border-dashed border-white/30" />
                </div>

                {/* Right Side - Image (always right) */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`${
                    index % 2 === 0 ? "order-3" : "order-1 md:order-1"
                  } group relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0`}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 group-hover:animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-3 rounded-full overflow-hidden bg-white">
                    <img
                      src={item.image || menuData[activeCategory].image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
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
              open all week <br /> 12h to 23h
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
      image?: string;
    }>;
  }
> = {
  sushi: {
    title: "Sushi",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Sushi Daurade",
        pieces: 2,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nigiri Saumon",
        pieces: 2,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nigiri Thon",
        pieces: 2,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nigiri Crevette",
        pieces: 2,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  hosomaki: {
    title: "Hosomaki",
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Maki Saumon",
        pieces: 6,
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maki Thon",
        pieces: 6,
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maki Avocat",
        pieces: 6,
        price: 800,
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
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
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Tiger Roll",
        pieces: 8,
        price: 1600,
        description: "Avocat Crevette Fromage Le Th",
        image:
          "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Thon Roll",
        pieces: 8,
        price: 1700,
        description: "Avocat Mayonnaise Thon",
        image:
          "https://images.unsplash.com/photo-1617196035096-b18e7d7d0e5a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Chicken Roll",
        pieces: 8,
        price: 1200,
        description: "Poulet Avocat Fromage",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crunchy Futomaki",
        pieces: 5,
        price: 1300,
        description: "Avocat Fromage Surimi Crevette",
        image:
          "https://images.unsplash.com/photo-1615361200870-631376a652e2?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crispy Roll",
        pieces: 8,
        price: 1800,
        description: "Crevet Avocat Fromage Sumo",
        image:
          "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fresh Salmon",
        pieces: 8,
        price: 1600,
        description: "Avocat Fromage Sumo",
        image:
          "https://images.unsplash.com/photo-1617196035183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  signature: {
    title: "Signature",
    image:
      "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Saumon Avocat Fromage",
        pieces: 8,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Saumon Fromage",
        pieces: 8,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1617196035183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hikaru Sushi",
        pieces: 8,
        price: 2500,
        description: "Saumon Avocat Concombre Œuf de Poisson",
        image:
          "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cheeseburger Japanese",
        pieces: 1,
        price: 2600,
        image:
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dragon Roll",
        pieces: 8,
        price: 2700,
        description: "Fromage Crevette Avocat",
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maki Printemp",
        pieces: 8,
        price: 2200,
        description: "Fromage Crevette Avocat Frais de Riz",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  entree: {
    title: "Entrée",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Salade Thaï",
        pieces: 1,
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Salade de Chou",
        pieces: 1,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crevette Dynamite",
        pieces: 1,
        price: 1300,
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crevette Tempura",
        pieces: 4,
        price: 1300,
        image:
          "https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nems Poulet",
        pieces: 3,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1561158721-23e8b7297a8d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Nems Crevette",
        pieces: 3,
        price: 700,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Miso Soup",
        pieces: null,
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1587277838115-d8f8c4d7e4f7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  brochettes: {
    title: "Brochettes",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Brochettes Yakitori Boeuf",
        pieces: 3,
        price: 750,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Brochettes Yakitori Fromage",
        pieces: 3,
        price: 1000,
        image:
          "https://images.unsplash.com/photo-1630409346144-a0c60662e67b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Brochettes Poulet",
        pieces: 3,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Brochettes Saumon",
        pieces: 3,
        price: 1100,
        image:
          "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
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
        image:
          "https://images.unsplash.com/photo-1563612116621-9c56e0f3a35e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Combo B2",
        pieces: 14,
        price: 2600,
        description: "4 California 3 Maki 5 Futomaki 2 Nigiri",
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Combo D1",
        pieces: 28,
        price: 5000,
        description: "8 California 6 Maki 10 Crunchy 4 Nigiri",
        image:
          "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Familiale",
        pieces: 52,
        price: 9500,
        description:
          "8 California 8 Crispy 12 Maki 8 Nigiri 10 Futomaki 8 Tiger Rolls",
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  wok: {
    title: "Les Wok",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Légumes",
        pieces: null,
        price: 700,
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Poulet",
        pieces: null,
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Boeuf Légumes",
        pieces: null,
        price: 1400,
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Crevettes Légumes",
        pieces: null,
        price: 1600,
        image:
          "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  streetfood: {
    title: "Street Food",
    image:
      "https://images.unsplash.com/photo-1563245372-f5d0f4e18b1c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Poulet Coréen",
        pieces: 1,
        price: 1800,
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Chirashi Saumon Avocat",
        pieces: 1,
        price: 2500,
        image:
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Street Boeuf Japanese",
        pieces: 1,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Chicken Katsu",
        pieces: 1,
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Kiri Chicken Katsu",
        pieces: 1,
        price: 2200,
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Poke Saumon",
        pieces: 1,
        price: 2300,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  boisson: {
    title: "Boisson",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    items: [
      {
        name: "Eau Gazeuse Citronnée",
        pieces: null,
        price: 250,
        image:
          "https://plus.unsplash.com/premium_photo-1721780793069-5576631f1b46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mojito Classic",
        pieces: null,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Jus de Saison",
        pieces: null,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Canette",
        pieces: null,
        price: 200,
        image:
          "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Soda Fruit",
        pieces: null,
        price: 500,
        image:
          "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Mojito Fruit",
        pieces: null,
        price: 600,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
};
