
import React from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90" : "bg-transparent"
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
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
