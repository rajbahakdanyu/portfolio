"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { scrollToSection } from "@/lib/hooks";

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/rajbahakdanyu", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/danyu-rajbahak",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:rajbahakdanyu@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-indigo-700/20 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 35, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-pink-700/15 blur-[90px]"
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/[0.08] text-violet-300 text-sm font-medium mb-10 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="text-7xl md:text-[108px] lg:text-[120px] font-black leading-none tracking-tight mb-4"
        >
          <span className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent">
            Danyu
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rajbahak
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Full Stack Developer crafting{" "}
          <span className="text-white font-medium">
            beautiful digital experiences
          </span>{" "}
          with modern tech.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold tracking-wide hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] transition-[transform,box-shadow] duration-200"
          >
            View My Work
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold tracking-wide hover:bg-white/[0.08] hover:border-white/40 hover:scale-105 transition-[transform,border-color,background-color] duration-200"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/[0.06] hover:scale-110 transition-[transform,color,border-color,background-color] duration-150"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-300 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  );
}
