import RSS from "rss";
import { getAllPostsMeta } from "./sanityContent";
import { writeFileSync } from "fs";
import { getAuthorData } from "@content/user";

export default async function getRSS() {
  const siteURL = "https://j471n.in";
  const allBlogs = await getAllPostsMeta();
  const { name } = getAuthorData();

  // Create a new RSS object
  const feed = new RSS({
    title: name,
    description: `I've been writing online since 2021, mostly about web development
            and tech careers. In total, I've written ${allBlogs.length} articles
            till now.`,
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${name}`,
  });

  // Add all blog posts to the RSS feed
  allBlogs?.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/blogs/${post.slug.current}`,
      date: post.publishedAt,
      description: post!.excerpt,
    });
  });

  // Write the RSS feed to a file
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
