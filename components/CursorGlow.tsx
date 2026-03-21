"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[500px] w-[500px] rounded-full will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        transition: "transform 0.12s ease-out",
      }}
    />
  );
}
