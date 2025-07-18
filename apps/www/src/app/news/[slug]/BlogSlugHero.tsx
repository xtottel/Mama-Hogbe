"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiClock } from "react-icons/fi";
import { Container } from "@/layout/Container";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BlogSlugHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative overflow-hidden py-13 bg-[#fff8f1] text-[#6b3600]">
      {/* Ornamental Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />

      {/* Optional: Traditional Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/gallery/2024/cover.jpg')] opacity-5 z-0 pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-amber-100 text-amber-700 text-xs px-4 py-1 rounded-full font-semibold uppercase tracking-wider mb-6"
          >
            {post.category}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#3f1e00]"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#6b3600]/80 max-w-3xl mx-auto mb-6"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#6b3600]/70 font-medium">
            <span className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-amber-600" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-amber-600" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
