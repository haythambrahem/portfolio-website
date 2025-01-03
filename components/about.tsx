"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I am an aspiring <span className="font-medium">IT engineer</span>{" "}
        specializing in{" "}
        <span className="font-medium">software development</span> and{" "}
        <span className="font-medium">DevOps</span>. With hands-on experience in
        cutting-edge technologies like{" "}
        <span className="font-medium">Spring Boot</span>,{" "}
        <span className="font-medium">Angular</span>,{" "}
        <span className="font-medium">Node.js</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Docker</span>, and{" "}
        <span className="font-medium">Kubernetes</span>, I thrive in creating
        innovative solutions that optimize development processes and ensure
        scalable, robust applications.
      </p>
      <p>
        I am deeply passionate about learning new technologies and solving
        complex challenges. Currently, I am seeking a{" "}
        <span className="font-medium">6-month end-of-studies internship</span>{" "}
        to further apply my skills in{" "}
        <span className="font-medium">software development</span> and{" "}
        <span className="font-medium">DevOps</span>, contribute to impactful
        projects, and continue growing as a professional in the tech industry.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
