"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sponsorship() {
  const sponsors = [ 
   
    { logo: "/sponsors/xtopay.png", name: "Xtopay LLC" },
    { logo: "/sponsors/7Networks.jpg", name: "Channel 7 Networks" },
    { logo: "/sponsors/xcitetv.png", name: "Xcite TV" },
    { logo: "/sponsors/ketavibes.png", name: "Keta Vibes" },
    { logo: "/sponsors/ants.jpg", name: "ANTS Concerpt" },
    { logo: "/sponsors/arakan.jpg", name: "Arakan" },
    { logo: "/sponsors/twin.jpg", name: "Clickers" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Education Trust" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Health Services" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Agriculture Network" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#7c3700] mb-4">
            Mama Hogbe{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b95d00] to-[#fcd116] font-extrabold">
              Sponsors
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Proudly supported by institutions that believe in cultural heritage and women&apos;s empowerment
          </p>
        </motion.div>

        {/* Sponsor Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-[#d97706]/10 rounded-xl p-6 flex items-center justify-center aspect-[4/3] hover:border-[#fcd116] transition-all duration-300 shadow-sm group"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={140}
                height={80}
                className="object-contain max-h-full max-w-full grayscale group-hover:grayscale-0 transition-all duration-300 brightness-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
