import Image from "next/image";
import { Medal } from "lucide-react";
import { Container } from "@/layout/Container";

export default function RecentWinners() {
  const winners = [
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
];


  return (
    <section className="py-13 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            Meet the 2024 Queens
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These inspiring young women stood out in talent, tradition, and
            impact. Here are the top 3 titleholders of Mama Hogbe 2024.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {winners.map((winner) => (
            <div
              key={winner.id}
              className={`group relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-xl ${winner.hoverColor}`}
            >
              <div className="aspect-[9/10] relative">
                <Image
                  src={winner.image}
                  alt={winner.name}
                  fill
                  className="object-cover"
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
                  {/* {winner.age}  */}
                  • {winner.region}
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
      </Container>
    </section>
  );
}
