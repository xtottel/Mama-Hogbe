import { Clock, MapPin, Ticket } from "lucide-react";
import { Container } from "@/layout/Container";

export default function EventSchedule() {
  const events = [
    {
      date: "Coming Soon",
      title: "Traditional Area Auditions",
      time: "Dates to be announced",
      location: "Dzodze • Abor • Denu • Agbozume • Anloga",
    },
    {
      date: "Oct 5",
      title: "Semi-Finals",
      time: "Sunday, 5th October • 3:00 PM",
      location: "Anloga",
    },
    {
      date: "Oct 31",
      title: "Grand Finale",
      time: "Friday, 31st October • 7:00 PM",
      location: "Keta-Vui",
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
            From local auditions to the grand finale, here’s what’s coming up for Mama Hogbe 2025.
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

              <button
                className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700"
                disabled
              >
                <Ticket className="mr-2 h-4 w-4" />
                Tickets Coming Soon
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
