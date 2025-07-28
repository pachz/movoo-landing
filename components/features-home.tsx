import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02-overlay-01.png";
import FeatureImg02 from "@/public/images/features-02-overlay-02.png";
import FeatureImg03 from "@/public/images/features-02-overlay-03.png";
import Landing1 from "@/public/images/LANDIN1.jpg";

export default function FeaturesHome() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-primary-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-24 text-center md:pb-28">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Muvu Matters?
            </h2>
            <p className="text-lg text-gray-700">
              We empower businesses to unlock seamless delivery integration,
              reduce complexity, and delight customers with reliable, flexible
              logistics solutions.
            </p>
          </div>
          {/* Illustration */}
          <div
            className="group relative mx-auto mb-32 flex w-full max-w-[500px] justify-center md:mb-36"
            data-aos="zoom-y-out"
          >
            <div className=" pointer-events-none translate-y-2 transition delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-0">
              <Image
                className="-rotate-1  rounded-lg  shadow-xl shadow-black-50 "
                src={Landing1}
                width={500}
                height={91}
                alt="Overlay 03"
              />
            </div>
            {/* <div className="absolute bottom-0 -z-10" aria-hidden="true">
              <div className="h-80 w-80 rounded-full bg-primary-500 opacity-70 blur-[160px] will-change-[filter]" />
            </div> */}
            {/* <div className="aspect-video w-full -rotate-1 rounded-2xl bg-gray-900 px-5 py-3 shadow-xl transition duration-300 group-hover:-rotate-0">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  AI Project
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 blur-xs will-change-[filter] transition duration-300 group-hover:blur-none [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=@phanatic
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Package published.
                </span>
              </div>
            </div> */}
            {/* <div className="absolute top-16">
              <div className="pointer-events-none mb-[7%] translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image
                  className="-rotate-2"
                  src={FeatureImg01}
                  width={500}
                  height={72}
                  alt="Overlay 01"
                />
              </div>
              <div className="delay-50 pointer-events-none mb-[3.5%] translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image src={FeatureImg02} width={500} alt="Overlay 02" />
              </div>
              <div className="pointer-events-none translate-y-2 transition delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image
                  className="-rotate-1"
                  src={FeatureImg03}
                  width={500}
                  height={91}
                  alt="Overlay 03"
                />
              </div>
            </div> */}
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-gray-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] md:*:px-10 md:*:py-12">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={20}
                  height={20}
                >
                  <path d="M521.387 42.667q128 0 128 128v7.637q.042 24.62 21.46 36.95l18.22 10.623q21.333 12.33 42.666 0 .64-.34 1.238-.682l5.803-3.115q110.25-63.147 174.08 47.104l9.43 16.256q63.872 110.677-46.166 174.38l-6.997 4.223q-21.42 12.373-21.333 37.29v21.504q-.086 24.448 20.778 36.822l5.718 3.028q.64.34 1.28.725 110.592 64.043 46.933 174.336l-9.643 17.066q-63.83 110.25-174.08 47.104l-5.802-3.115q-.597-.34-1.237-.682-21.333-12.33-42.538-.043l-18.475 10.71q-21.29 12.287-21.333 36.863v7.68q0 128-128 128h-18.774q-128 0-128-128v-7.637q-.042-24.62-21.46-36.95l-18.22-10.623q-21.333-12.33-42.666 0-.64.34-1.238.682l-5.803 3.115q-110.25 63.147-174.08-47.104l-9.43-16.256q-63.872-110.677 46.166-174.38l6.997-4.223q21.42-12.373 21.333-37.29v-21.504q-.128-24.448-21.333-36.694-1.195-.683-2.347-1.45l-5.333-3.543q-108.97-63.957-45.44-174.08l9.387-16.213q63.83-110.25 174.08-47.104l5.802 3.115q.597.34 1.237.682 21.333 12.33 42.538.043l18.475-10.71q21.29-12.287 21.333-36.863v-7.68q0-128 128-128zm0 85.333h-18.774q-42.666 0-42.666 42.667v7.68q-.086 73.856-64 110.762l-18.22 10.623q-63.786 36.822-127.444.427l-5.846-3.115q-.597-.298-1.237-.682-36.864-21.29-58.24 15.573l-9.387 16.213q-21.248 36.82 15.616 58.197 1.15.64 2.303 1.408l5.334 3.54q62.293 36.694 62.72 109.356v22.017q.298 74.07-64 111.19l-5.803 3.455q-37.42 21.717-16.128 58.58l9.344 16.172q21.376 36.864 58.24 15.573.64-.384 1.237-.682l5.846-3.115q63.658-36.395 127.317.384l18.475 10.71q63.786 36.863 63.872 110.677v7.723q0 42.667 42.666 42.667h18.774q42.666 0 42.666-42.667v-7.68q.086-73.856 64-110.762l18.22-10.623q63.786-36.822 127.444-.427l5.846 3.115q.597.298 1.237.682 36.864 21.29 58.24-15.573l9.13-16.213q21.334-36.95-14.805-58.282l-5.674-3.03q-.597-.34-1.237-.682-64.298-37.12-64-111.36v-21.163q-.298-74.07 64-111.19l5.803-3.455q37.42-21.717 16.128-58.58l-9.344-16.172q-21.376-36.864-58.24-15.573-.64.384-1.237.682l-5.846 3.115q-63.658 36.395-127.317-.384l-18.475-10.71q-63.786-36.863-63.872-110.677v-7.723q0-42.667-42.666-42.667zm161.28 384q0 170.667-170.667 170.667T341.333 512q0-170.667 170.667-170.667T682.667 512zm-85.334 0q0-85.333-85.333-85.333T426.667 512q0 85.333 85.333 85.333T597.333 512z" />
                </svg>
                <span>Simplicity at Scale</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                We eliminate technical roadblocks by providing a single, unified
                API that scales effortlessly as your delivery needs grow.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={20}
                  height={20}
                >
                  <path d="M896 554.667q0 298.24-355.456 422.144-28.8 9.77-56.96-.51Q128 853.332 128 554.666V256q0-85.333 85.333-85.333 117.376 0 238.166-105.515 60.5-51.712 120.66-.3 121.045 105.815 238.507 105.815Q896 170.667 896 256zm-85.333 0V256q-149.504 0-293.974-126.293-4.693-4.01-9.045-.3Q362.752 256 213.333 256v298.667q0 238.037 298.496 341.12.51.17.98.34 297.857-103.978 297.857-341.46zm-396.502-72.832l55.168 55.168L609.835 396.5Q622.335 384 640 384q17.664 0 30.165 12.5 12.502 12.503 12.502 30.167t-12.502 30.165L499.5 627.5Q486.996 640 469.332 640t-30.165-12.5l-85.333-85.335q-12.502-12.5-12.502-30.165 0-17.664 12.502-30.165 12.5-12.502 30.165-12.502 17.664 0 30.165 12.502z" />
                </svg>
                <span>Reliability You Can Trust</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                Our platform ensures consistent performance and smooth logistics
                flows, so your deliveries arrive on time, every time.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={20}
                  height={20}
                >
                  <path d="M104.747 514.688l171.946-103.253q21.974-13.184 43.904 0l213.334 128Q554.668 551.85 554.668 576v234.667q0 24.15-20.736 36.608L364.588 948.78q-65.92 39.593-131.798 0l-128.043-76.8q-61.91-37.207-62.08-109.527V624.128q.17-72.235 62.08-109.44zm43.946 73.13Q128.043 600.236 128 624.3v138.155q.043 23.98 20.693 36.395l127.958 76.8q22.017 13.184 43.99 0l148.693-89.13v-186.37l-170.666-102.4zm128 152.747l-202.24-121.6q-15.146-9.088-19.413-26.24-4.267-17.152 4.82-32.298 9.09-15.147 26.24-19.414 17.153-4.266 32.3 4.822l202.24 121.6q15.147 9.088 19.413 26.24 4.267 17.152-4.82 32.298-9.09 15.147-26.24 19.414-17.153 4.266-32.3-4.822zm.043-73.13l213.333-128q15.146-9.13 32.298-4.822 17.11 4.267 26.197 19.456 9.13 15.146 4.822 32.298-4.267 17.11-19.456 26.197l-213.333 128q-15.146 9.13-32.298 4.822-17.11-4.267-26.2-19.456-9.13-15.146-4.82-32.298 4.267-17.11 19.456-26.197zM341.333 704v220.587q0 17.664-12.5 30.165-12.502 12.5-30.166 12.5t-30.166-12.5q-12.5-12.5-12.5-30.165V704q0-17.664 12.5-30.165 12.503-12.502 30.167-12.502t30.165 12.502q12.5 12.5 12.5 30.165zm128-128q0-24.15 20.736-36.565l213.333-128q21.93-13.184 43.904 0l171.946 103.253q61.91 37.205 62.08 109.525V762.54q-.17 72.233-62.122 109.44l-127.957 76.8q-65.92 39.593-131.797.04L490.07 847.276q-20.737-12.46-20.737-36.608zm85.334 24.15v186.367l148.65 89.088q22.016 13.227 43.99.043l128.042-76.8q20.607-12.416 20.65-36.48V624.213q-.043-23.978-20.693-36.394l-149.974-90.07-170.666 102.4zm148.736 140.415l-213.334-128q-15.19-9.088-19.457-26.197-4.31-17.152 4.822-32.3 9.088-15.188 26.197-19.455 17.152-4.31 32.3 4.822l213.332 128q15.19 9.088 19.456 26.197 4.31 17.152-4.82 32.3-9.09 15.188-26.2 19.455-17.15 4.31-32.297-4.822zm-.043-73.13l202.24-121.6q15.147-9.088 32.3-4.822 17.15 4.267 26.24 19.414 9.087 15.146 4.82 32.298-4.267 17.152-19.413 26.24l-202.24 121.6q-15.147 9.088-32.3 4.822-17.15-4.267-26.24-19.414-9.087-15.146-4.82-32.298 4.266-17.152 19.413-26.24zM768 704v220.587q0 17.664-12.5 30.165-12.503 12.5-30.167 12.5t-30.165-12.5q-12.5-12.5-12.5-30.165V704q0-17.664 12.5-30.165 12.5-12.502 30.165-12.502 17.664 0 30.166 12.502Q768 686.335 768 704zM318.123 152.02l127.957-76.8q65.92-39.593 131.797 0l128.043 76.8q61.91 37.207 62.08 109.527V448q0 24.15-20.736 36.565l-213.333 128q-21.93 13.184-43.86 0l-213.334-128Q256 472.15 256 448V261.46q.17-72.233 62.08-109.44zm43.904 73.132h-.043q-20.608 12.416-20.65 36.48v162.22L512 526.25l170.667-102.4V261.546q-.043-23.98-20.694-36.395l-127.957-76.8q-22.016-13.184-43.99 0zm128 152.747l-202.24-121.6q-15.147-9.09-19.414-26.24-4.266-17.153 4.822-32.3 9.088-15.147 26.24-19.413 17.152-4.267 32.298 4.82l202.24 121.6q15.147 9.09 19.414 26.24 4.266 17.153-4.822 32.3-9.088 15.146-26.24 19.413-17.152 4.267-32.298-4.82zm0-73.132l202.24-121.6q15.146-9.088 32.298-4.82 17.152 4.265 26.24 19.412 9.088 15.147 4.822 32.3-4.267 17.15-19.414 26.24l-202.24 121.6q-15.146 9.087-32.298 4.82-17.152-4.267-26.24-19.413-9.088-15.147-4.822-32.3 4.267-17.15 19.414-26.24zM469.333 576V341.333q0-17.664 12.502-30.165 12.5-12.5 30.165-12.5 17.664 0 30.165 12.5 12.502 12.5 12.502 30.165V576q0 17.664-12.502 30.165-12.5 12.502-30.165 12.502-17.664 0-30.165-12.502-12.502-12.5-12.502-30.165z" />
                </svg>
                <span>Industry-Wide Flexibility</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                From e-commerce to restaurants, pharmacies, and beyond, Muvu
                adapts to serve diverse delivery models and business
                requirements.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
