'use client';

import pageMeta from "@data/content/meta";
import Hero from "@components/home/Hero";
import { getAuthorData } from "@data/content/user";
import MetaData from "@components/MetaData";
import { Metadata } from "next";
import { headingFromLeft } from "@data/content/FramerMotionVariants";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";

export default function Home() {
  const { name } = getAuthorData();

  return (
    <>
      <MetaData
        title={name}
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className="relative max-w-5xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
        <Hero />
        <div>
          {/* <SkillSection /> */}
          {/* <BlogsSection blogs={blogs} /> */}
          {/* <Contact /> */}
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