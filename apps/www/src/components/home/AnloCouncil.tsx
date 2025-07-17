import Image from "next/image";
import { Container } from "@/layout/Container";
import { Crown } from "lucide-react";

export default function AnloCouncil() {
  const chiefs = [
    {
      name: "Togbe Sri III",
      title: "Awoamefia of Anlo State",
      image: "/chiefs/sri.jpg",
      bio: "Spiritual head of Anlo State and symbol of unity among the Ewe people. He leads with wisdom, dignity, and ancestral guidance.",
      hoverColor: "hover:border-purple-500",
    },
    {
      name: "Togbi Agbesi III",
      title: "Awadada (Warlord) of Anlo State",
      image: "/chiefs/warlord.jpg",
      bio: "Principal war captain of the kingdom, responsible for security, defense, and upholding the military and warrior traditions of Anlo.",
      hoverColor: "hover:border-blue-500",
    },
    {
      name: "Mamaga Abui Buiekpor II",
      title: "Queen of Anlo Kingdom",
      image: "/chiefs/mama.jpeg",
      bio: "A symbol of nurturing leadership and women’s empowerment, inspiring unity and development across the region.",
      hoverColor: "hover:border-pink-500",
    },
  ];

  return (
    <section className="py-13 bg-gradient-to-b from-gray-100 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            Anlo Traditional Council
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guardians of heritage and culture guiding the Mama Hogbe legacy with
            wisdom and pride.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chiefs.map((chief, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent transition-all hover:shadow-xl ${chief.hoverColor}`}
            >
              <div className="aspect-[9/10] relative">
                <Image
                  src={chief.image}
                  alt={chief.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* <span className="inline-block bg-white text-black text-xs px-3 py-1 rounded-full font-semibold mb-2 shadow">
                  {chief.title}
                </span> */}
                <span className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-xs px-3 py-1 rounded-full font-semibold mb-2 shadow-md">
                  {chief.title}
                </span>

                <h3 className="text-xl font-bold text-white mb-1">
                  {chief.name}
                </h3>
                <p className="text-gray-200 text-sm">{chief.bio}</p>
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <Crown className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
