"use client";

import { motion } from "framer-motion";

import ExecutiveTeam from "@/components/team/ExecutiveTeam";

const executives = [
  {
    name: "Collins Joe",
    title: "Co-Founder & CEO",
    bio: "Frontend engineer and product lead focused on building modern, user-friendly fintech experiences across Africa. Drives the vision behind Xtopay and Sendexa.",
    image: "/team/joe.jpeg",
  },
  {
    name: "Ethel Akorfa Agama",
    title: "Executive Director, Gender Equality & Social Impact",
    bio: "Leads social impact and gender-focused initiatives, ensuring Xtopay builds inclusive, equitable products aligned with the UN SDGs.",
    image: "/team/akorfa.jpeg",
  },
  {
    name: "Kane Vidzro",
    title: "Co-Founder & Backend Engineer",
    bio: "Backend engineer focused on building secure, scalable infrastructure for Xtopay’s core systems and APIs.",
    image: "/team/Profile.svg",
  },
];

export function LeadershipSection() {
  return (
    <section className="py-15 bg-white">
      <ExecutiveTeam executives={executives} />

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <motion.a
            href="/team"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 bg-purple-700 text-white hover:bg-purple-800"
          >
            View Full Team
          </motion.a>
        </div>
      </div>
    </section>
  );
}
