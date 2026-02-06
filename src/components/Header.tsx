"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import type { LanguageCode } from "../i18n";

interface Props {
  lang: LanguageCode;
  t: any;
  onLangChange?: (lang: LanguageCode) => void;
}

const menuIds = [
  { key: "features", href: "#features" },
  { key: "howItWorks", href: "#how" },
  { key: "plans", href: "#plans" },
  { key: "download", href: "#download" },
  { key: "faq", href: "#faq" },
];

const LANGS = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

export default function Header({ t, lang = "en", onLangChange }: Props) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        mobileBtnRef.current &&
        !mobileBtnRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);
  return (
	<header className="fixed top-0 left-0 right-0 z-50">

      <div className="mx-auto max-w-6xl px-3 sm:px-4 pt-2 sm:pt-3">
        <div className="rounded-full border border-white/10 bg-black/25 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-2.5">
            <a href="#hero" className="flex items-center gap-2">
              <span className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14">
                {/* Градиентное свечение и пульсация вокруг PNG-логотипа */}
                <span
                  className="absolute inset-0 z-0 animate-pulse pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 60% 40%, #ff3cacbb 0%, #7f53ff99 40%, #5865f288 70%, transparent 100%)",
                    filter: "blur(16px)",
                    opacity: 0.95,
                  }}
                />
                <Image
                  src="/logo.png"
                  alt="Vektor Logo"
                  width={48}
                  height={48}
                  quality={100}
                  sizes="(min-width: 640px) 48px, 40px"
                  className="relative h-10 w-10 sm:h-12 sm:w-12 object-contain z-10 animate-[logoFloat_6s_ease-in-out_infinite]"
                />
              </span>
              <span className="font-extrabold tracking-tight text-white text-xl sm:text-2xl md:text-3xl ml-1">
                Vektor
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
              {menuIds.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.key === "plans" ? t.plansNav : t[item.key]}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 relative">
              {/* Language dropdown */}
              <button
                ref={btnRef}
                className="inline-flex items-center justify-center rounded-full px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 ml-1 transition relative"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
              >
                <span className="mr-1">
                  {LANGS.find((l) => l.code === lang)?.label || lang.toUpperCase()}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {open && (
                <div
                  ref={menuRef}
                  className="absolute right-0 top-full mt-2 w-36 rounded-xl bg-black/90 border border-white/10 shadow-xl z-50 py-1 animate-fadeIn"
                  style={{ minWidth: 120 }}
                >
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      className={`w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-[#5865F2]/80 hover:text-white transition rounded-lg ${l.code === lang ? "bg-[#5865F2]/60 text-white font-bold" : ""}`}
                      onClick={() => {
                        setOpen(false);
                        onLangChange?.(l.code);
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Mobile menu button */}
              <button
                ref={mobileBtnRef}
                className="md:hidden inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition"
                onClick={() => setMobileOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={mobileOpen}
                aria-label="Open menu"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {mobileOpen && (
                <div
                  ref={mobileMenuRef}
                  className="md:hidden absolute right-0 top-full mt-2 w-48 rounded-xl bg-black/90 border border-white/10 shadow-xl z-50 py-2"
                >
                  {menuIds.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.key === "plans" ? t.plansNav : t[item.key]}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
