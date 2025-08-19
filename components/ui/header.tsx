import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center w-24 h-12">
            <Image src={Logo} alt="Stripes" />
          </div>
          {/* Centered nav and auth */}
          <div className="flex flex-1 items-center justify-center gap-6">
            <nav className="hidden lg:flex">
              {/* Desktop menu links */}
              <ul className="flex flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
                {/* <li className="px-3 py-1">
                  <a
                    href="#home"
                    className="flex items-center text-gray-700 transition hover:text-gray-900"
                  >
                    Home
                  </a>
                </li> */}
                <li className="px-3 py-1">
                  <a
                    href="#how-it-works"
                    className="flex items-center text-gray-700 transition hover:text-gray-900"
                  >
                    How it works?
                  </a>
                </li>
                <li className="px-3 py-1">
                  <a
                    href="#why-us"
                    className="flex items-center text-gray-700 transition hover:text-gray-900"
                  >
                    Why Us?
                  </a>
                </li>
                <li className="px-3 py-1">
                  <a
                    href="#features"
                    className="flex items-center text-gray-700 transition hover:text-gray-900"
                  >
                    Feature Overview
                  </a>
                </li>
                <li className="px-3 py-1">
                  <a
                    href="/documentation"
                    className="flex items-center text-gray-700 transition hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </nav>
            <ul className="hidden lg:flex items-center gap-3">
              <li className="px-3 py-1">
                <Link
                  href="https://panel.muvx.ai/signin"
                  className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                >
                  Login
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="https://panel.muvx.ai/signup"
                  className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
