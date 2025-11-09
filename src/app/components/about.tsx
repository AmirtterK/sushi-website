import React from "react";
import { motion, easeOut } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
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
  );
}