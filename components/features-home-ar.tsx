import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02-overlay-01.png";
import FeatureImg02 from "@/public/images/features-02-overlay-02.png";
import FeatureImg03 from "@/public/images/features-02-overlay-03.png";
import Landing1 from "@/public/images/LANDING2.jpg";

export default function FeaturesHomeAr() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-primary-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-6 md:py-10">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              لماذا موفو مهمة؟
            </h2>
            <p className="text-lg text-gray-700">
              نحن نمكن الشركات من فتح تكامل التوصيل السلس، وتقليل التعقيد،
              وإسعاد العملاء بحلول لوجستية موثوقة ومرنة.
            </p>
          </div>
          {/* Illustration */}
          <div className="group relative mx-auto mb-16 flex w-full max-w-[800px] justify-center md:mb-20">
            <div className=" pointer-events-none ">
              <Image
                className="-rotate-1  rounded-lg  shadow-xl shadow-black-50 "
                src={Landing1}
                alt="Overlay 03"
              />
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-gray-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] md:*:px-10 md:*:py-12">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-primary-500"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M311.168 225.835L481.835 55.168q12.5-12.5 30.165-12.5 17.664 0 30.165 12.5l170.667 170.667q12.5 12.5 12.5 30.165 0 17.664-12.5 30.165-12.5 12.502-30.165 12.502-17.664 0-30.166-12.502L512 145.665l-140.5 140.5q-12.503 12.502-30.167 12.502t-30.165-12.502q-12.5-12.5-12.5-30.165 0-17.664 12.5-30.165zm243.5-140.502V524.8q.98 89.26-62.508 152.704L200.832 968.832q-12.5 12.5-30.165 12.5-17.664 0-30.166-12.5-12.5-12.5-12.5-30.165 0-17.664 12.5-30.166l291.33-291.327q38.1-38.058 37.503-92.373V85.333q0-17.664 12.502-30.165 12.5-12.5 30.165-12.5 17.664 0 30.165 12.5 12.502 12.5 12.502 30.165zm268.5 883.5L609.835 755.498q-12.502-12.503-12.502-30.167t12.502-30.165q12.5-12.5 30.165-12.5 17.664 0 30.165 12.5L883.5 908.5q12.5 12.503 12.5 30.167t-12.5 30.165q-12.503 12.5-30.167 12.5t-30.165-12.5z" />
                </svg>
                <span>تكامل سلس</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                واجهة برمجة موحدة تربطك بجميع مقدمي خدمات التوصيل الرئيسيين في
                المنطقة.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
                </svg>
                <span>سرعة في التنفيذ</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                ابدأ في دقائق مع وثائق واضحة وأمثلة عملية للتنفيذ السريع.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" />
                </svg>
                <span>مرونة في التوسع</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                بنية تحتية قابلة للتوسع تنمو مع عملك وتدعم أحجام الطلبات
                المختلفة.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c6 8.3 15.6 13.3 25.9 13.3s19.9-4.9 25.9-13.3l212.6-294.5c3.8-5.3 0-12.7-6.5-12.7z" />
                </svg>
                <span>موثوقية عالية</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                وقت تشغيل 99.9% مع مراقبة مستمرة ونسخ احتياطية تلقائية.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M512 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                </svg>
                <span>رؤية شاملة</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                لوحة تحكم تفاعلية تمنحك رؤية واضحة لجميع عمليات التوصيل.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary-500"
                  width={16}
                  height={16}
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M512 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                </svg>
                <span>دعم متميز</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                فريق دعم متخصص متاح على مدار الساعة لمساعدتك في كل خطوة.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
