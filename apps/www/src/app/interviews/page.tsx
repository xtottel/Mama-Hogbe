import Image from "next/image";
import { Mic2, Play, CalendarDays, Clock, User } from "lucide-react";
import { Container } from "@/layout/Container";

const interviews = [
  {
    id: 1,
    title:
      "2024 Mama Hogbe Project Launch | Breaking The Cycle Of Menstrual Poverty & Substance Abuse",
    interviewee: "Ewe24 TV",
    role: "Mama Hogbe 2024",
    thumbnail: "/interviews/2024-winner.jpg",
    duration: "11 min",
    date: "May 15, 2024",
    embedUrl: "https://www.youtube.com/embed/d37Ee3b4Qak",
  },
  {
    id: 2,
    title: "Highlights of 2024 Grand Finale – Part One (Introductions)",
    interviewee: "Mama Hogbe Media Team",
    role: "Mama Hogbe 2024",
    thumbnail: "/interviews/organizer.jpg",
    duration: "26 min",
    date: "April 2, 2024",
    embedUrl: "https://www.youtube.com/embed/84oJswR3er0",
  },
  {
    id: 3,
    title: "Up Close With 2023 Mama Hogbe Pageant Contestants",
    interviewee: "Ewe24 TV",
    role: "Mama Hogbe 2023",
    thumbnail: "/interviews/2022-winner.jpg",
    duration: "3 min",
    date: "March 10, 2024",
    embedUrl: "https://www.youtube.com/embed/sObRKMFKfUw",
  },
];

export default function InterviewsPage() {
  return (
    <Container>
      <section className="py-13 bg-white">
        {/* Header */}
        <div className="relative mb-16  overflow-hidden px-6 sm:px-12 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-purple-100 text-purple-800 rounded-full">
            <Mic2 className="h-5 w-5" />
            <span className="font-semibold uppercase tracking-wide">
              Conversations
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Exclusive Interviews
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Heartfelt dialogues with titleholders, organizers, and cultural
            stewards — sharing stories, wisdom, and the journey behind the
            crown.
          </p>
        </div>

        {/* Interview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="group bg-white rounded-xl border border-gray-100 hover:border-gray-300 transform hover:scale-[1.01] transition duration-300 overflow-hidden"
            >
              {/* Video or Thumbnail */}
              <div className="relative aspect-video">
                {interview.embedUrl ? (
                  <iframe
                    src={interview.embedUrl}
                    title={interview.title}
                    className="w-full h-full rounded-t-xl"
                    allowFullScreen
                    aria-label={`Watch interview: ${interview.title}`}
                  />
                ) : (
                  <>
                    <Image
                      src={interview.thumbnail}
                      alt={`Thumbnail for ${interview.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                        <Play className="h-6 w-6 text-purple-600 fill-current" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <CalendarDays className="h-4 w-4" />
                  <span>{interview.date}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{interview.duration}</span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {interview.title}
                </h2>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-1 rounded-full">
                    <User className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {interview.interviewee}
                    </p>
                    <p className="text-sm text-gray-500">{interview.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

export const metadata = {
  title: "Exclusive Interviews | Mama Hogbe",
  description:
    "Conversations with Mama Hogbe titleholders, organizers, and cultural custodians.",
};
