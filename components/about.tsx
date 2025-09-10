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
        Software Engineer and DevOps focused on delivering scalable enterprise solutions. Proven track record in designing secure, high-performance systems for banking and public-sector clients. Adept at bridging technical excellence with business needs through:
      </p>
      <ul className="mb-3 text-left list-disc ml-6">
        <li>
          <span className="font-medium">Enterprise Integration:</span> Payment gateways, ERP systems, legacy modernization.
        </li>
        <li>
          <span className="font-medium">Full-Cycle Development:</span> Agile-driven projects from concept to cloud deployment.
        </li>
        <li>
          <span className="font-medium">Cross-Functional Collaboration:</span> Aligning with stakeholders to meet compliance and scalability goals.
        </li>
      </ul>
      <p>
        I am passionate about learning new technologies and solving complex challenges. I thrive in collaborative environments and continuously seek opportunities to grow and contribute to impactful projects.
      </p>
      <p>
        <span className="italic">Outside tech</span>, I enjoy fitness, basketball, chess, and exploring topics in history and philosophy.
      </p>
    </motion.section>
  );
}