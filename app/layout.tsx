import "./css/style.css";

import { Inter } from "next/font/google";
import { PostHogProvider } from "../components/PostHogProvider";
import { isStaging } from "@/utils/env";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "One API for Every Delivery Need",
  description:
    "Muvx is the infrastructure layer for last-mile delivery integration, starting with e-commerce and expanding across industries. Connect to multiple delivery providers through a single, unified interface and scale your logistics with speed and flexibility.",
  ...(isStaging() && {
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <PostHogProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}