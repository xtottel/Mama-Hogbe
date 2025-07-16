"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function PartnersSection() {
  const partners = [
    { name: "Afreximbank", logo: "/logos/afreximbank.svg" },
    { name: "Flutterwave", logo: "/logos/flutterwave.svg" },
    { name: "Ecobank", logo: "/logos/ecobank.svg" },
    { name: "MTN", logo: "/logos/mtn.svg" },
    { name: "Visa", logo: "/payments/visa.svg" },
  ];

  // const awards = [
  //   { title: "Best Fintech 2023", issuer: "African Banker Awards" },
  //   { title: "Innovation Award", issuer: "Africa Tech Summit" },
  //   { title: "Top Startup", issuer: "Forbes Africa" },
  // ];

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
              Trusted By Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Partnerships and recognition that drive our mission forward.
            </p>
          </motion.div>
        </div>

        {/* Strategic Partners */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center text-[#4d3b7d] mb-8">
            Strategic Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="h-16 w-36 flex items-center justify-center bg-white border border-[#e0c9a4] rounded-lg p-2 grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        {/* <div>
          <h3 className="text-xl font-semibold text-center text-[#4d3b7d] mb-8">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-[#e0c9a4] hover:border-[#4d3b7d] transition-all"
              >
                <div className="w-12 h-12 bg-[#f0e8db] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#4d3b7d]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#4d3b7d] mb-2">{award.title}</h4>
                <p className="text-gray-600">{award.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </Container>
    </section>
  );
}
