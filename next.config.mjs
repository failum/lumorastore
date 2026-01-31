// next.config.ts (or next.config.js)

import withPWA from "next-pwa";


const nextConfig= withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // optional: configure runtime caching
  runtimeCaching: [],
})({
  // your base next config here
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // ... other config
});

export default nextConfig;