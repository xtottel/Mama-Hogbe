import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/layout/Container";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Esi Dogbe",
      year: "2023 Winner",
      quote:
        "Mama Hogbe transformed my life, giving me the confidence and platform to champion girls' education across the Volta Region.",
      image: "/winners/24/akorfa.jpeg",
    },
    {
      name: "Akosua Adomako",
      year: "2022 Finalist",
      quote:
        "Participating in Mama Hogbe deepened my love for Ewe culture and ignited my journey as a cultural ambassador.",
      image: "/winners/24/akorfa.jpeg",
    },
    {
      name: "Ama Nyuieme",
      year: "2021 Winner",
      quote:
        "This pageant empowered me to become a voice for rural women and an advocate for community health.",
      image: "/winners/24/akorfa.jpeg",
    },
  ];

  return (
    <section className="py-13 bg-[#3a0a45] text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Changing Lives Through Culture
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Hear from our past queens and finalists about their transformative
            experiences with Mama Hogbe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#5e1a6b]/50 border border-purple-700 p-8 rounded-xl hover:border-amber-300 transition-colors"
            >
              <Quote className="h-8 w-8 text-amber-400 mb-4" />
              <p className="text-lg italic mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-purple-300 text-sm">{testimonial.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
