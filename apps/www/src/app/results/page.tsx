import { Clock10 } from "lucide-react";
import { Container } from "@/layout/Container";

export default function ComingSoonPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <Container>
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-100 text-yellow-600">
            <Clock10 className="h-8 w-8" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Voting Has Not Started
          </h1>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Public voting and leaderboard tracking will open closer to the event
            date. Stay tuned!
          </p>

          {/* <button className="mt-4 px-6 py-3 bg-[#094a94] text-white font-medium rounded-lg hover:bg-[#083b78] transition">
            Back to Homepage
          </button> */}
        </div>
      </Container>
    </section>
  );
}
