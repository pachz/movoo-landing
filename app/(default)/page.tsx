export const metadata = {
  title: "Home - Movoo",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";
import FeaturesDemoSection from "@/components/features";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      {/* <LargeTestimonial /> */}
      <FeaturesPlanet />
      <Features />
      <FeaturesDemoSection />
      {/* <TestimonialsCarousel /> */}
      <Cta />
    </>
  );
}
