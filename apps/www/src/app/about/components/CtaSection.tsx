"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function CtaSection() {
  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Payment Experience?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Xtopay to simplify payments and grow across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium bg-purple-700 text-white hover:bg-purple-800 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/solutions"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium bg-white text-purple-700 border border-purple-200 hover:border-purple-300 transition-colors"
              >
                Explore Solutions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}