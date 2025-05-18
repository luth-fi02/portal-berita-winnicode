import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.STRAPI_URL}/uploads/**/*`)],
  },
};

export default nextConfig;
