import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The two design documents are standalone HTML files in /public.
  rewrites() {
    return [
      { source: "/blueprint", destination: "/blueprint.html" },
      { source: "/system-design", destination: "/system-design.html" },
    ];
  },
};

export default nextConfig;
