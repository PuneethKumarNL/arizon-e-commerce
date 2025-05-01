import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
