// Page Components START----------

import {
  headingFromLeft,
} from "@content/FramerMotionVariants";

import AnimatedHeading from "../components/FramerMotion/AnimatedHeading";
import Contact from "../components/Contact";
import Metadata from "../components/MetaData";
import React from "react";
import SkillSection from "../components/Home/SkillSection";
import pageMeta from "@content/meta";
import Hero from "@components/Home/Hero";
import { getAuthorData } from "@content/user";

export default function Home() {
  const { name } = getAuthorData();

  return (
    <>
      <Metadata
        title={name}
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className="relative max-w-5xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
        <Hero />
        <div>
          <SkillSection />
          {/* <BlogsSection blogs={blogs} /> */}
          <Contact />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
  return (
    <AnimatedHeading
      className="w-full my-2 text-3xl font-bold text-left font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

// export async function getStaticProps() {
//   const blogs = await getAllPostsMeta(3);

//   await getRSS();
//   await generateSitemap();

//   return {
//     props: { blogs },
//   };
// }
