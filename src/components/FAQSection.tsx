import React from "react";

interface Props {
  lang: string;
  t: any;
}

export default function FAQSection({ t }: Props) {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-transparent animate-fadein">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl xs:text-3xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center animate-slideup">{t.faq}</h2>
        <div className="space-y-4 sm:space-y-6">
          {t.faqList.map((f: { q: string; a: string }, i: number) => (
            <div key={i} className={`rounded-xl bg-[#2c2f34]/80 p-4 sm:p-6 shadow-lg border border-[#23272a] animate-fadein delay-${i*50}`}>
              <div className="text-base sm:text-lg md:text-xl font-semibold text-[#f2f3f5] mb-1 sm:mb-2">{f.q}</div>
              <div className="text-[#b9bbbe] text-sm sm:text-base">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
