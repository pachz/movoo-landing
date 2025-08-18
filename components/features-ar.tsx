"use client";

import Image from "next/image";
import AdminPanel from "@/public/images/Admin2.webp";
import Seamless from "@/public/images/Seamless2.webp";
import Live from "@/public/images/liveDebugger2.webp";
import Track from "@/public/images/Track2.webp";

const features = [
  {
    title: "لوحة تحكم للتحكم الكامل",
    desc: "راجع الطلبات، اختبر السيناريوهات، وكون التكامل من لوحة تحكم واحدة.",
    img: AdminPanel,
    flip: true,
  },
  {
    title: "إدارة الطلبات السلسة",
    desc: "أنشئ وأرسل الطلبات مباشرة من نظام التجارة الإلكترونية الخاص بك باستخدام واجهة موفو الموحدة.",
    img: Seamless,
    flip: false,
  },
  {
    title: "مصحح الأخطاء المباشر",
    desc: "راقب صحة واجهة البرمجة واستكشف الأخطاء في الوقت الفعلي مع مصحح الأخطاء المباشر المدمج في موفو للتكامل السلس والموثوق.",
    img: Live,
    flip: true,
  },

  {
    title: "تتبع التوصيلات في الوقت الفعلي",
    desc: "احصل على تحديثات مباشرة حول حالة التوصيل والدفع مع webhooks أو الاستطلاع الدوري، ابق على اطلاع بسهولة.",
    img: Track,
    flip: false,
  },
];

export default function FeaturesDemoSectionAr() {
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
              شاهد موفو في العمل، إدارة توصيل بسيطة وقوية
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              لوحة التحكم البديهية لدينا تجعل تكامل التوصيل في المرحلة الأخيرة
              سهلاً. إليك كيف تعمل والميزات الرئيسية التي نقدمها جاهزة:
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
