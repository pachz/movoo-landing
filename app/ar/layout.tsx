"use client";

import { useEffect } from "react";
import "../css/style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Noto_Sans_Arabic } from "next/font/google";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
});

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div 
      dir="rtl" 
      lang="ar"
      className={`${notoSansArabic.variable} font-noto-sans-arabic`}
    >
      {children}
    </div>
  );
}
