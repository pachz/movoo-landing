"use client";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default function DocHeader() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between rounded-2xl bg-white/90 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-xs">
          <div className="flex items-center w-24 h-12">
            <Image src={Logo} alt="Stripes" />
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://panel.muvx.ai/signin"
              className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              href="https://panel.muvx.ai/signup"
              className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
