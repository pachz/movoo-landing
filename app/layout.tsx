import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "One API for Every Delivery Need",
  description:
    "Muvx is the infrastructure layer for last-mile delivery integration, starting with e-commerce and expanding across industries. Connect to multiple delivery providers through a single, unified interface and scale your logistics with speed and flexibility.",
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
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
