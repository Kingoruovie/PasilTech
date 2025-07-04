import Hero from "@/components/services/Hero";
import Cloud from "@/components/services/Cloud";
import AppDev from "@/components/services/AppDev";
import Cyber from "@/components/services/Cyber";
import Blockchain from "@/components/services/Blockchain";
import DataAI from "@/components/services/DataAI";
import CallToAction from "@/components/CallToAction";

export default function Page() {
  return (
    <main>
      <Hero />
      <Cloud />
      <DataAI />
      <AppDev />
      <Cyber />
      <Blockchain />
      <CallToAction />
    </main>
  );
}
