"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  category,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 max-w-[42rem] border-2 border-transparent bg-clip-padding rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 sm:group-even:pl-8 dark:text-white shadow-lg hover:shadow-2xl hover:border-blue-400/30 dark:hover:border-blue-500/30">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {title}
            </h3>
            {category && (
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full whitespace-nowrap">
                {category}
              </span>
            )}
          </div>
          
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-sm sm:text-base flex-grow">
            {description}
          </p>
          
          <div className="flex items-center gap-3 mt-4 sm:mt-auto mb-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all duration-200 hover:scale-105"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </a>
            )}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full transition-all duration-200 hover:scale-105"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Demo
            </a>
          </div>

          <ul className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <li
                className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-600 hover:to-purple-600 px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full transition-all duration-200 hover:scale-105 cursor-default"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition-all duration-300
        group-hover:scale-[1.08]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}