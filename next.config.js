/**
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  publicExcludes: ["!resume.pdf"],
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "ucarecdn.com",
      "cdn.buymeacoffee.com",
      "res.cloudinary.com",
      "imgur.com",
      "i.imgur.com",
      "cutt.ly",
      "activity-graph.herokuapp.com",
      "i.scdn.co", // images from spotify
      "images.unsplash.com",
      "m.media-amazon.com", // for imdb images
      "cdn.sanity.io", // sanity images
      "image.tmdb.org", // tmdb images
      "firebasestorage.googleapis.com",
      "media.licdn.com",
      "static.licdn.com"
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  env: {
    NEXT_PUBLIC_YOUR_SERVICE_ID: process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
    NEXT_PUBLIC_YOUR_TEMPLATE_ID: process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
    NEXT_PUBLIC_YOUR_USER_ID: process.env.NEXT_PUBLIC_YOUR_USER_ID,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    GA_PROPERTY_ID: process.env.GA_PROPERTY_ID,
    GA_CLIENT_EMAIL: process.env.GA_CLIENT_EMAIL,
    GA_PRIVATE_KEY: process.env.GA_PRIVATE_KEY,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
});
