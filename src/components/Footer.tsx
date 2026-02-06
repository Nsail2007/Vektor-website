import React from "react";

interface Props {
  lang: string;
  t: any;
}

export default function Footer(props: Props) {
  const { t } = props;
  return (
    <footer className="w-full py-6 sm:py-8 bg-transparent text-center text-[#72767d] text-xs sm:text-sm mt-6 sm:mt-10 animate-fadein px-4">
      <div className="mb-1 sm:mb-2">
        {t.footerContact} <a href="mailto:info@vektor.ai" className="underline hover:text-[#f2f3f5]">info@vektor.ai</a>
      </div>
      <div className="mb-1 sm:mb-2">© {new Date().getFullYear()} Vektor Voice Assistant. {t.footerRights}</div>
      <div>
        <a href="#" className="hover:text-[#f2f3f5] mx-1 sm:mx-2">{t.footerTerms}</a>|
        <a href="#" className="hover:text-[#f2f3f5] mx-1 sm:mx-2">{t.footerPrivacy}</a>
      </div>
    </footer>
  );
}
