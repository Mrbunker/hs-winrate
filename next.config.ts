import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "hs.res.netease.com" }],
  },
};

export default nextConfig;
