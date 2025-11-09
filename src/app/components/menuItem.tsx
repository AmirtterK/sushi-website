import React from "react";
import { easeOut, motion } from "framer-motion";
import { MenuItem as MenuItemType } from "../types/MenuItem";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  categoryImage: string;
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: easeOut },
  },
};

export default function MenuItem({
  item,
  index,
  categoryImage,
}: MenuItemProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex items-center gap-8 flex-wrap md:flex-nowrap justify-center"
    >
      {/* Left Side - Text */}
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

      {/* Right Side - Image */}
      <motion.div
        // whileHover={{ scale: 1.05, rotate: 2 }}
        className={`${
          index % 2 === 0 ? "order-3" : "order-1 md:order-1"
        } group relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0`}
      >
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 group-hover:animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-3 rounded-full overflow-hidden bg-white">
          <img
            src={item.image || categoryImage}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
