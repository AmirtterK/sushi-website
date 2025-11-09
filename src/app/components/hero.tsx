import React from "react";
import { motion, easeOut } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
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
  );
}