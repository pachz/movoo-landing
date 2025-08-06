export const metadata = {
  title: "Apps - Muvx",
  description: "Page description",
};

import Hero from "./hero";

export default function Apps() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 mb-8">
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          Your privacy is important to us. This Privacy Policy explains how Muvx
          (“we”, “our”, or “us”) collects, uses, and protects your information
          when you interact with our platform, services, and website.
        </p>
        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-6 text-sm sm:text-base text-gray-700 space-y-2">
          <li>
            <strong>Business Information:</strong> Company name, contact
            details, delivery preferences.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, API usage logs, browser
            type, and cookies.
          </li>
          <li>
            <strong>Account Data:</strong> User IDs, roles, login timestamps,
            API keys.
          </li>
        </ul>
        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-6 text-sm sm:text-base text-gray-700 space-y-2">
          <li>To provide access to Muvx’s API services and dashboards</li>
          <li>To monitor performance and ensure platform security</li>
          <li>To respond to support requests and operational queries</li>
          <li>To improve our services through analytics and usage patterns</li>
        </ul>
        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          3. Sharing and Security
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-700">
          We do not sell or rent your data. Information may be shared with
          trusted third-party providers (e.g., cloud hosting, analytics tools)
          only as needed to support our operations and comply with legal
          obligations.
        </p>
        <p className="mb-6 text-sm sm:text-base text-gray-700">
          All data is encrypted in transit and at rest using industry-standard
          protocols.
        </p>
        <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-gray-800">
          4. Your Rights
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          You may request to access, update, or delete your personal data at any
          time. <br />
          Contact us at{" "}
          <a
            href="mailto:dev@Muvy.me"
            className="text-primary-500 hover:underline"
          >
            dev@Muvu.me
          </a>
          .
        </p>
      </div>
    </>
  );
}
