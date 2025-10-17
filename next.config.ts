/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Allows build to continue even if ESLint finds errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Allows build to continue even if TypeScript errors exist
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
