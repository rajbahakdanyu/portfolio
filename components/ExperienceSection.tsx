"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-3xl mx-auto">
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
            Where I've Worked
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mt-3"
          >
            Career{" "}
            <span className="bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              History
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-linear-to-b from-violet-500/60 via-violet-500/20 to-transparent md:left-8" />

          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                variants={fadeInUp}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4.5 top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 border-violet-500 bg-[#050508] md:left-6.5">
                  <div
                    className={`h-2 w-2 rounded-full ${i === 0 ? "animate-pulse bg-violet-400" : "bg-violet-600"}`}
                  />
                </div>

                <div className="group rounded-2xl border border-white/8 bg-white/3 p-6 transition-[border-color,background-color] duration-200 hover:border-white/20 hover:bg-white/6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {job.title}
                      </h3>
                      <div className="mt-0.5 flex items-center gap-2 text-sm text-violet-400">
                        <FiBriefcase size={13} />
                        <span className="font-medium">{job.company}</span>
                        {job.type && (
                          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-xs text-violet-300">
                            {job.type}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-400">
                        {job.period}
                      </p>
                      {job.location && (
                        <p className="mt-0.5 text-xs text-gray-600">
                          {job.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {job.bullets && job.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5 border-t border-white/6 pt-3">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-gray-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/70" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
