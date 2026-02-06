import React, { useState, useRef, useEffect } from "react";
import { languages } from "../i18n";

interface Props {
  lang: string;
  setLang: (lang: string) => void;
}

export default function LanguageSwitcher({ lang, setLang }: Props) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative">
      <button
        ref={btnRef}
        className="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition relative"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="mr-1">
          {languages.find((l) => l.code === lang)?.label || lang.toUpperCase()}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-2 w-36 rounded-xl bg-black/90 border border-white/10 shadow-xl z-50 py-1 animate-fadeIn"
          style={{ minWidth: 120 }}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              className={`w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-[#5865F2]/80 hover:text-white transition rounded-lg ${l.code === lang ? "bg-[#5865F2]/60 text-white font-bold" : ""}`}
              onClick={() => {
                setOpen(false);
                setLang(l.code);
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
