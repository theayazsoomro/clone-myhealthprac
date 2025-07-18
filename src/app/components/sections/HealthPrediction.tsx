'use client';

import { motion } from 'framer-motion';

const sections = [
  {
    id: 1,
    title: "Personalized Health Insights",
    description: "Your health journey starts with data that matters.",
    bg: "bg-[#1f2937]", // dark gray
    color: "text-white",
  },
  {
    id: 2,
    title: "Real-Time Monitoring",
    description: "Stay updated with your body's vital levels.",
    bg: "bg-[#1f2937]", // amber
    color: "text-white",
  },
  {
    id: 3,
    title: "Actionable Recommendations",
    description: "Take control with insights tailored to your lifestyle.",
    bg: "bg-[#1f2937]", // green
    color: "text-white",
  },
];

export default function HealthPrediction() {
  return (
    <div className="relative h-11/12 w-full">
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`h-screen sticky top-0 flex items-center justify-center ${section.bg} ${section.color}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-center px-8"
          >
            <h1 className="text-5xl font-bold mb-6">{section.title}</h1>
            <p className="text-lg max-w-2xl mx-auto">{section.description}</p>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
