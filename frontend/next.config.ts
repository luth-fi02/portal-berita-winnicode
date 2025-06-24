import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.STRAPI_MEDIA_URL}/*`)],
  },
};

export default nextConfig;
