import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Strict Mode — the double-mount it performs in development
  // destroys/recreates WebGL contexts and causes the 3D Lanyard canvas
  // to lose its context on every page load.
  reactStrictMode: false,
};

export default nextConfig;
