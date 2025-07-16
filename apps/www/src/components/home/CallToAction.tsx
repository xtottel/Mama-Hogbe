import { CalendarCheck, Handshake } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-13 bg-gradient-to-r from-[#5b1f00] via-[#8b3200] to-[#d97706] text-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Celebrate Heritage. Empower Women.
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Join the movement that honors tradition, uplifts communities, and crowns tomorrow’s leaders.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#7c3700] font-medium rounded-lg hover:bg-gray-100 transition-colors">
            <CalendarCheck className="h-5 w-5" />
            Add Event to Calendar
          </button>

          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
            <Handshake className="h-5 w-5" />
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
