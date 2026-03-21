"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowDown,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, Stripe payments, and a rich admin dashboard built with Next.js and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-violet-600 to-indigo-600",
    number: "01",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time conversational AI app powered by OpenAI's API with streaming responses, persistent conversation history, and beautiful markdown rendering.",
    tags: ["React", "Node.js", "OpenAI API", "WebSockets"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-pink-600 to-rose-600",
    number: "02",
  },
  {
    title: "Developer Analytics Dashboard",
    description:
      "An analytics platform that aggregates GitHub activity, code metrics, and productivity insights into a rich interactive visualisation dashboard.",
    tags: ["Next.js", "TypeScript", "D3.js", "MongoDB"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-emerald-600 to-teal-600",
    number: "03",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop boards, real-time multi-user updates, and a clean, minimal interface that keeps teams in sync.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-amber-600 to-orange-600",
    number: "04",
  },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ─── Utilities ───────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handler = () => {
      const sections = ["about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 140 >= el.offsetTop) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/75 backdrop-blur-2xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <Image
            src="/portfolio/logo.svg"
            alt="Logo"
            width={44}
            height={44}
            className="hover:scale-110 transition-transform duration-200"
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => scrollToSection(link.toLowerCase())}
                className={`relative text-sm tracking-widest uppercase font-medium transition-colors duration-200 ${
                  active === link.toLowerCase()
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-200"
                }`}
              >
                {link}
                {active === link.toLowerCase() && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-violet-500 to-pink-500"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 backdrop-blur-2xl border-b border-white/[0.08] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(link.toLowerCase());
                      setOpen(false);
                    }}
                    className="w-full text-left text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
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
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold tracking-wide hover:scale-105 hover:shadow-[0_0_35px_rgba(124,58,237,0.45)] transition-all duration-300"
          >
            View My Work
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold tracking-wide hover:bg-white/[0.08] hover:border-white/40 hover:scale-105 transition-all duration-300"
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
          {[
            {
              icon: FiGithub,
              href: "https://github.com/rajbahakdanyu",
              label: "GitHub",
            },
            {
              icon: FiLinkedin,
              href: "https://linkedin.com/in/danyu-rajbahak",
              label: "LinkedIn",
            },
            {
              icon: FiMail,
              href: "mailto:rajbahakdanyu@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/[0.06] hover:scale-110 transition-all duration-200"
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

// ─── About Section ───────────────────────────────────────────────────────────

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "15+" },
    { label: "Cups of Coffee", value: "∞" },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
                className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 hover:scale-105 transition-all duration-200"
              >
                Say Hello
              </a>
              <a
                href="https://github.com/rajbahakdanyu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/[0.08] hover:border-white/40 hover:scale-105 transition-all duration-200 flex items-center gap-2"
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
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ scale: 1.04, y: -4 }}
                className="relative p-7 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300 group overflow-hidden"
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

// ─── Skills Section ──────────────────────────────────────────────────────────

function SkillsSection() {
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
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
            >
              <skill.icon
                size={22}
                style={{ color: skill.color }}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Projects Section ────────────────────────────────────────────────────────

function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
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
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500"
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
                      className="p-2 rounded-full border border-white/15 text-gray-500 hover:text-white hover:border-white/50 transition-all duration-200 hover:scale-110"
                    >
                      <FiGithub size={15} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="p-2 rounded-full border border-white/15 text-gray-500 hover:text-white hover:border-white/50 transition-all duration-200 hover:scale-110"
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-white/[0.12] text-gray-400 bg-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rajbahakdanyu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 text-gray-300 font-medium hover:text-white hover:bg-white/[0.08] hover:border-white/40 hover:scale-105 transition-all duration-300"
          >
            <FiGithub size={17} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Section ─────────────────────────────────────────────────────────

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const CONNECT = [
    {
      icon: FiMail,
      title: "Email",
      description: "rajbahakdanyu@gmail.com",
      href: "mailto:rajbahakdanyu@gmail.com",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      href: "https://linkedin.com/in/danyu-rajbahak",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiGithub,
      title: "GitHub",
      description: "Check out my code",
      href: "https://github.com/rajbahakdanyu",
      gradient: "from-gray-400 to-slate-500",
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-700 blur-[120px]"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="text-violet-400 text-sm font-semibold tracking-widest uppercase"
          >
            Let's Talk
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mt-3 mb-6"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-xl max-w-lg mx-auto leading-relaxed"
          >
            Have a project in mind or just want to chat? I'd love to hear from
            you. My inbox is always open.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-5 mb-12"
        >
          {CONNECT.map((item) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -7, scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="group relative p-7 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-white/20 transition-all duration-300 text-center overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300`}
              />
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-bold mb-1.5">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <a
            href="mailto:rajbahakdanyu@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-lg hover:scale-105 hover:shadow-[0_0_45px_rgba(124,58,237,0.5)] transition-all duration-300"
          >
            <FiMail size={20} />
            Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/portfolio/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="opacity-50"
        />
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Danyu Rajbahak · Built with Next.js
        </p>
        <div className="flex items-center gap-4">
          {[
            {
              icon: FiGithub,
              href: "https://github.com/rajbahakdanyu",
              label: "GitHub",
            },
            {
              icon: FiLinkedin,
              href: "https://linkedin.com/in/danyu-rajbahak",
              label: "LinkedIn",
            },
            {
              icon: FiMail,
              href: "mailto:rajbahakdanyu@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 hover:text-gray-300 transition-colors duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
