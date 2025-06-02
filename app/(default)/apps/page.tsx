export const metadata = {
  title: "Apps - Movoo",
  description: "Page description",
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
        heading="Start integrating with Movoo"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
