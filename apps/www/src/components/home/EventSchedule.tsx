import { Clock, MapPin, Ticket } from "lucide-react";
import { Container } from "@/layout/Container";

export default function EventSchedule() {
  const events = [
    {
      date: "Dec 15",
      title: "Cultural Night Extravaganza",
      time: "6:00 PM",
      location: "Ho Sports Stadium",
    },
    {
      date: "Dec 20",
      title: "Community Service Day",
      time: "9:00 AM",
      location: "Volta Regional Library",
    },
    {
      date: "Dec 25",
      title: "Grand Finale Pageant",
      time: "7:00 PM",
      location: "Ho Municipal Auditorium",
    },
    {
      date: "Jan 1",
      title: "New Year Celebration Gala",
      time: "8:00 PM",
      location: "Volta Cultural Centre",
    },
  ];

  return (
    <section className="py-13 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            2025 Event Schedule
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mark your calendars for this year&apos;s unforgettable cultural festivities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative border rounded-xl bg-gray-50 hover:bg-amber-50 transition p-6 shadow-sm hover:shadow-md"
            >
              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                {event.date}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {event.title}
              </h3>

              <div className="flex items-center text-sm text-gray-700 mb-2 gap-2">
                <Clock className="h-4 w-4 text-amber-600" />
                <span>{event.time}</span>
              </div>

              <div className="flex items-center text-sm text-gray-700 mb-4 gap-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>{event.location}</span>
              </div>

              <button className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700">
                <Ticket className="mr-2 h-4 w-4" />
                Get Tickets
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
