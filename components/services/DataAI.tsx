import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function DataAI() {
  return (
    <section className="my-20">
      <div className=" relative pt-24 px-6 md:max-w-4xl 2xl:max-w-6xl mx-auto flex flex-col-reverse 2xl:flex-row-reverse items-stretch gap-10">
        <span className="w-[90%] md:w-full absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-blue-900"></span>
        <article className="basis-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Data & AI-Driven Solutions
          </h2>
          <p className="text-xl mb-4">
            Turn your data into decisions. At Pasil TECH, we design systems that
            not only process data — they learn from it. From predictive models
            to generative AI tools, we help businesses leverage artificial
            intelligence to improve operations, personalize experiences, and
            drive innovation. We bridge the gap between raw data and actionable
            insights.
          </p>
          <ul className="text-lg">
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                Data engineering (ETL pipelines, data lakes, real-time
                processing)
              </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Predictive analytics & forecasting</span>
            </li>
            <li className="flex flex-row gap-2 ">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Custom machine learning model development</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                Generative AI solutions (Chatbots, LLMs, image generation)
              </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>AI integration into web & mobile apps</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Business intelligence dashboards (Power BI, Tableau)</span>
            </li>
          </ul>
        </article>
        <div className="basis-1/2">
          <Image
            src="/data-ai.jpg"
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
