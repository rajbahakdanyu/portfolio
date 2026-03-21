"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { SKILLS } from "@/lib/data";

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-violet-400 text-sm font-semibold tracking-widest uppercase"
          >
            What I Know
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mt-3"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08] hover:-translate-y-1 hover:scale-105 active:scale-[0.97] transition-[transform,border-color,background-color] duration-150 cursor-default will-change-transform"
            >
              <skill.icon
                size={22}
                style={{ color: skill.color }}
                className="transition-transform duration-150 group-hover:scale-110"
              />
              <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-150">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
