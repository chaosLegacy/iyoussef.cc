'use client';

import Hero from "@components/home/Hero";
import SkillSection from "@components/home/SkillSection";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillSection />
      {/* <BlogsSection blogs={blogs} /> */}
      {/* <Contact /> */}
    </>
  );
}