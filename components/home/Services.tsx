import {
  Cloudy,
  BrainCircuit,
  Blocks,
  EarthLock,
  PencilRuler,
} from "lucide-react";

export default function Services() {
  return (
    <section className="px-6 text-center mt-34 bg-blue-100 py-20">
      <div className="font-semibold">Innovate</div>
      <div className="max-w-xl mx-auto">
        <h2 className="font-bold mt-3 mb-6 text-3xl">
          Our Core Services for Your Business Need
        </h2>
        <p>
          At PASIL TECH LIMITED, we specialize in providing top-notch IT
          solutions tailored to your business. Our comprehensive services ensure
          your operations run smoothly and efficiently.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-14 max-w-2xl mx-auto">
        <article className="flex flex-col space-y-6">
          <div>
            <Cloudy className="mx-auto size-12" />
          </div>
          <h3 className="font-bold text-2xl">
            Cloud Computing &amp; Infrastructure Automation
          </h3>
          <p>
            Fast, secure cloud migration and automated infrastructure for
            scalable operations.
          </p>
        </article>

        <article className="flex flex-col space-y-6">
          <div>
            <PencilRuler className="mx-auto size-12" />
          </div>
          <h3 className="font-bold text-2xl">
            Cross-Platform App Development (Web, Mobile &amp; Desktop)
          </h3>
          <p>
            Build seamless web, mobile, and desktop apps with modern frameworks.
          </p>
        </article>

        <article className="flex flex-col space-y-6">
          <div>
            <BrainCircuit className="mx-auto size-12" />
          </div>
          <h3 className="font-bold text-2xl">Data &amp; AI-Driven Solutions</h3>
          <p>
            AI-powered analytics and automation to turn data into smart
            decisions.
          </p>
        </article>
        <article className="flex flex-col space-y-6">
          <div>
            <EarthLock className="mx-auto size-12" />
          </div>
          <h3 className="font-bold text-2xl">Cybersecurity</h3>
          <p>
            Comprehensive security to protect your digital assets and ensure
            compliance.
          </p>
        </article>

        <article className="flex flex-col space-y-6">
          <div>
            <Blocks className="mx-auto size-12" />
          </div>
          <h3 className="font-bold text-2xl">
            Web3 &amp; Blockchain Technology
          </h3>
          <p>
            Smart contracts and dApps for secure, decentralized digital
            solutions.
          </p>
        </article>
      </div>
    </section>
  );
}
