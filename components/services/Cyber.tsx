import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function Cyber() {
  return (
    <section className="my-20">
      <div className="relative pt-24 px-6 md:max-w-4xl 2xl:max-w-6xl mx-auto flex flex-col-reverse 2xl:flex-row-reverse items-stretch gap-10">
        <span className="w-[90%] md:w-full absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-blue-900"></span>

        <article className="basis-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Cybersecurity
          </h2>
          <p className="text-xl mb-4">
            Security is no longer optional — it&apos;s foundational. We provide
            proactive and reactive cybersecurity services that safeguard your
            digital assets. From secure code reviews to threat modeling and
            compliance consulting, our goal is to reduce your attack surface and
            keep your systems resilient.
          </p>
          <ul className="text-lg">
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Security assessments & audits</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Secure coding practices &amp; code reviews</span>
            </li>
            <li className="flex flex-row gap-2 ">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Penetration testing (web, mobile, infrastructure)</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Identity &amp; access management (IAM)</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Compliance consulting (ISO 27001, GDPR, HIPAA)</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Cloud security hardening (AWS, Azure, GCP)</span>
            </li>
          </ul>
        </article>
        <div className="basis-1/2">
          <Image
            src="/security.jpg"
            alt="Cloud Computing & Infrastructure Automation"
            width={1920}
            height={1080}
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
}
