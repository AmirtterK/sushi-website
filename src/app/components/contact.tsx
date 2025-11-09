import React from "react";
import { motion, easeOut } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

export default function Contact() {
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
      id="contact"
      className="py-20 px-4 text-center"
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
  );
}