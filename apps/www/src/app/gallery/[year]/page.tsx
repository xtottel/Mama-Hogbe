"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, ChevronLeft, Share2, Download } from "lucide-react";
import { Container } from "@/layout/Container";
import { useParams } from "next/navigation";
import Head from "next/head";

type GalleryStats = {
  totalPhotos: number;
  categories: string[];
};

type GalleryPhoto = {
  id: number;
  src: string;
  caption: string;
  category: string;
};

type GalleryYearData = {
  coverImage: string;
  photos: GalleryPhoto[];
  description: string;
  stats: GalleryStats;
};

type GalleryData = {
  [year: string]: GalleryYearData;
};

const galleryData: GalleryData = {
  "2024": {
    coverImage: "/gallery/2024/cover.jpg",
    photos: [
      {
        id: 1,
        src: "/gallery/2024/cultural-night-1.jpg",
        caption: "Contestants performing traditional Adzogbo dance",
        category: "Cultural Night",
      },
      {
        id: 2,
        src: "/gallery/2024/cultural-night-2.jpg",
        caption: "Queen Mother judging traditional attire",
        category: "Cultural Night",
      },
      {
        id: 3,
        src: "/gallery/2024/talent-1.jpg",
        caption: "Miss Anloga demonstrating traditional weaving",
        category: "Talent Show",
      },
      {
        id: 4,
        src: "/gallery/2024/talent-2.jpg",
        caption: "Group performance of Agbadza dance",
        category: "Talent Show",
      },
      {
        id: 5,
        src: "/gallery/2024/interview-1.jpg",
        caption: "Judges panel during Q&A session",
        category: "Interview",
      },
      {
        id: 6,
        src: "/gallery/2024/coronation-1.jpg",
        caption: "Crowning moment of Mama Hogbe 2024",
        category: "Coronation",
      },
      {
        id: 7,
        src: "/gallery/2024/coronation-2.jpg",
        caption: "Winner with her royal court",
        category: "Coronation",
      },
      {
        id: 8,
        src: "/gallery/2024/coronation-3.jpg",
        caption: "Celebratory dance after coronation",
        category: "Coronation",
      },
    ],
    description:
      "Relive the magic of Mama Hogbe 2024 through our official photo gallery showcasing cultural performances, talent displays, and the coronation ceremony.",
    stats: {
      totalPhotos: 85,
      categories: ["Cultural Night", "Talent Show", "Interview", "Coronation"],
    },
  },
  "2023": {
    coverImage: "",
    photos: [],
    description: "Gallery for Mama Hogbe 2022 coming soon.",
    stats: {
      totalPhotos: 0,
      categories: [],
    },
  },
};

export default function GalleryYearPage() {
  const params = useParams<{ year: string }>();
  const year = params.year;

  const yearData = galleryData[year] ?? {
    coverImage: "",
    photos: [],
    description: `Gallery for Mama Hogbe ${year} coming soon.`,
    stats: {
      totalPhotos: 0,
      categories: [],
    },
  };

  return (
    <>
      {/* Optional SEO head support */}
      <Head>
        <title>Mama Hogbe {year} Photo Gallery</title>
        <meta
          name="description"
          content={`Official photos from Mama Hogbe ${year} pageant showcasing cultural performances and crowning ceremony.`}
        />
      </Head>

      <section className="py-16 bg-white">
        <Container>
          <div className="mb-8">
            <Link
              href="/gallery"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to All Galleries
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mama Hogbe {year} Gallery
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                <Camera className="mr-1 h-4 w-4" />
                {yearData.stats.totalPhotos} Photos
              </span>
              {yearData.stats.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {yearData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {yearData.photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="aspect-square relative">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-900">
                      {photo.caption}
                    </p>
                    <span className="inline-block mt-1 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {photo.category}
                    </span>
                  </div>

                  <div className="flex justify-end gap-2 mt-2">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors">
                      <Share2 className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors">
                      <Download className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download Full {year} Gallery (ZIP)
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}
