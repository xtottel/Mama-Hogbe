"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function StatsSection() {
  const stats = [
    { value: "0M+", label: "Transactions processed" },
    { value: "1+", label: "African countries supported" },
    { value: "0K+", label: "Businesses empowered" },
    { value: "99.9%", label: "System uptime" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#f3ecf9] to-[#f9f6f2]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-[#4d3b7d] mb-2">
                {stat.value}
              </p>
              <p className="text-base md:text-lg text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
