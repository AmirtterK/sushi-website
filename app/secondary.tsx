"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      category: "Nigiri",
      items: [
        {
          name: "Salmon Nigiri",
          price: "$6.50",
          desc: "Fresh Norwegian salmon",
        },
        { name: "Tuna Nigiri", price: "$7.50", desc: "Premium bluefin tuna" },
        { name: "Eel Nigiri", price: "$7.00", desc: "Grilled freshwater eel" },
        {
          name: "Yellowtail Nigiri",
          price: "$7.50",
          desc: "Japanese amberjack",
        },
      ],
    },
    {
      category: "Rolls",
      items: [
        {
          name: "California Roll",
          price: "$12.00",
          desc: "Crab, avocado, cucumber",
        },
        {
          name: "Spicy Tuna Roll",
          price: "$14.00",
          desc: "Tuna, spicy mayo, scallions",
        },
        {
          name: "Dragon Roll",
          price: "$16.00",
          desc: "Eel, cucumber, avocado",
        },
        {
          name: "Rainbow Roll",
          price: "$17.00",
          desc: "Assorted fish, crab, avocado",
        },
      ],
    },
    {
      category: "Sashimi",
      items: [
        {
          name: "Salmon Sashimi",
          price: "$18.00",
          desc: "8 pieces of fresh salmon",
        },
        {
          name: "Tuna Sashimi",
          price: "$20.00",
          desc: "8 pieces of premium tuna",
        },
        {
          name: "Mixed Sashimi",
          price: "$32.00",
          desc: "Chef's selection, 15 pieces",
        },
      ],
    },
  ];

  const scrollToSection = (sectionId: any) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              SUSHI 寿司
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "menu", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-red-500 transition-colors ${
                    activeSection === item ? "text-red-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {["home", "menu", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-red-500 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Authentic Japanese
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Sushi Experience
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Fresh ingredients, traditional techniques, unforgettable flavors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View Menu <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-20 px-4 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Menu
            </h2>
            <p className="text-gray-400 text-lg">
              Crafted with passion, served with pride
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((category, idx) => (
              <div
                key={idx}
                className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800 hover:border-red-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-6 text-red-500">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="border-b border-gray-800 pb-4 last:border-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <span className="text-red-500 font-bold">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                For over 20 years, we've been serving authentic Japanese sushi
                crafted by master chefs trained in Tokyo. Every dish is a
                celebration of traditional techniques and the freshest
                ingredients.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our commitment to quality and authenticity has made us a beloved
                destination for sushi enthusiasts seeking an genuine Japanese
                dining experience.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <Star className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-gray-400">Happy Guests</div>
                </div>
              </div>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl flex items-center justify-center border border-gray-800">
              <div className="text-center">
                <div className="text-9xl mb-4">🍣</div>
                <p className="text-gray-400">Fresh Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Visit Us
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            We're open and ready to serve you
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <MapPin className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                123 Sushi Street
                <br />
                Tokyo District, NY 10001
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Clock className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-gray-400">
                Mon-Fri: 11am - 10pm
                <br />
                Sat-Sun: 12pm - 11pm
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Phone className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-gray-400">
                (555) 123-4567
                <br />
                info@sushi.com
              </p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
            Make a Reservation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-2">© 2024 Sushi Restaurant. All rights reserved.</p>
          <p className="text-sm">Crafted with ❤️ and 🍣</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
