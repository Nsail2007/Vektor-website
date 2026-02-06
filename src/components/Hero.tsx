"use client";

import React from "react";
import VoiceWave from "./VoiceWave";
import { trackPlausible } from "../lib/plausible";

interface Props {
  lang: string;
  t: any;
}

export default function Hero({ t }: Props) {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* BASE */}
      <div
  className="absolute inset-0 z-0"
  style={{
    background:
      "radial-gradient(1200px 700px at 50% 40%, rgba(124,58,237,0.18), rgba(11,13,22,0.92) 70%)",
  }}
/>

      {/* PINK GLOW (STRONG + PULSING) — BEHIND WAVE AND TEXT */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 55%, rgba(158, 17, 130, 0.75), transparent 90%)",
          filter: "blur(18px)",
          animation: "glowEnter 1.6s ease-out both, pinkPulse 4.2s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(820px 520px at 50% 45%, rgba(158, 17, 130, 0.22), transparent 90%)",
          filter: "blur(48px)",
          opacity: 0.85,
          animation: "glowEnter 1.6s ease-out both",
          mixBlendMode: "screen",
        }}
      />

      {/* VOICE WAVE (ABOVE GLOW, BELOW TEXT) */}
      <div className="absolute inset-0 z-10 pointer-events-none wave-fade-in">
        <VoiceWave className="opacity-80 blur-[0.6px]" />

        {/* melt edges so no "frame" */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d16] via-transparent to-[#0b0d16]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d16] via-transparent to-[#0b0d16]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-3xl text-center">
        {/* LOGO */}


        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          {t.heroTitleMain}{" "}
          <span className="relative text-[#5865F2]">
            {t.heroTitleAccent}
            <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-[#5865F2]/60 blur-sm" />
          </span>
        </h1>

        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
          {t.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch">
          <a
            href="#download"
            onClick={() =>
              trackPlausible("Download Now Click", { lang: t?.lang })
            }
            className="w-full sm:w-[190px] px-8 py-3 rounded-full bg-[#5865F2] text-white font-semibold text-center shadow-lg hover:scale-105 transition-transform"
          >
            {t.download}
          </a>

          <a
            href="#features"
            className="w-full sm:w-[190px] px-8 py-3 rounded-full bg-white/10 text-white font-semibold text-center border border-white/20 hover:bg-white/20 transition"
          >
            {t.learnMore}
          </a>
        </div>
      </div>
    </section>
  );
}
