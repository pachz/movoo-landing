import PlanetImg from "@/public/images/planet.png";
import Delivery from "@/public/images/delivery.png";
import Image from "next/image";

export default function Whether() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-10">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Whether You’re a Business or Delivery Provider, Muvu Works for You
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-4 md:pb-6" data-aos="zoom-y-out">
            <div className="relative text-center">
              <div
                className="pointer-events-none absolute inset-0 flex justify-center items-center"
                aria-hidden="true"
              >
                <Image
                  className="max-w-sm md:max-w-md opacity-40"
                  src={PlanetImg}
                  width={800}
                  height={800}
                  alt="Planet decoration"
                />
              </div>
              <div className="relative w-fit mx-auto before:absolute before:inset-0 before:blur-3xl before:bg-primary-600/10 before:scale-100 before:rounded-[50%]">
                <Image
                  className="relative z-10 rounded-full "
                  src={Delivery}
                  width={600}
                  height={600}
                  alt="Planet"
                />
              </div>
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-primary-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-primary-500),transparent)]"></div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-2 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-bold text-xl text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary-500)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                  <circle cx="17" cy="18" r="2" />
                  <circle cx="7" cy="18" r="2" />
                </svg>
                <span>Delivery Providers</span>
              </h3>
              <p className="text-[15px] text-gray-400 text-lg">
                One Integration. Many Clients. Connect with Muvu once to easily
                reach restaurants, e-commerce platforms, and more.
                <br />
                <br /> - Get listed in Muvu’s provider catalog
                <br /> - Send partnership requests to Restaurants and Ecommerce
                <br /> - Receive synced delivery orders in real time
                <br /> - Manage orders with filters and smart tools
                <br /> - Focus on fulfillment, not integrations
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-bold text-xl text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary-500)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <span>Businesses & Merchants</span>
              </h3>
              <p className="text-[15px] text-gray-400 text-lg">
                One Platform. Full Delivery Control. Connect your store once to
                manage all your delivery partners from one place.
                <br />
                <br />
                - No more tech overhead when switching or adding providers.
                <br /> - Use our APIs, SDKs, or platform plugins
                <br /> - Choose from Muvu’s growing delivery partner catalog
                <br /> - Track every shipment in real time
                <br />- Debug and manage integrations with ease
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
