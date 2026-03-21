"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ScrollProgress() {
  const scrollYProgress = useMotionValue(0);
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const progress = scrollTop / (scrollHeight - clientHeight);
      scrollYProgress.set(Number.isFinite(progress) ? progress : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [scrollYProgress]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500"
      style={{ scaleX }}
    />
  );
}
