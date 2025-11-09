'use client'
import { motion, easeOut } from "framer-motion";
import { menuData } from "./menuData";
import { MenuCategory } from "../types/MenuCategory";
import MenuItem from "./menuItem";

interface MenuSectionProps {
  activeCategory: MenuCategory;
  setActiveCategory: (category: MenuCategory) => void;
}

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

export default function MenuSection({ activeCategory, setActiveCategory }: MenuSectionProps) {
  return (
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
        <motion.div
          className="space-y-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {menuData[activeCategory].items.map((item : any, index : number) => (
            <MenuItem
              key={index}
              item={item}
              index={index}
              categoryImage={menuData[activeCategory].image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
