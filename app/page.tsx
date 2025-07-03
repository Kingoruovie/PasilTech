import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ChooseUs from "@/components/ChooseUs";
import HowWeWork from "@/components/HowWeWork";
import WhoWeServe from "@/components/WhoWeServe";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

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
      <Footer />
    </main>
  );
}
