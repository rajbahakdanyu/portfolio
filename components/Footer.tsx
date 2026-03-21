"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/rajbahakdanyu", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/danyu-rajbahak",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:rajbahakdanyu@gmail.com", label: "Email" },
];

export default function Footer() {
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
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
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
