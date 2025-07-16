import { Crown, Sparkles, HeartHandshake, Globe2 } from "lucide-react";
import { Container } from "@/layout/Container";

export default function PageantHighlights() {
  const features = [
    {
      icon: <Crown className="h-10 w-10 text-amber-500" />,
      title: "Cultural Excellence",
      description:
        "Rooted in the rich Ewe heritage, Mama Hogbe celebrates indigenous language, attire, customs, and ceremonial rites with dignity.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-pink-400" />,
      title: "Women's Empowerment",
      description:
        "Equipping young women with the confidence, leadership skills, and opportunities to make lasting societal impact.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-emerald-400" />,
      title: "Community Impact",
      description:
        "Driving local development by supporting artisans, cultural tourism, and education through regional outreach and media engagement.",
    },
    {
      icon: <Globe2 className="h-10 w-10 text-indigo-400" />,
      title: "Diversity & Inclusion",
      description:
        "Welcoming contestants from all walks of life to promote unity, equity, and cross-cultural dialogue throughout Ghana and beyond.",
    },
  ];

  return (
    <section className="py-13 bg-gray-900 text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Why Mama Hogbe Stands Apart
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Mama Hogbe is not just a beauty contest — it&apos;s a legacy-driven
            movement for cultural preservation, women’s leadership, and
            community advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-amber-400 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
