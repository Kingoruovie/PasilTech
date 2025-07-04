import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function AppDev() {
  return (
    <section className="my-20">
      <div className="relative pt-24 px-6 md:max-w-4xl 2xl:max-w-6xl mx-auto flex flex-col-reverse 2xl:flex-row items-stretch gap-10">
        <span className="w-[90%] md:w-full absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-blue-900"></span>

        <article className="basis-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Cross-Platform App Development (Web, Mobile & Desktop)
          </h2>
          <p className="text-xl mb-4">
            Build once, run everywhere. We develop high-performance applications
            that run seamlessly across web, mobile, and desktop — reducing
            development time and ensuring a consistent user experience. Whether
            it&apos;s a customer-facing mobile app or a desktop dashboard for
            internal teams, our solutions are built for performance,
            scalability, and maintainability.
          </p>
          <ul className="text-lg">
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                Cross-platform mobile apps using Flutter, React Native
              </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Web applications (React, Vue, Angular)</span>
            </li>
            <li className="flex flex-row gap-2 ">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Desktop applications with Electron &amp; Tauri</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>API development and integration (REST, GraphQL)</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Progressive Web Apps (PWAs)</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                App store deployment &amp; maintenance (Google Play, Apple App
                Store)
              </span>
            </li>
          </ul>
        </article>
        <div className="basis-1/2">
          <Image
            src="/app-dev.jpg"
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
