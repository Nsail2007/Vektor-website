import React from "react";



interface Props {
  lang: string;
  t: any;
}

export default function FeaturesSection({ t }: Props) {
  return (
    <section id="features" className="relative py-16 sm:py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-24 z-0 h-[420px] w-[520px] -translate-x-1/2 animate-flicker-slow"
        style={{
          background:
            "radial-gradient(35% 85% at 50% 0%, rgba(130,150,255,0.7), rgba(88,101,242,0.28) 35%, rgba(11,13,22,0) 72%)",
          filter: "blur(14px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-8 z-0 h-40 w-[60rem] -translate-x-1/2 rounded-full animate-flicker-slow"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(88,101,242,0.6) 0%, rgba(88,101,242,0.25) 45%, rgba(11,13,22,0) 70%)",
          filter: "blur(8px)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            {t.features}
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            {t.featuresSubtitle}
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <ul className="max-w-4xl mx-auto divide-y divide-white/10">
            {t.featuresList.map(
              (f: { title: string; desc: string; icon: string }, i: number) => (
                <li
                  key={f.title}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-4 sm:py-5"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">{f.icon}</span>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {f.title}
                    </h3>
                  </div>
                  <div className="sm:ml-auto sm:max-w-xl text-sm sm:text-base text-white/70 leading-relaxed">
                    {f.desc}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
