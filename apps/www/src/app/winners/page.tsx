import Image from "next/image";
import Link from "next/link";
import { Crown,  ChevronRight } from "lucide-react";
import { Container } from "@/layout/Container";

export default function PastWinners() {
  const winnerYears = [
    {
      year: 2025,
      title: "Upcoming Coronation",
      winner: "To Be Crowned",
      image: "/hogbe25.png",
      tagline: "December 20, 2025 at Grand Arena",
      isUpcoming: true
    },
    {
      year: 2024,
      title: "Reigning Queen",
      winner: "Andrea Sandra Delali Gakpe",
      image: "/winners/24/winner.jpg",
      tagline: "Women's Education Advocate",
      isCurrent: true
    },
    {
      year: 2023,
      winner: "Adzo Ashimadi",
      image: "/winners/2023/winner.jpg",
      tagline: "Cultural Exchange Pioneer"
    },
    {
      year: 2022,
      winner: "Abena Agbeti",
      image: "/winners/2022/winner.jpg",
      tagline: "Founding Mentorship Program"
    },

    {
      year: 2019,
      winner: "Eyram",
      image: "/winners/2019/winner.jpg",
      tagline: "Youth Empowerment Leader"
    },
    {
      year: 2018,
      winner: "Sedinam",
      image: "/winners/2018/winner.jpg",
      tagline: "First Mama Hogbe Queen"
    },
    {
      year: 2017,
      winner: "Akua Dzigbordi",
      image: "/winners/2017/winner.jpg",
      tagline: "Cultural Heritage Advocate"
    },
    {
      year: 2016,
      winner: "Emefa Melody",
      image: "/winners/2016/1st.jpg",
      tagline: "Community Development Visionary"
    },
    {
      year: 2015,
      winner: "Akosua Abena",
      image: "/winners/2015/winner.jpg",
      tagline: "Environmental Sustainability Champion"
    },
    {
      year: 2014,
      winner: "Adzo Akosua",
      image: "/winners/2014/winner.jpg",
      tagline: "Arts and Culture Ambassador"
    },
    {
      year: 2013,
      winner: "Ama Dede",
      image: "/winners/2013/winner.jpg",
      tagline: "Social Justice Advocate"
    },
    {
      year: 2012,
      winner: "Esi Adom",
      image: "/winners/2012/winner.jpg",
      tagline: "Cultural Heritage Advocate"
    },
    {
      year: 2011,
      winner: "Akua Dzigbordi",
      image: "/winners/2011/winner.jpg",
      tagline: "Community Development Visionary"
    }
  ];

  return (
    <section className="py-15 bg-gray-50">
      <Container>
      <div className="container  mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
            <Crown className="h-5 w-5" />
            <span className="font-medium">Our Royal Legacy</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Past Winners (2011 - Present)
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Celebrating the remarkable women who have carried the Mama Hogbe crown with grace and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {winnerYears.map((yearData) => (
            <Link 
              href={`/winners/${yearData.year}`} 
              key={yearData.year}
              className={`group relative block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${yearData.isUpcoming ? 'border-2 border-purple-300' : ''}`}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={yearData.image}
                  alt={`${yearData.year} Winner: ${yearData.winner}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Year Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${yearData.isCurrent ? 'bg-amber-500 text-white' : yearData.isUpcoming ? 'bg-purple-500 text-white' : 'bg-white text-gray-900'}`}>
                  {yearData.year}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {yearData.isUpcoming ? (
                  <>
                    <h3 className="text-xl font-bold mb-1">{yearData.title}</h3>
                    <p className="text-purple-200">{yearData.tagline}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-1">{yearData.winner}</h3>
                    <p className="text-gray-200">{yearData.tagline}</p>
                  </>
                )}
                
                <div className="mt-3 inline-flex items-center text-sm font-medium group-hover:underline">
                  View details
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Special ribbon for current queen */}
              {yearData.isCurrent && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-xs font-bold uppercase rotate-45 translate-x-8 translate-y-6 w-40 text-center">
                  Reigning Queen
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
      </Container>
      
    </section>
  );
}