import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.webp";
import PlanetTagImg02 from "@/public/images/planet-tag-02.webp";
import PlanetTagImg03 from "@/public/images/planet-tag-03.webp";
import PlanetTagImg04 from "@/public/images/planet-tag-04.webp";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Simplify, Scale, and Supercharge Your Last-Mile Delivery
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-primary-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-primary-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-85 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-85 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-primary-500"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M311.168 225.835L481.835 55.168q12.5-12.5 30.165-12.5 17.664 0 30.165 12.5l170.667 170.667q12.5 12.5 12.5 30.165 0 17.664-12.5 30.165-12.5 12.502-30.165 12.502-17.664 0-30.166-12.502L512 145.665l-140.5 140.5q-12.503 12.502-30.167 12.502t-30.165-12.502q-12.5-12.5-12.5-30.165 0-17.664 12.5-30.165zm243.5-140.502V524.8q.98 89.26-62.508 152.704L200.832 968.832q-12.5 12.5-30.165 12.5-17.664 0-30.166-12.5-12.5-12.5-12.5-30.165 0-17.664 12.5-30.166l291.33-291.327q38.1-38.058 37.503-92.373V85.333q0-17.664 12.502-30.165 12.5-12.5 30.165-12.5 17.664 0 30.165 12.5 12.502 12.5 12.502 30.165zm268.5 883.5L609.835 755.498q-12.502-12.503-12.502-30.167t12.502-30.165q12.5-12.5 30.165-12.5 17.664 0 30.165 12.5L883.5 908.5q12.5 12.503 12.5 30.167t-12.5 30.165q-12.503 12.5-30.167 12.5t-30.165-12.5z" />
                </svg>
                <span>Unified Integration</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Connect with multiple delivery service providers through one
                easy-to-use API, no more juggling complex integration.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M170.795 640h-.128q-53.846.128-77.1-48.512-23.295-48.683 10.668-90.58 1.194-1.495 2.517-2.817L528.427 63.617q33.194-37.29 77.653-13.483 45.1 24.107 31.53 73.387-.213.853-.47 1.664l-81.92 256.853-.68 1.963h298.793q53.803-.17 77.1 48.512 23.295 48.683-10.668 90.58-1.194 1.495-2.517 2.817L495.573 960.383q-33.194 37.29-77.653 13.483-45.1-24.107-31.53-73.387.213-.853.47-1.664l81.92-256.853.68-1.963zm-.043-85.333h298.453q44.715-.128 70.315 36.565 25.216 36.224 10.283 77.525l-53.76 168.62 357.205-368.044H554.795q-44.715.128-70.315-36.565-25.216-36.224-10.283-77.525l53.76-168.62-357.205 368.044z" />
                </svg>
                <span>Faster Time-to-Market</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Launch and scale delivery operations quickly without waiting for
                lengthy development cycles.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M213.333 85.333H384q128 0 128 128V384q0 128-128 128H213.333q-128 0-128-128V213.333q0-128 128-128zm0 85.334q-42.666 0-42.666 42.666V384q0 42.667 42.666 42.667H384q42.667 0 42.667-42.667V213.333q0-42.666-42.667-42.666zm128 298.666V640q0 42.667 42.667 42.667h170.667q17.664 0 30.165 12.5 12.5 12.502 12.5 30.166t-12.5 30.166q-12.5 12.5-30.165 12.5H384q-128 0-128-128V469.333q0-17.664 12.5-30.165 12.503-12.5 30.167-12.5t30.165 12.5q12.5 12.5 12.5 30.165zM640 512h170.667q128 0 128 128v170.667q0 128-128 128H640q-128 0-128-128V640q0-128 128-128zm0 85.333q-42.667 0-42.667 42.667v170.667q0 42.666 42.667 42.666h170.667q42.666 0 42.666-42.666V640q0-42.667-42.666-42.667z" />
                </svg>
                <span>Standardized Logistics Flows</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Streamline your delivery processes with consistent, reliable
                workflows across all providers.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  className="fill-primary-500"
                >
                  <path d="M682.667 85.333H896q17.664 0 30.165 12.502 12.502 12.5 12.502 30.165v213.333q0 17.664-12.502 30.166Q913.665 384 896 384q-17.664 0-30.165-12.5-12.502-12.503-12.502-30.167V170.667H682.667q-17.664 0-30.166-12.502Q640 145.665 640 128q0-17.664 12.5-30.165 12.503-12.502 30.167-12.502zm-341.334 85.334H170.667v170.666q0 17.664-12.502 30.166Q145.665 384 128 384q-17.664 0-30.165-12.5-12.502-12.503-12.502-30.167V128q0-17.664 12.502-30.165 12.5-12.502 30.165-12.502h213.333q17.664 0 30.166 12.502Q384 110.335 384 128q0 17.664-12.5 30.165-12.503 12.502-30.167 12.502zm128 768V584.533q.598-54.314-37.504-92.373L97.834 158.165Q85.333 145.665 85.333 128q0-17.664 12.502-30.165 12.5-12.502 30.165-12.502 17.664 0 30.165 12.502L492.16 431.83q63.488 63.445 62.507 152.703v354.134q0 17.664-12.502 30.165-12.5 12.5-30.165 12.5-17.664 0-30.165-12.5-12.502-12.5-12.502-30.165zm140.502-584.832l256-256q12.5-12.502 30.165-12.502 17.664 0 30.165 12.502 12.502 12.5 12.502 30.165 0 17.664-12.502 30.165l-256 256q-12.5 12.502-30.165 12.502-17.664 0-30.165-12.502-12.502-12.5-12.502-30.165 0-17.664 12.502-30.165z" />
                </svg>
                <span>Flexible Delivery Options</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Support on-demand, scheduled, and multi-industry deliveries,
                from e-commerce to groceries and beyond
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M565.077 54.187L931.115 220.8q50.944 22.443 50.944 78.08t-50.476 77.867l-366.037 166.4q-53.12 24.234-106.24 0L93.74 376.533q-50.945-22.442-50.945-78.08 0-55.637 50.474-77.866l365.61-166.4q53.12-24.235 106.197 0zm-35.37 77.653q-17.707-8.064-35.414 0l-365.696 166.4-.47.213 366.593 167.04q17.707 8.064 35.413 0l366.123-166.4.47-.213-366.977-167.04zM128 512.085l366.677 166.742q17.536 7.936 35.158-.043L895.83 512.427l.17-.086q-.128-17.663 12.245-30.25 12.416-12.63 30.08-12.757 17.664-.128 30.25 12.246 12.63 12.415 12.758 30.08.427 55.68-50.176 78.42L564.992 756.523q-52.78 23.893-105.643-.043L92.16 589.568q-49.62-22.997-49.493-77.653.042-17.707 12.586-30.166 12.502-12.46 30.166-12.417 17.705.043 30.164 12.587 12.46 12.5 12.416 30.165zm0 213.334l366.677 166.74q17.536 7.936 35.158-.043L895.83 725.76l.17-.085q-.128-17.664 12.245-30.25 12.416-12.63 30.08-12.758 17.664-.128 30.25 12.245 12.63 12.416 12.758 30.08.427 55.68-50.176 78.42L564.992 969.857q-52.78 23.893-105.643-.043L92.16 802.9q-49.62-22.996-49.493-77.652.042-17.707 12.586-30.165 12.502-12.46 30.166-12.416 17.705.042 30.164 12.586 12.46 12.502 12.416 30.166z" />
                </svg>
                <span>Future-Proof Infrastructure</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Build on a scalable platform designed to evolve with your
                business needs and new industry verticals.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M981.333 512q0 194.39-137.472 331.86Q706.39 981.334 512 981.334q-194.39 0-331.86-137.472Q42.666 706.39 42.666 512q0-194.39 137.472-331.86Q317.61 42.666 512 42.666q194.39 0 331.86 137.472Q981.334 317.61 981.334 512zM896 512q0-159.06-112.47-271.53Q671.06 128 512 128q-159.06 0-271.53 112.47Q128 352.94 128 512q0 159.06 112.47 271.53Q352.94 896 512 896q159.06 0 271.53-112.47Q896 671.06 896 512zm-520.533 59.733Q426.667 640 512 640q85.333 0 136.533-68.267 10.624-14.122 28.118-16.64 17.494-2.517 31.617 8.107 14.122 10.624 16.64 28.117 2.517 17.494-8.107 31.616-76.8 102.4-204.8 102.4t-204.8-102.4q-10.624-14.122-8.107-31.616 2.518-17.493 16.64-28.117 14.123-10.624 31.616-8.107 17.493 2.518 28.117 16.64zm8.533-230.4h.427q17.664 0 30.165 12.502 12.5 12.5 12.5 30.165 0 17.664-12.5 30.165-12.5 12.502-30.165 12.502H384q-17.664 0-30.165-12.502-12.502-12.5-12.502-30.165 0-17.664 12.502-30.165 12.5-12.502 30.165-12.502zm256 0h.427q17.664 0 30.165 12.502 12.5 12.5 12.5 30.165 0 17.664-12.5 30.165-12.5 12.502-30.165 12.502H640q-17.664 0-30.165-12.502-12.502-12.5-12.502-30.165 0-17.664 12.502-30.165 12.5-12.502 30.165-12.502z" />
                </svg>
                <span>Enhanced Customer </span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Experience  Deliver faster and more reliably, improving
                satisfaction and driving repeat business.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
