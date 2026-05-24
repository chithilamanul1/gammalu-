import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: false, // Disable SWC to avoid binary download issues
  skipSWCInstallation: true, // Skip SWC binary installation in restricted environment
  // Add any additional Next.js config options here
};

export default nextConfig;
