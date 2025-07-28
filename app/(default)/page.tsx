export const metadata = {
  title: "Home - Muvu",
  description: "Page description",
};

import BusinessCategories from "@/components/business-categories";
import Cta from "@/components/cta";
import FeaturesDemoSection from "@/components/features";
import Features from "@/components/features-home";
import FeaturesPlanet from "@/components/features-planet";
import Hero from "@/components/hero-home";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
        <BusinessCategories />
      </section>
      <section id="how-it-works">
        <FeaturesPlanet />
      </section>
      {/* <LargeTestimonial /> */}
      <section id="why-us">
        <Features />
      </section>
      <section id="features">
        <FeaturesDemoSection />
      </section>
      {/* <TestimonialsCarousel /> */}
      <Cta />
    </>
  );
}
