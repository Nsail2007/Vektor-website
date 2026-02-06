import React from "react";
import { trackPlausible } from "../lib/plausible";

interface Props {
  lang: string;
  t: any;
}

export default function DownloadSection({ t }: Props) {
  return (
    <section id="download" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Promo card */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          {/* glow blobs */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#5865F2]/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#FF4EDB]/18 blur-3xl" />

          <div className="relative px-5 sm:px-10 py-10 sm:py-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-[#5865F2]" />
              {t.downloadBadge}
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              {t.downloadSection}
            </h2>

            <p className="mt-3 text-white/70 max-w-2xl mx-auto">
              {t.downloadSubtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                           bg-[#5865F2] hover:bg-[#4752C4] text-white
                           shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_18px_50px_rgba(88,101,242,0.28)]
                           transition"
                onClick={() => trackPlausible("Download Now Click", { lang: t.lang })}
              >
                {t.download}
              </a>

              <a
                href="#faq"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                           bg-white/10 hover:bg-white/15 text-white border border-white/10
                           backdrop-blur-xl transition"
              >
                {t.learnMore}
              </a>
            </div>

            {/* meta */}
            <div className="mt-8 mx-auto max-w-xl rounded-2xl bg-white/6 border border-white/10 p-4 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-sm text-white/80">
                  <span className="font-semibold text-white">{t.downloadVersionLabel}</span> {t.downloadVersionValue}
                </div>
                <div className="text-sm text-white/70">
                  {t.downloadInstaller}
                </div>
              </div>
              <div className="mt-2 text-xs text-white/60">
                {t.downloadChecksum}
              </div>
            </div>

            {/* subtle divider */}
            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60" />

            {/* small legal/notes (optional) */}
            <div className="mt-4 text-xs text-white/45">
              {t.downloadLegal}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
