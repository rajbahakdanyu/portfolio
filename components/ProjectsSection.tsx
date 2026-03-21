"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  SiD3,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PROJECTS } from "@/lib/data";

const TAG_ICONS: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Stripe: SiStripe,
  "OpenAI API": SiOpenai,
  "Socket.io": SiSocketdotio,
  "D3.js": SiD3,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-violet-400 text-sm font-semibold tracking-widest uppercase"
          >
            What I've Built
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mt-3"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm overflow-hidden hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-2 transition-[transform,border-color,background-color] duration-200 will-change-transform"
            >
              {/* Top gradient strip */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`}
              />
              <div className="p-8">
                <div className="flex items-start justify-between mb-5">
                  <span
                    className={`text-7xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent opacity-25 leading-none`}
                  >
                    {project.number}
                  </span>
                  <div className="flex gap-2.5 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-full border border-white/15 text-gray-500 hover:text-white hover:border-white/50 hover:scale-110 transition-[transform,color,border-color] duration-150"
                    >
                      <FiGithub size={15} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="p-2 rounded-full border border-white/15 text-gray-500 hover:text-white hover:border-white/50 hover:scale-110 transition-[transform,color,border-color] duration-150"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-[15px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const Icon = TAG_ICONS[tag];
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-400"
                      >
                        {Icon && <Icon size={11} />}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rajbahakdanyu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 text-gray-300 font-medium hover:text-white hover:bg-white/[0.08] hover:border-white/40 hover:scale-105 transition-[transform,color,border-color,background-color] duration-200"
          >
            <FiGithub size={17} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
