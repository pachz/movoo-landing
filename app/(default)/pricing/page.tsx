export const metadata = {
  title: "Pricing - Muvx",
  description: "Muvx - One Integration. Endless Delivery Options. Tired of re-integrating every time you switch partners? Muvx connects businesses and delivery services through a single, smart API.",
};

import PricingTables from "@/components/pricing-tables";
import ComparePlans from "@/components/compare-plans";
import TestimonialsGrid from "@/components/testimonials-grid";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta-alternative";

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <ComparePlans />
      <TestimonialsGrid />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Start integrating with Muvx"
        buttonText="Start Free"
        buttonLink="#0"
      />
    </>
  );
}
