import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sendexa.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sendexa.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
