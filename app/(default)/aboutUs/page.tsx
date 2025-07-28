export const metadata = {
  title: "About us - Muvu",
  description: "Page description",
};

import { Mail, Globe } from "lucide-react";
import Hero from "./hero";

export default function Support() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-3xl mb-5">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Muvu – Smarter Delivery Connections
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          Muvu is a technology-driven delivery integration platform that
          empowers businesses and delivery providers to connect seamlessly
          through a single, unified API hub. Our goal is simple: streamline
          last-mile logistics for better speed, transparency, and control.
        </p>
        <p className="mb-6 text-lg text-gray-700">
          We understand the complexities of modern e-commerce and the need for
          flexible, scalable delivery systems. Whether you’re a business looking
          to offer multiple delivery options or a logistics partner aiming to
          expand your reach, Muvu helps you bridge the gap with ease.
        </p>
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          What We Offer:
        </h2>
        <ul className="mb-6 list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Seamless API integration with major delivery providers</li>
          <li>Real-time order dispatching and tracking</li>
          <li>Smart delivery routing and optimization tools</li>
          <li>A clean, intuitive dashboard for operations and analytics</li>
        </ul>
        <p className="mb-4 text-lg text-gray-700">
          We’re here to make delivery smarter—for everyone.
        </p>
        <h2 className="mb-2 text-xl font-semibold text-gray-800">ContactUs</h2>
        <div className="mt-6 space-y-2 text-lg text-gray-700">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-0.5 text-gray-600" />
            <span>dev@muvu.me</span>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 mt-0.5 text-gray-600" />
            <span>www.muvu.me</span>
          </div>
        </div>
      </div>
    </>
  );
}
