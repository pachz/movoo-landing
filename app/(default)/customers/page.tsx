export const metadata = {
  title: "Customers - Muvx",
  description: "Page description",
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
