"use client";
import Contact  from "./components/contact";
import React, { useState, useEffect } from "react";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MenuSection from "./components/menuSection";
import Navbar from "./components/navbar";
import { MenuCategory } from "./types/MenuCategory";


export default function App() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("sushi");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;600;700&display=swap");

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <MenuSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}