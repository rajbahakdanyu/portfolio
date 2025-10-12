"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiX } from "react-icons/fi";

import { Button } from "@/components/ui/button";

const connectOptions = [
  {
    icon: FiMail,
    title: "Email",
    description: "Send me a direct message",
    link: "mailto:rajbahakdanyu@gmail.com",
    color: "text-red-500",
  },
  {
    icon: FiLinkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    link: "https://linkedin.com/in/danyu-rajbahak",
    color: "text-blue-600",
  },
  {
    icon: FiGithub,
    title: "GitHub",
    description: "Check out my code",
    link: "https://github.com/rajbahakdanyu",
    color: "text-gray-800",
  },
];

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="min-h-screen bg-white text-black py-4 px-6">
        <nav className="flex flex-row justify-between items-center ">
          <Image src="/portfolio/logo.png" alt="Logo" width={65} height={65} />
          <Button variant="outline" size="lg" onClick={openMenu}>
            Get in Touch
          </Button>
        </nav>

        <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 ">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 ">
            Danyu Rajbahak
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-3xl leading-relaxed">
            Passionate about building innovative web applications and bringing
            ideas to life through clean, efficient code
          </p>
          <FiArrowDown size={50} />
        </section>

        <footer className="py-8 px-6 ">
          <div className="max-w-6xl mx-auto text-center">
            <p>© 2025 Danyu Rajbahak</p>
          </div>
        </footer>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-300 ease-out ${
            isAnimating ? "bg-opacity-95" : "bg-opacity-0"
          }`}
          onClick={closeMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeMenu();
            }
          }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className={`relative w-full max-w-4xl px-6 transition-all duration-300 ease-out ${
              isAnimating
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform translate-y-8 opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="document"
          >
            <button
              type="button"
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2  text-white z-10"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>

            <div
              className={`text-center mb-12 transition-all duration-500 delay-100 ${
                isAnimating
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-4 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-300">
                Ready to collaborate? Choose your preferred way to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connectOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <a
                    key={option.title}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 ${
                      isAnimating
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isAnimating ? `${200}ms` : "0ms",
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`mb-4 ${option.color}`}>
                        <IconComponent size={48} />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {option.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {option.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioWebsite;
