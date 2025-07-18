"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/images/card-image.jpeg",
    value: "6.2%",
    label: "Omega-3 Index",
    unit: "EPA+DHA",
    desc: "Linked to brain health, mental wellbeing, and heart or hormone imbalances.",
  },
  {
    id: 2,
    image: "/images/card-image.jpeg",
    value: "948 μmol/L",
    label: "Glutathione",
    unit: "GSH",
    desc: "Protects cells from damage and helps your liver clear out toxins.",
  },
  {
    id: 3,
    image: "/images/card-image.jpeg",
    value: "550 pmol/L",
    label: "Vitamin B12",
    unit: "Serum Cobalamin",
    desc: "Supports red blood cells, energy, memory, and nerve health.",
  },
  {
    id: 4,
    image: "/images/card-image.jpeg",
    value: "550 pmol/L",
    label: "Vitamin B12",
    unit: "Serum Cobalamin",
    desc: "Supports red blood cells, energy, memory, and nerve health.",
  },
  {
    id: 5,
    image: "/images/card-image.jpeg",
    value: "550 pmol/L",
    label: "Vitamin B12",
    unit: "Serum Cobalamin",
    desc: "Supports red blood cells, energy, memory, and nerve health.",
  },
  {
    id: 6,
    image: "/images/card-image.jpeg",
    value: "550 pmol/L",
    label: "Vitamin B12",
    unit: "Serum Cobalamin",
    desc: "Supports red blood cells, energy, memory, and nerve health.",
  },
];

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-6 px-4 "
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[500px] h-[680px] rounded-2xl shrink-0 bg-cover bg-center relative shadow-lg"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            {/* Top Text */}
            <div className="absolute top-4 left-4 text-white">
              <p className="text-3xl font-bold">{card.value}</p>
              <p className="text-sm uppercase">{card.label}</p>
              <p className="text-xs">{card.unit}</p>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
              {card.desc}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
