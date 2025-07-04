import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import ChooseUs from "@/components/home/ChooseUs";
import HowWeWork from "@/components/home/HowWeWork";
import WhoWeServe from "@/components/home/WhoWeServe";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <ChooseUs />
      <HowWeWork />
      <WhoWeServe />
      <CallToAction />
    </main>
  );
}
