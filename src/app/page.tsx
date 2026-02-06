"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PricingSection from "../components/PricingSection";
import DownloadSection from "../components/DownloadSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { defaultLang, translations, type LanguageCode } from "../i18n";

export default function Home() {
  const [lang, setLang] = useState<LanguageCode>(defaultLang);
  const t = translations[lang];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        const cleanUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, "", cleanUrl);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return (
    <div className="min-h-screen font-sans bg-transparent">
      <Header lang={lang} t={t} onLangChange={setLang} />
      <main className="pt-20">
        <Hero lang={lang} t={t} />
        <PricingSection t={t} />
        <FeaturesSection lang={lang} t={t} />
        <HowItWorksSection lang={lang} t={t} />
        <DownloadSection lang={lang} t={t} />
        <FAQSection lang={lang} t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </div>
  );
}
