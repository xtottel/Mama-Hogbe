"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function CultureSection() {
  const culturePoints = [
    {
      title: "Collaborative Spirit",
      description: "We believe in working together across teams and borders.",
      emoji: "👥"
    },
    {
      title: "Continuous Learning",
      description: "Every challenge is an opportunity to grow.",
      emoji: "📚"
    },
    {
      title: "Customer Obsession",
      description: "We start with customer needs and work backward.",
      emoji: "❤️"
    },
    {
      title: "Bold Innovation",
      description: "We're not afraid to challenge the status quo.",
      emoji: "💡"
    }
  ];

  return (
    <section className="py-16 bg-[#f9f7f5]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#4d3b7d] mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-gray-600">
              The values that unite our diverse team across Africa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culturePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-xl border border-[#e0c9a4] hover:border-[#4d3b7d] transition-all"
            >
              <div className="text-4xl mb-4 text-center">{point.emoji}</div>
              <h3 className="text-lg font-semibold text-[#4d3b7d] mb-2 text-center">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
