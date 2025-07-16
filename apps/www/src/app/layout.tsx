import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ExaHeader } from "@/layout/ExaHeader";
import { ExaFooter } from "@/layout/ExaFooter";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { AnalyticsProvider } from "@/context/AnalyticsProvider";
import { CookiesProvider } from "@/context/CookiesContext";
import { CookiesBanner } from "@/components/common/CookiesBanner";
import Script from "next/script";
import { TrackingScripts } from "@/components/common/TrackingScripts";
//import TopBar from "@/layout/Topbar";


const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mama Hogbe 2025 | Volta's Premier Cultural Pageant",
    template: "%s | Mama Hogbe",
  },
  description:
    "Mama Hogbe is a national cultural pageant under the auspices of the Anlo Traditional Council, celebrating womanhood, heritage, and leadership. Register, vote, or partner today.",
  metadataBase: new URL("https://mamahogbepageant.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mama Hogbe 2025 | Celebrating Culture. Empowering Women.",
    description:
      "Explore Ghana’s leading cultural pageant platform. Meet the contestants, view results, and partner with a movement that blends tradition and impact.",
    url: "https://mamahogbepageant.com",
    siteName: "Mama Hogbe",
    images: [
      {
        url: "/og/mama-hogbe.jpg", // Place this image under /public/og/
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
    title: "Mama Hogbe 2025 | Ghana's Premier Cultural Pageant",
    description:
      "Discover the faces, stories, and cultural pride behind Mama Hogbe. Register or sponsor now.",
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
      color: "#a83279", // royal purple-like brand color
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#111e4f" />
       
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}
      >
        <GoogleTagManager gtmId="G-FLDGHERSB9" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="sendexa-theme"
        >
          <AnalyticsProvider>
            <CookiesProvider>
              {/* <TopBar /> */}
              <ExaHeader />
             
              <main id="main-content" className="min-h-screen">
                {children}
              </main>
              <ExaFooter />
              <CookiesBanner />
              <SpeedInsights />
            </CookiesProvider>
          </AnalyticsProvider>
        </ThemeProvider>

        <TrackingScripts />

        {/* Tidio live chat script */}
        {/* <Script
          src="https://code.tidio.co/o93ckmtrvwarfdtztq2dbz0ghzunte8r.js"
          strategy="afterInteractive"
        /> */}

        {/* Floating WhatsApp CTA */}
        {/* <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/233555539152?text=Hello%20there!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            className="bg-[#25D366] text-white p-3 rounded-full shadow-xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.296-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div> */}

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FLDGHERSB9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FLDGHERSB9');
          `}
        </Script>
        <Script
          src="https://cdn.xtopay.co/xtopay.js"
          strategy="afterInteractive"
        />
        

        <Script
          src="https://vercel-speed-insights.vercel.app/script.js"
          strategy="afterInteractive"
          data-vercel-speed-insights="your-vercel-speed-insights-id"
        />
      </body>
    </html>
  );
}
