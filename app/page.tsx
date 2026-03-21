import AboutSection from "@/components/AboutSection";
import BackToTop from "@/components/BackToTop";
import ContactSection from "@/components/ContactSection";
import CursorGlow from "@/components/CursorGlow";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollProgress from "@/components/ScrollProgress";
import SkillsSection from "@/components/SkillsSection";

export default function PortfolioWebsite() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <main className="min-h-screen bg-[#050508] text-white">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
