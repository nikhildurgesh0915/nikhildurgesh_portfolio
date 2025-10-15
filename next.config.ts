/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ❗Allows build to continue even if ESLint finds errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❗Allows production build even if there are TypeScript errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**", // ✅ Correct wildcard path for Google Drive
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/**", // ✅ Correct pattern for iStock
      },
    ],
  },
};

module.exports = nextConfig;
