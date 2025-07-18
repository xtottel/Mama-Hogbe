"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
//import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden py-13 bg-gradient-to-br from-[#fff8f1] via-[#fef4e6] to-[#fffaf5] text-[#3f1e00]">
      {/* Optional Traditional Background Pattern */}
      <div className="absolute inset-0 bg-[url('/gallery/2024/cover.jpg')] opacity-5 z-0 pointer-events-none" />

      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />

      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-6"
          >
            Mama Hogbe Press & Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#6b3600]/80 mb-6 max-w-2xl mx-auto"
          >
            Stay updated with the latest from the cultural frontlines —
            announcements, pageant highlights, interviews, and more.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
