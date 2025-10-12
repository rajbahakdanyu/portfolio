"use client";

import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

import { Button } from "@/components/ui/button";

const PortfolioWebsite = () => {
  return (
    <div className="min-h-screen bg-white text-black py-4 px-6">
      <nav className="flex flex-row justify-between items-center ">
        <Image src="/portfolio/logo.png" alt="Logo" width={65} height={65} />
        <Button variant="outline" size="lg" onClick={() => {}}>
          Connect
        </Button>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 ">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 ">Danyu Rajbahak</h1>
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
  );
};

export default PortfolioWebsite;
