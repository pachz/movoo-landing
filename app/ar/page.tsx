export const metadata = {
  title: "الرئيسية - موفو",
  description: "موفو هي الطبقة التحتية لتكامل التوصيل في المرحلة الأخيرة، بدءاً من التجارة الإلكترونية والتوسع عبر الصناعات.",
};

import BusinessCategoriesAr from "@/components/business-categories-ar";
import CtaAr from "@/components/cta-ar";
import FeaturesDemoSectionAr from "@/components/features-ar";
import FeaturesAr from "@/components/features-home-ar";
import FeaturesPlanetAr from "@/components/features-planet-ar";
import HeroAr from "@/components/hero-home-ar";
import HeaderAr from "@/components/ui/header-ar";
import FooterAr from "@/components/ui/footer-ar";

export default function HomeAr() {
  return (
    <>
      <HeaderAr />
      <main className="grow">
        <section id="home">
          <HeroAr />
          <BusinessCategoriesAr />
        </section>
        <section id="how-it-works">
          <FeaturesPlanetAr />
        </section>
        <section id="why-us">
          <FeaturesAr />
        </section>
        <section id="features">
          <FeaturesDemoSectionAr />
        </section>
        <CtaAr />
      </main>
      <FooterAr border={true} />
    </>
  );
} 