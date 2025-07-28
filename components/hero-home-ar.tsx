import PageIllustration from "@/components/page-illustration";

export default function HeroHomeAr() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-10 pt-32 md:pb-10 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              موفو - واجهة برمجة واحدة لكل احتياجات التوصيل
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                موفو هي الطبقة التحتية لتكامل التوصيل في المرحلة الأخيرة، بدءاً من التجارة الإلكترونية والتوسع عبر الصناعات. اتصل بمقدمي خدمات التوصيل المتعددين من خلال واجهة موحدة واحدة وقم بتوسيع نطاق الخدمات اللوجستية الخاصة بك بسرعة ومرونة.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-primary-600 to-primary-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      ابدأ مجاناً{" "}
                      <span className="mr-1 tracking-normal text-white transition-transform group-hover:-translate-x-0.5">
                        &lt;-
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:mr-4 sm:w-auto"
                    href="#0"
                  >
                    اعرف المزيد
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 