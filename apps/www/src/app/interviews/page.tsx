import Image from "next/image";
import Link from "next/link";
import { Mic2, Play, CalendarDays, Clock, User, ChevronRight } from "lucide-react";
import { Container } from "@/layout/Container";

const interviews = [
  {
    id: 1,
    title: "Crowning Glory: 2024 Winner Reflects",
    interviewee: "Andrea Sandra Delali Gakpe",
    role: "Mama Hogbe 2024",
    thumbnail: "/interviews/2024-winner.jpg",
    duration: "22 min",
    date: "May 15, 2024",
    excerpt: "Our reigning queen shares her journey from contestant to cultural ambassador and her plans for the year ahead.",
    videoUrl: "/interviews/2024-winner-interview.mp4"
  },
  {
    id: 2,
    title: "Behind the Pageant: Organizer's Diary",
    interviewee: "Madam Efua Adzoe",
    role: "Pageant Director",
    thumbnail: "/interviews/organizer.jpg",
    duration: "18 min",
    date: "April 2, 2024",
    excerpt: "The visionary behind Mama Hogbe discusses preserving Ewe traditions through modern pageantry.",
    videoUrl: "/interviews/organizer-interview.mp4"
  },
  {
    id: 3,
    title: "Life After the Crown: 2022 Winner Update",
    interviewee: "Abena Agbeti",
    role: "Mama Hogbe 2022",
    thumbnail: "/interviews/2022-winner.jpg",
    duration: "15 min",
    date: "March 10, 2024",
    excerpt: "Our inaugural winner reflects on how the pageant shaped her leadership journey two years later.",
    videoUrl: "/interviews/2022-winner-update.mp4"
  },
  {
    id: 4,
    title: "Judging Perspectives",
    interviewee: "Nana Ama Ansah",
    role: "Head Judge",
    thumbnail: "/interviews/judge.jpg",
    duration: "12 min",
    date: "February 28, 2024",
    excerpt: "What really goes into selecting the next cultural ambassador? Our chief judge explains.",
    videoUrl: "/interviews/judge-interview.mp4"
  },
  {
    id: 5,
    title: "Preparing for Greatness",
    interviewee: "Sedem Rita Amematror",
    role: "1st Runner-Up 2024",
    thumbnail: "/interviews/runner-up.jpg",
    duration: "14 min",
    date: "January 5, 2024",
    excerpt: "The preparation journey from contestant to finalist - lessons learned and growth achieved.",
    videoUrl: "/interviews/runner-up-interview.mp4"
  },
  {
    id: 6,
    title: "Cultural Preservation Through Pageantry",
    interviewee: "Togbi Kofi Ansah",
    role: "Traditional Council Representative",
    thumbnail: "/interviews/council-member.jpg",
    duration: "20 min",
    date: "December 12, 2023",
    excerpt: "How Mama Hogbe serves as a bridge between generations in preserving Ewe heritage.",
    videoUrl: "/interviews/council-interview.mp4"
  }
];

export default function InterviewsPage() {
  return (
    <Container>
      <section className="py-20 bg-white">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
            <Mic2 className="h-5 w-5" />
            <span className="font-medium">Conversations</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Exclusive Interviews
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Intimate conversations with our titleholders, organizers, and cultural custodians
          </p>
        </div>

        {/* Interviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <div key={interview.id} className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden">
              {/* Thumbnail with Play Button */}
              <div className="relative aspect-video">
                <Image
                  src={interview.thumbnail}
                  alt={`${interview.interviewee} interview`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Play className="h-6 w-6 text-purple-600 fill-purple-600" />
                  </div>
                </div>
              </div>

              {/* Interview Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <CalendarDays className="h-4 w-4" />
                  <span>{interview.date}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{interview.duration}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {interview.title}
                </h2>

                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-100 p-1 rounded-full">
                    <User className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{interview.interviewee}</p>
                    <p className="text-sm text-gray-500">{interview.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{interview.excerpt}</p>

                <Link
                  href={`/interviews/${interview.id}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Watch Interview
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        {/* <div className="mt-16 bg-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Never Miss an Interview
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to get notified when we release new conversations with our queens and organizers.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div> */}
      </section>
    </Container>
  );
}

export const metadata = {
  title: "Exclusive Interviews | Mama Hogbe",
  description: "Conversations with Mama Hogbe titleholders, organizers, and cultural custodians."
};