export const metadata = {
  title: "Apps - Muvx",
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
        heading="Start integrating with Muvx"
        buttonText="Start Free"
        buttonLink="#0"
      />
    </>
  );
}
