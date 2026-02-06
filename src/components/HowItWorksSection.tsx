import React from "react";

interface Props {
  lang: string;
  t: any;
}

export default function HowItWorksSection({ t }: Props) {
  return (
    <section id="how" className="py-16 sm:py-24 bg-transparent animate-fadein">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl xs:text-3xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center animate-slideup">{t.howItWorks}</h2>
        <div className="flex flex-col md:flex-row gap-3 sm:gap-8 justify-center items-stretch">
          {t.howItWorksSteps.map(
            (s: { title: string; desc: string; icon: string }, i: number) => (
            <div key={s.title} className={`flex-1 flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-[#2c2f34]/80 shadow-lg border border-[#23272a] animate-fadein delay-${i*100} w-full`}>
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{s.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#f2f3f5] mb-1 sm:mb-2">{s.title}</h3>
              <p className="text-[#b9bbbe] text-sm sm:text-base">{s.desc}</p>
              {i < t.howItWorksSteps.length - 1 && (
                <div className="hidden md:block w-8 sm:w-12 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 my-4 sm:my-6 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
