import Image from "next/image";
import Link from "next/link";
import { Camera, Album, ChevronRight } from "lucide-react";
import { Container } from "@/layout/Container";

const galleryYears = [
  {
    year: 2025,
    title: "2025 Gallery",
    image: "/gallery/2025/cover.jpg",
    count: "Coming Soon",
    isUpcoming: true,
    description: "Photos from our upcoming pageant will be available after December 2025"
  },
  {
    year: 2024,
    title: "2024 Highlights",
    image: "/gallery/2024/cover.jpg",
    count: "20 Photos",
    description: "Relive the magic of Mama Hogbe 2024 through our official gallery"
  },
  {
    year: 2023,
    title: "2023 Memories",
    image: "/gallery/2023/cover.jpg",
    count: "20 Photos",
    description: "Celebrating cultural excellence and sisterhood"
  },
  {
    year: 2022,
    title: "2022 Inaugural",
    image: "/gallery/2022/cover.jpg",
    count: "20 Photos",
    description: "The beginning of our beautiful journey"
  },
  //STARTED SINCE 2011
  {
    year: 2019,
    title: "2019 Edition",
    image: "/gallery/2019/winner.jpg",
    count: "15 Photos",
    description: "A celebration of culture and beauty",
  }
  ,
  {
    year: 2018,
    title: "2018 Edition",
    image: "/gallery/2018/winner.jpg",
    count: "15 Photos",
    description: "A celebration of culture and beauty",
  }
];

export default function GalleryPage() {
  return (
    <Container>
      <section className="py-15 bg-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
            <Album className="h-5 w-5" />
            <span className="font-medium">Photo Archives</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Pageant Galleries
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse through memorable moments from each year of Mama Hogbe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryYears.map((gallery) => (
            <Link 
              href={gallery.isUpcoming ? '#' : `/gallery/${gallery.year}`}
              key={gallery.year}
              className={`group relative block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${gallery.isUpcoming ? 'cursor-not-allowed' : ''}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={gallery.image}
                  alt={`Mama Hogbe ${gallery.year} Gallery`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${gallery.isUpcoming ? 'bg-purple-500 text-white' : 'bg-white text-gray-900'}`}>
                  {gallery.year}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{gallery.title}</h3>
                <p className="text-gray-200 text-sm mb-3">{gallery.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm text-gray-200">
                    <Camera className="mr-1 h-4 w-4" />
                    {gallery.count}
                  </span>
                  {!gallery.isUpcoming && (
                    <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                      View
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </div>
              </div>
              
              {gallery.isUpcoming && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
                    Coming Soon
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}