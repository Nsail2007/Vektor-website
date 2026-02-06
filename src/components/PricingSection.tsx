"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  t: any;
}

export default function PricingSection({ t }: Props) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const price =
    billing === "monthly" ? t.pricingProPriceMonthly : t.pricingProPriceYearly;

  return (
    <section id="plans" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            {t.pricingTitle}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="group rounded-[18px] border border-white/8 bg-[#111524] shadow-[0_18px_50px_rgba(0,0,0,0.35)] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-white/15 flex flex-col h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-2xl font-bold text-white">{t.pricingFreeTitle}</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/85 border border-white/10">
                {t.pricingFreeBadge}
              </span>
            </div>
            <div className="mt-4 text-3xl sm:text-4xl font-black text-white">{t.pricingFreePrice}</div>
            <ul className="mt-6 space-y-3 text-white/85">
              {t.pricingFreeFeatures.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-white/80">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed">
              {t.pricingFreeDesc}
            </p>
            <div className="mt-auto pt-6">
              <div className="flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 opacity-0 pointer-events-none">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold">{t.pricingMonthly}</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold">{t.pricingYearly}</span>
                </div>
              </div>
              <button className="mt-4 w-full h-12 rounded-full bg-white/10 text-white font-semibold flex items-center justify-center border border-white/15 hover:bg-white/15 transition">
                {t.pricingFreeCta}
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[18px] border border-[#5865F2]/40 bg-gradient-to-b from-[#2a2140] to-[#141826] shadow-[0_22px_60px_rgba(88,101,242,0.28)] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#5865F2]/70 flex flex-col h-full">
            <Image
              src="/Adobe%20Photoshop%20PS%20.png"
              alt=""
              aria-hidden="true"
              width={1200}
              height={1200}
              quality={100}
              sizes="(min-width: 1024px) 52vw, 58vw"
              className="pointer-events-none absolute -right-6 sm:-right-12 bottom-16 sm:bottom-20 w-[58%] sm:w-[52%] opacity-20 sm:opacity-25 blur-[0.2px] -rotate-[6deg] object-contain"
            />
            <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                {t.pricingProTitle}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#5865F2]/20 text-white border border-[#5865F2]/40">
                {t.pricingProBadge}
              </span>
            </div>
            <div className="mt-4 text-3xl sm:text-4xl font-black text-white">{price}</div>
            <ul className="mt-6 space-y-3 text-white/85">
              {t.pricingProFeatures.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-white/80">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed">
              {t.pricingProDesc}
            </p>
            <div className="mt-auto pt-6">
              <div className="flex justify-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
                  <button
                    type="button"
                    onClick={() => setBilling("monthly")}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      billing === "monthly"
                        ? "bg-[#5865F2] text-white shadow-[0_8px_24px_rgba(88,101,242,0.35)]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {t.pricingMonthly}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBilling("yearly")}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      billing === "yearly"
                        ? "bg-[#5865F2] text-white shadow-[0_8px_24px_rgba(88,101,242,0.35)]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {t.pricingYearly}
                  </button>
                </div>
              </div>
              <button className="mt-4 w-full h-12 rounded-full bg-[#5865F2] text-white font-semibold flex items-center justify-center shadow-[0_12px_30px_rgba(88,101,242,0.35)] hover:bg-[#4752C4] transition">
                {t.pricingProCta}
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
