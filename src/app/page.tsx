import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyVoltivo from "@/components/home/WhyVoltivo";
import CtaSection from "@/components/CtaSection";

export const metadata = buildMetadata({
  title: "Voltivo Technologies | Industrial Automation, IoT & IT Solutions",
  description:
    "Voltivo Technologies provides industrial automation, electrical, PLC, IoT, electronics and IT solutions designed to create smarter, connected and efficient operations.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <WhyVoltivo />
      <CtaSection />
    </>
  );
}
