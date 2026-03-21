"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiCopy, FiMail } from "react-icons/fi";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { CONNECT } from "@/lib/data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rajbahakdanyu@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 w-[600px] h-[300px] rounded-full bg-violet-700 blur-[120px] will-change-transform"
          style={{ animation: "glow-pulse 8s ease-in-out infinite" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-3 gap-5 mb-12"
        >
          {CONNECT.map((item) => {
            const isEmail = item.href.startsWith("mailto");
            if (isEmail) {
              return (
                <motion.button
                  type="button"
                  key={item.title}
                  onClick={copyEmail}
                  variants={scaleIn}
                  className="group relative p-7 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-white/20 hover:-translate-y-2 hover:scale-[1.03] transition-[transform,border-color] duration-200 text-center overflow-hidden will-change-transform"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300`}
                  />
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 transition-transform duration-200`}
                  >
                    {copied ? (
                      <FiCheck size={24} className="text-white" />
                    ) : (
                      <item.icon size={24} className="text-white" />
                    )}
                  </div>
                  <h3 className="text-white font-bold mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {copied ? "Copied!" : item.description}
                  </p>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {copied ? (
                      <FiCheck size={13} className="text-emerald-400" />
                    ) : (
                      <FiCopy size={13} className="text-gray-500" />
                    )}
                  </div>
                </motion.button>
              );
            }
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleIn}
                className="group relative p-7 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:border-white/20 hover:-translate-y-2 hover:scale-[1.03] transition-[transform,border-color] duration-200 text-center overflow-hidden will-change-transform"
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
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center"
        >
          <a
            href="mailto:rajbahakdanyu@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-10 py-4 text-lg font-semibold text-white transition-[transform,box-shadow] duration-200 hover:scale-105 hover:shadow-[0_0_45px_rgba(124,58,237,0.5)]"
          >
            <FiMail size={20} />
            Send Me a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
