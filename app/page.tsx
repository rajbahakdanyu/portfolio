"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

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
  return (
    <div className="min-h-screen bg-black text-white py-4 px-52">
      <nav className="flex flex-row justify-between items-center mt-4">
        <Image src="/portfolio/logo.svg" alt="Logo" width={65} height={65} />

        <a href="/about">Get in Touch</a>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 ">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 ">Danyu Rajbahak</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl">
          Full Stack Developer & Creative Problem Solver
        </p>
      </section>
    </div>
  );
};

export default PortfolioWebsite;
