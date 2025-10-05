"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Palette,
  Zap,
} from "lucide-react";

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack marketplace with real-time inventory and payment processing",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "AI Content Generator",
      description: "ML-powered tool for creating marketing content using GPT-4",
      tech: ["React", "Python", "OpenAI"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management with real-time updates",
      tech: ["Next.js", "Socket.io", "MongoDB"],
      link: "#",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind"],
      icon: Code2,
    },
    {
      name: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "Redis"],
      icon: Zap,
    },
    {
      name: "Design",
      items: ["Figma", "UI/UX", "Animation", "Responsive"],
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="flex flex-col gap-4 px-6 py-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300">
              Full-Stack Developer & Creative Problem Solver
            </p>
          </div>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I craft elegant digital experiences that merge cutting-edge
            technology with intuitive design. Specialized in building scalable
            web applications that users love.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </button>
            <button
              type="button"
              className="px-8 py-3 border border-slate-600 hover:border-blue-400 rounded-lg font-medium transition-all hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            {[
              { Icon: Github, href: "https://github.com", name: "github" },
              {
                Icon: Linkedin,
                href: "https://linkedin.com",
                name: "linkedin",
              },
              { Icon: Mail, href: "mailto:contact@example.com", name: "mail" },
            ].map(({ Icon, href, name }) => (
              <a
                key={name}
                href={href}
                className="p-3 border border-slate-700 hover:border-blue-400 rounded-lg transition-all hover:scale-110 hover:bg-slate-800"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category) => (
              <div
                key={category.name}
                className="p-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl hover:border-blue-500 transition-all hover:scale-105"
              >
                <category.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl hover:border-blue-500 transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <ExternalLink
                    className="text-slate-400 group-hover:text-blue-400 transition-colors"
                    size={20}
                  />
                </div>

                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Build Something
            </span>
          </h2>

          <p className="text-lg text-slate-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <button
            type="button"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <Mail size={20} />
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Danyu Rajbahak. Built with Next.js, Bun & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
