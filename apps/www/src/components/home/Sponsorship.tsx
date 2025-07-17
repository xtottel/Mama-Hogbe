"use client";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Sponsorship() {
  const organizers = [
    { logo: "/sponsors/7Networks.jpg", name: "Channel 7 Networks" },
    { logo: "/sponsors/arakan.jpg", name: "Arakan" },
    { logo: "/sponsors/ants.jpg", name: "ANTS Concept" },
    { logo: "/sponsors/twin.jpg", name: "Clickers" },
    // { logo: "/sponsors/anlo.png", name: "Volta Sports Association" },
    // { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
  ];

  const mediaPartners = [
    { logo: "/sponsors/exaweb.png", name: "Channel 7 Networks" },
    { logo: "/sponsors/xcitetv.png", name: "Xcite TV" },
    { logo: "/sponsors/ketavibes.png", name: "Keta Vibes" },
    { logo: "/sponsors/twin.jpg", name: "Clickers" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
  ];

  const sponsors = [
    { logo: "/sponsors/xtopay.png", name: "Volta Education Trust" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Health Services" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Agriculture Network" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
    { logo: "/sponsors/hogbe25.png", name: "Volta Sports Association" },
  ];

  const CrawlingLogos = ({ items }: { items: { logo: string; name: string }[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();
    const duplicatedItems = [...items, ...items]; // Duplicate for seamless looping

    useEffect(() => {
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const duration = items.length * 3; // Adjust speed here

      controls.start({
        x: [-containerWidth / 2, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        },
      });
    }, [controls, items.length]);

    return (
      <div className="relative overflow-hidden py-4">
        <motion.div
          ref={containerRef}
          animate={controls}
          className="flex gap-6 w-max"
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={`${index}-${item.name}`}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-[#d97706]/10 rounded-xl p-6 flex items-center justify-center aspect-[4/3] w-[200px] hover:border-[#fcd116] transition-all duration-300 shadow-sm"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={140}
                height={80}
                className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300 brightness-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  const Section = ({
    title,
    highlight,
    items,
  }: {
    title: string;
    highlight: string;
    items: { logo: string; name: string }[];
  }) => (
    <div className="mb-7">
      <div className="text-center mb-7">
        <h2 className="text-3xl md:text-5xl font-bold text-[#7c3700] mb-4">
          {title}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b95d00] to-[#fcd116] font-extrabold">
            {highlight}
          </span>
        </h2>
      </div>
      <CrawlingLogos items={items} />
    </div>
  );

  return (
    <section className="py-13 bg-gradient-to-b from-amber-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section title="Mama Hogbe 2025" highlight="Organizers" items={organizers} />
        <Section title="Our Proud" highlight="Sponsors" items={sponsors} />
        <Section title="Official" highlight="Media Partners" items={mediaPartners} />
      </div>
    </section>
  );
}