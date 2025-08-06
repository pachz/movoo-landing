export const metadata = {
  title: "Support - Muvx",
  description: "Muvx - One Integration. Endless Delivery Options. Tired of re-integrating every time you switch partners? Muvx connects businesses and delivery services through a single, smart API.",
};

import Hero from "./hero";
import Faqs from "@/components/faqs-02";
import Cta from "@/components/cta-alternative";

export default function Support() {
  return (
    <>
      <Hero />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Cannot find what you're looking for?"
        buttonText="Contact Us"
        buttonLink="#0"
      />
    </>
  );
}
