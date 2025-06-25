import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(process.env.STRAPI_MEDIA_URL ?? "http://localhost:1337/uploads/**/*")],
  },
};

export default nextConfig;
