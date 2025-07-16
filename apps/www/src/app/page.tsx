import { Metadata } from "next";

import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Mama Hogbe 2025 | Volta’s Premier Cultural Pageant",
  description:
    "Experience Mama Hogbe 2025 — a national celebration of heritage, womanhood, and leadership. Explore contestants, vote, and partner with a legacy-driven platform backed by the Anlo Traditional Council.",
  metadataBase: new URL("https://mamahogbepageant.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mama Hogbe 2025 | Celebrating Culture. Empowering Women.",
    description:
      "Join the movement inspiring leadership and cultural pride in Ghana. Meet contestants, vote, or become a sponsor.",
    url: "https://mamahogbepageant.com",
    siteName: "Mama Hogbe",
    images: [
      {
        url: "/og/mama-hogbe.jpg", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Mama Hogbe 2025 - Cultural Empowerment",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mama Hogbe 2025 | Ghana’s Leading Cultural Pageant",
    description:
      "Apply to compete, vote for contestants, or explore Mama Hogbe's mission of culture and empowerment.",
    images: ["/og/mama-hogbe.jpg"],
    creator: "@MamaHogbeOfficial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#a83279",
    },
  },
  verification: {
    google: "your-google-verification-code", // replace with actual if needed
  },
};

export default function Home() {
  return (
    <div>
      {/* <Homepage /> */}
      <HomePage />

      {/* Add more sections as needed */}
    </div>
  );
}
