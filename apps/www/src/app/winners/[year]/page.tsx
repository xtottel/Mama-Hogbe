'use client';

import Image from "next/image";
import { Medal, Crown, Trophy, ArrowLeft } from "lucide-react";
import { Container } from "@/layout/Container";
import Link from "next/link";
import { useParams } from "next/navigation";

// Types for winner and year data
type Winner = {
  id: number;
  name: string;
  title: string;
  age: number;
  region: string;
  image: string;
  bio: string;
  hoverColor: string;
};

type YearInfo = {
  winners: Winner[];
  description: string;
  highlights: string[];
};

type YearData = {
  [year: string]: YearInfo;
};

// Static mock data
const yearData: YearData = {
  "2024": {
    winners: [
      {
        id: 1,
        name: "Andrea Sandra Delali Gakpe",
        title: "Winner",
        age: 23,
        region: "Anloga-Deti",
        image: "/winners/24/winner.jpg",
        bio: "A dedicated teacher and passionate poet inspiring change through education and creativity.",
        hoverColor: "hover:border-amber-500",
      },
      {
        id: 2,
        name: "Sedem Rita Amematror",
        title: "1st Runner-Up",
        age: 22,
        region: "Horvi-Blekusu",
        image: "/winners/24/1st.jpg",
        bio: "A fashion designer committed to blending tradition with modern style to celebrate Ewe heritage.",
        hoverColor: "hover:border-indigo-500",
      },
      {
    id: 3,
    name: "Stella Sewonumafe Sodzi",
    title: "2nd Runner-Up",
    age: 25,
    region: "Kome-Atito",
    image: "/winners/24/2nd.jpg",
    bio: "A skilled caterer using food to preserve cultural identity and empower local women.",
    hoverColor: "hover:border-rose-500",
  },
    ],

    
    description: "These inspiring young women stood out in talent, tradition, and impact. Here are the top 3 titleholders of Mama Hogbe 2024.",
    highlights: [
      "Record-breaking audience of 5,000 attendees",
      "Featured on Ghana National Television",
      "Raised $25,000 for girls' education initiatives"
    ]
  },
  // You can add more years here
};

export default function WinnerYearPage() {
  const params = useParams<{ year: string }>();
  const year = params.year;

  const yearInfo = yearData[year] || {
    winners: [],
    description: `Details for Mama Hogbe ${year} coming soon.`,
    highlights: []
  };

  return (
    <section className="py-15 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="mb-8">
          <Link 
            href="/winners" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Winners
          </Link>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
            <Crown className="h-5 w-5" />
            <span className="font-medium">{year} Edition</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            Meet the {year} Queens
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {yearInfo.description}
          </p>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {yearInfo.winners.map((winner) => (
            <div
              key={winner.id}
              className={`group relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-xl ${winner.hoverColor}`}
            >
              <div className="aspect-[9/10] relative">
                <Image
                  src={winner.image}
                  alt={`${winner.name}, ${winner.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-white text-black text-xs px-3 py-1 rounded-full font-semibold mb-2 shadow">
                  {winner.title}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {winner.name}
                </h3>
                <p className="text-amber-200 mb-2">
                  {winner.age && `${winner.age} • `}{winner.region}
                </p>
                <p className="text-gray-200 text-sm">{winner.bio}</p>
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <Medal className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        {yearInfo.highlights.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-amber-500" />
              {year} Pageant Highlights
            </h3>
            <ul className="space-y-4">
              {yearInfo.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
