"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export const ExaFooter = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "The Pageant",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Mission & Values", href: "/mission" },
        { name: "Judging Criteria", href: "/judging" },
        { name: "Rules & Regulations", href: "/rules" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Contestants",
      items: [
        { name: "Current Contestants", href: "/contestants" },
        { name: "Past Winners", href: "/winners" },
        { name: "How to Apply", href: "/apply" },
        { name: "Preparation Tips", href: "/resources" },
        { name: "Scholarships", href: "/scholarships" },
      ],
    },
    {
      title: "Events",
      items: [
        { name: "2025 Competition", href: "/events/2025" },
        { name: "Schedule", href: "/schedule" },
        { name: "Tickets", href: "/tickets" },
        { name: "Sponsors", href: "/sponsors" },
        { name: "Volunteer", href: "/volunteer" },
      ],
    },
    {
      title: "Connect",
      items: [
        { name: "Press Center", href: "/press" },
        { name: "Media Inquiries", href: "/media" },
        { name: "Partnerships", href: "/partners" },
        { name: "Contact Us", href: "/contact" },
        { name: "Social Media", href: "/social" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: FaFacebook,
      href: "https://facebook.com/profile.php?id=61550782971546",
      label: "Facebook",
      className: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/sendexa",
      label: "Instagram",
      className: "hover:text-pink-500",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/sendexaHQ",
      label: "Twitter/X",
      className: "hover:text-blue-400",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@mamahogbebeautypageantfaceofan",
      label: "YouTube",
      className: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/hogbe25.png"
                  width={160}
                  height={40}
                  alt="Sendexa Logo"
                  className="h-15 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            <p className="text-sm text-gray-500">
              Mama Hogbe is a prestigious cultural pageantry platform dedicated
              to celebrating heritage, empowering women, and showcasing
              leadership through tradition and talent. Backed by the Anlo
              Traditional Council, we provide a dignified stage for young women
              to inspire, lead, and leave a lasting impact on their communities.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              {socialIcons.map(
                ({ icon: Icon, href, label, className }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2 rounded-md bg-gray-900 hover:bg-gray-800 transition-all border border-gray-800 ${className}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {links.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((link) => (
                      <motion.li key={link.name} whileHover={{ x: 2 }}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition font-medium"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-6"
        />

        {/* Final Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
            aria-label={`Copyright ${currentYear} Sendexa, Inc.`}
          >
            &copy; {currentYear}{" "}
            <span className="font-medium text-[#f8971d] transition-colors duration-300 underline-offset-2">
              Mama Hogbe Pageant.
            </span>
            . All rights reserved.
          </motion.p>

          {/* Built with Love by Xtottel Ltd */}

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 transition-all group"
          >
            <p className="transition-all duration-300">
              Built with <span className="text-red-500"> 💚</span> by{" "}
              <a
                href="https://xtottel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#f8971d] group-hover:text-yellow-500 transition-colors duration-300"
              >
                Xtottel Ltd
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
