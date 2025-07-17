"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import {
  Crown,
  Award,
  CalendarDays,
  Sparkles,
  Gem,
  ScrollText,
  Mic2,
  Trophy,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);

  const slides = [
    {
      title: "Mama Hogbe 2025 Pageant",
      subtitle: "Celebrating Ewe Heritage & Female Excellence",
      description:
        "Join us for the most prestigious cultural pageant in West Africa, where beauty meets intellect and tradition blends with modernity.",
      image: "/images/carousel/Photo_1730669469327.jpg",
      stats: [
        {
          icon: <Crown className="h-5 w-5" />,
          text: "Grand Prize: Exclusive items and a cash award worth GHS 10,000",
        },
        {
          icon: <CalendarDays className="h-5 w-5" />,
          text: "December 15-20, 2025 | Ho, Volta Region",
        },
      ],
      ctaPrimary: "Meet the Contestants",
      ctaPrimaryLink: "/contestants",
      ctaSecondary: "Event Schedule",
      ctaSecondaryLink: "/schedule",
      overlay: "bg-purple-900/70",
    },
    {
      title: "Empowering Future Leaders",
      subtitle: "More Than a Crown",
      description:
        "Our platform develops confident young women through leadership training, cultural education, and community service initiatives.",
      image: "/images/carousel/Photo_1730669469327.jpg",
      stats: [
        {
          icon: <Award className="h-5 w-5" />,
          text: "100+ Alumni Making Impact Nationwide",
        },
        {
          icon: <ScrollText className="h-5 w-5" />,
          text: "Comprehensive 6-Month Leadership Program",
        },
      ],
      ctaPrimary: "Apply to Compete",
      ctaPrimaryLink: "/apply",
      ctaSecondary: "Our Mission",
      ctaSecondaryLink: "/about",
      overlay: "bg-blue-900/70",
    },
    {
      title: "Sponsorship Opportunities",
      subtitle: "Align With Excellence",
      description:
        "Partner with Ghana's most culturally significant pageant and reach discerning audiences across West Africa.",
      image: "/images/carousel/Photo_1730669469327.jpg",
      stats: [
        {
          icon: <Gem className="h-5 w-5" />,
          text: "Prime Brand Exposure to 500K+ Audience",
        },
        {
          icon: <Trophy className="h-5 w-5" />,
          text: "Official Partner Benefits Package",
        },
      ],
      ctaPrimary: "Become a Sponsor",
      ctaPrimaryLink: "/sponsors",
      ctaSecondary: "Media Kit",
      ctaSecondaryLink: "/press",
      overlay: "bg-amber-900/70",
    },
  ];

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        navigation={false} // Disable default navigation arrows
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[85vh] min-h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              <div className={`absolute inset-0 ${slide.overlay}`}></div>

              <div className="absolute inset-0 flex items-center">
                <div className="container px-6 mx-auto">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="max-w-2xl lg:max-w-3xl xl:ml-20"
                  >
                    <motion.div variants={itemVariants} className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-white/20 rounded-full backdrop-blur-sm">
                        {slide.subtitle}
                      </span>
                    </motion.div>

                    <motion.h1
                      variants={itemVariants}
                      className="text-4xl font-bold text-white mb-4 md:text-5xl lg:text-6xl xl:text-7xl"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      variants={itemVariants}
                      className="text-lg text-white/90 mb-8 md:text-xl md:max-w-lg"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      variants={containerVariants}
                      className="flex flex-col gap-4 mb-8 sm:flex-row sm:flex-wrap"
                    >
                      {slide.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
                        >
                          <span className="text-amber-300">{stat.icon}</span>
                          <span className="font-medium text-white">
                            {stat.text}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex flex-wrap gap-4"
                    >
                      <Link
                        href={slide.ctaPrimaryLink}
                        className="px-8 py-3 text-white bg-amber-600 hover:bg-amber-700 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                      >
                        {slide.ctaPrimary}
                        <Sparkles className="h-4 w-4" />
                      </Link>
                      <Link
                        href={slide.ctaSecondaryLink}
                        className="px-8 py-3 text-white bg-transparent hover:bg-white/10 rounded-lg font-medium transition-colors duration-300 border border-white flex items-center gap-2"
                      >
                        {slide.ctaSecondary}
                        <Mic2 className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows - now these will be the only ones */}
        <div className="absolute top-1/2 z-10 w-full -translate-y-1/2 transform px-4">
          <button
            className="absolute left-6 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 sm:flex"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            aria-label="Previous slide"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 sm:flex"
            onClick={() => swiperRef.current?.swiper.slideNext()}
            aria-label="Next slide"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </Swiper>

      <style jsx global>{`
        .hero-swiper {
          --swiper-pagination-bullet-size: 10px;
          --swiper-pagination-bullet-inactive-color: white;
          --swiper-pagination-bullet-inactive-opacity: 0.4;
          --swiper-pagination-color: theme(colors.amber.400);
        }

        .swiper-pagination-bullet-active {
          transform: scale(1.3);
        }

        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
