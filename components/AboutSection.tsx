"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const STATS = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Cups of Coffee", value: "∞" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <div>
            <motion.span
              variants={fadeInUp}
              className="text-violet-400 text-sm font-semibold tracking-widest uppercase"
            >
              About Me
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mt-3 mb-8 leading-tight"
            >
              Crafting code,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                one pixel
              </span>{" "}
              at a time.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg leading-relaxed mb-5"
            >
              Hey, I'm Danyu — a passionate Full Stack Developer who loves
              building scalable, performant web applications that are as
              beautiful under the hood as they are on screen.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              When I'm not writing code, I'm exploring new technologies,
              contributing to open-source, or sketching ideas for my next side
              project. I believe great software is a perfect blend of clean
              architecture and delightful user experience.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a
                href="mailto:rajbahakdanyu@gmail.com"
                className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 hover:scale-105 transition-[transform,background-color] duration-200"
              >
                Say Hello
              </a>
              <a
                href="https://github.com/rajbahakdanyu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/[0.08] hover:border-white/40 hover:scale-105 transition-[transform,border-color,background-color] duration-200 flex items-center gap-2"
              >
                <FiGithub size={16} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="relative p-7 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-violet-500/40 hover:scale-[1.04] hover:-translate-y-1 transition-[transform,border-color] duration-200 group overflow-hidden will-change-transform"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-5xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
