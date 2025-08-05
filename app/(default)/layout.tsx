"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { usePathname } from "next/navigation";
import DocHeader from "@/components/ui/docHeader";

export default function DefaultLayout({
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

  const pathname = usePathname();
  const isDocumentation = pathname.startsWith("/documentation");

  return (
    <>
      {isDocumentation ? <DocHeader /> : <Header />}
      <main className="grow">{children}</main>
      <Footer border={true} />
    </>
  );
}
