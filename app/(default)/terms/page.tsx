export const metadata = {
  title: "Apps - Muvx",
  description: "Muvx - One Integration. Endless Delivery Options. Tired of re-integrating every time you switch partners? Muvx connects businesses and delivery services through a single, smart API.",
};

import Hero from "./hero";

export default function Apps() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 mb-8">
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          Welcome to Muvx. By accessing or using our platform, APIs, or
          services, you agree to the following terms:
        </p>

        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          1. Use of the Platform
        </h2>
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          Muvx provides a delivery API hub that connects e-commerce platforms
          and delivery service providers. By registering, you represent that you
          are authorized to act on behalf of your company. You agree to use Muvx
          in compliance with all applicable laws and not misuse the platform for
          unauthorized or illegal purposes.
        </p>

        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          2. API Access & Fair Use
        </h2>
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          API access is provided under subscription or commercial agreement.
          Abuse, overuse beyond agreed limits, or reverse-engineering of the API
          is prohibited. We reserve the right to limit or revoke access at any
          time.
        </p>

        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          3. Availability & Downtime
        </h2>
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          While we strive for uninterrupted service, we do not guarantee 100%
          uptime. Planned maintenance and unforeseen outages may occur.
        </p>

        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          4. Liability
        </h2>
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          Muvx is not liable for delivery failures, delays, or damages caused by
          third-party providers. Our role is to facilitate the technical
          integration between businesses and logistics partners.
        </p>

        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          5. Termination
        </h2>
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          We reserve the right to suspend or terminate accounts that violate
          these terms, abuse the platform, or pose security risks.
        </p>

        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          6. Governing Law
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          These terms are governed by the laws of Kuwait.
        </p>
      </div>
    </>
  );
}
