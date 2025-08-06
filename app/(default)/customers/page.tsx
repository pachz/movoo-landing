export const metadata = {
  title: "Customers - Muvx",
  description: "Muvx - One Integration. Endless Delivery Options. Tired of re-integrating every time you switch partners? Muvx connects businesses and delivery services through a single, smart API.",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";
import Cta from "@/components/cta-alternative";

export default function Customers() {
  return (
    <>
      <Hero />
      <WallOfLove />
      <Cta
        heading="Start integrating with Muvx"
        buttonText="Start Free"
        buttonLink="#0"
      />
    </>
  );
}
