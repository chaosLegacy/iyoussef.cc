// import { useProfileStore } from "@/stores/profile"
// import type { SiteConfig } from "@/types"

export const siteConfig = {
  name: "Netflix Web",
  description:
    "An open source Netflix clone built using the new app router, server components, trpc, and everything new in Next.js 13.",
  url: "https://netflx-web.vercel.app",
  ogImage: "https://netflx-web.vercel.app/opengraph-image.png",
  links: {
    twitter: "https://twitter.com/sadmann17",
    github: "https://github.com/sadmann7",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "TV Shows",
      href: "/tv-shows",
    },
    {
      title: "Movies",
      href: "/movies",
    },
    {
      title: "New & Popular",
      href: "/new-and-popular",
    },
    {
      title: "My List",
      href: "/my-list",
    },
    {
      title: "Notifications",
      onClick: () => alert("🛹 Do a kickflip"),
    },
  ],
  profileDropdownItems: [
    {
      title: "Manage Profiles",
      href: "/profiles",
    },
    {
      title: "Exit Profile",
      // onClick: () => useProfileStore.setState({ profile: null }),
    },
    {
      title: "Sign Out of Netflix",
    },
  ],
  footerItems: [
    { title: "Audio Description", href: "/" },
    { title: "Help Center", href: "/" },
    { title: "Gift Cards", href: "/" },
    { title: "Media Center", href: "/" },
    { title: "Investor Relations", href: "/" },
    { title: "Jobs", href: "/" },
    { title: "Terms of Use", href: "/terms-of-use" },
    { title: "Privacy", href: "/" },
    { title: "Legal Notices", href: "/" },
    { title: "Cookie Preferences", href: "/" },
    { title: "Corporate Information", href: "/" },
    { title: "Contact Us", href: "/" },
  ],
  socialLinks: [
    {
      title: "Facebook",
      href: "https://www.facebook.com/NetflixAsia",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/netflixasia/",

    },
    {
      title: "Twitter",
      href: "https://twitter.com/NetflixAsia",

    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos",

    },
  ],
}
