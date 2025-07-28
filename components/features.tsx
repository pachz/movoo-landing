"use client";

import Image from "next/image";
import AdminPanel from "@/public/images/Admin.png";
import Seamless from "@/public/images/Seamless.png";
import Live from "@/public/images/liveDebugger.png";
import Track from "@/public/images/Track.png";

const features = [
  {
    title: "Admin Panel for Full Control",
    desc: "Review orders, test scenarios, and configure integration all from a single dashboard.",
    img: AdminPanel,
    flip: true,
  },
  {
    title: "Seamless Order Management",
    desc: "Create and dispatch orders directly from your e-commerce system using Muvu’s unified API.",
    img: Seamless,
    flip: false,
  },
  {
    title: "Live API Debugger",
    desc: "Monitor API health and troubleshoot issues in real time with Muvu’s built-in live debugger for smooth, reliable integration.",
    img: Live,
    flip: true,
  },

  {
    title: "Track Deliveries in Real-Time",
    desc: "Receive live updates on delivery and payment statuses with webhooks or interval polling, stay in the loop effortlessly.",
    img: Track,
    flip: false,
  },
];

export default function FeaturesDemoSection() {
  return (
    <section className="relative z-0 overflow-hidden">
      {/* Top Border */}
      <div className="absolute inset-x-0 top-0 h-px z-10 before:absolute before:inset-0 before:border-t before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.6),transparent)1]" />

      {/* Bottom Border */}
      <div className="absolute inset-x-0 bottom-0 h-px z-10 before:absolute before:inset-0 before:border-t before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.6),transparent)1]" />

      {/* Main Content */}
      <div className="bg-gray-50 py-20 relative z-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              See Muvu in Action, Simple, Powerful Delivery Management
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Our intuitive panel makes last-mile delivery integration
              effortless. Here’s how it works and the key features we offer out
              of the box:
            </p>
          </div>

          {/* Features */}
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 ${
                  feature.flip
                    ? "md:flex-row-reverse animate-fade-in-right"
                    : "animate-fade-in-left"
                }`}
              >
                {/* Background glow */}
                <div
                  className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-primary-500 to-primary-900 opacity-40 blur-[160px] will-change-[filter]" />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[15px]">{feature.desc}</p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full sm:w-[90%] md:w-[85%] max-w-md rounded-lg overflow-hidden bg-white shadow-md p-2 hover:scale-105 transform transition duration-500">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-auto"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
