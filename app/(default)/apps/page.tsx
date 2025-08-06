export const metadata = {
  title: "Apps - Muvx",
  description: "Muvx - One Integration. Endless Delivery Options. Tired of re-integrating every time you switch partners? Muvx connects businesses and delivery services through a single, smart API.",
};

import Hero from "./hero";
import AppList from "@/components/app-list";
import Cta from "@/components/cta-alternative";

export default function Apps() {
  return (
    <>
      <Hero />
      <AppList />
      <Cta
        heading="Start integrating with Muvx"
        buttonText="Start Free"
        buttonLink="#0"
      />
    </>
  );
}
