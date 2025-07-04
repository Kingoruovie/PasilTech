import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function Cloud() {
  return (
    <section className="my-20">
      <div className=" px-6 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-stretch gap-10">
        <article className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Cloud Computing &amp; Infrastructure Automation
          </h2>
          <p className="text-xl mb-4">
            At Pasil TECH, we help businesses move faster and scale smarter
            through robust cloud architecture and automated infrastructure.
            Whether you&apos;re migrating to the cloud or building cloud-native
            apps, we ensure reliability, scalability, and cost-efficiency. We
            use Infrastructure as Code (IaC), CI/CD pipelines, and DevOps best
            practices to eliminate downtime and manual errors.
          </p>
          <ul className="text-lg">
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                Cloud architecture design &amp; consulting (AWS, Azure, GCP)
              </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Infrastructure as Code (Terraform, Ansible, Pulumi)</span>
            </li>
            <li className="flex flex-row gap-2 ">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                CI/CD pipelines setup &amp; automation (GitHub Actions, Jenkins,
                GitLab)
              </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                Containerization with Docker &amp; orchestration via Kubernetes
              </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Serverless architecture & microservices deployment</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Cloud migration & cost optimization</span>
            </li>
          </ul>
        </article>
        <div>
          <Image
            src="/cloud.jpg"
            alt="Cloud Computing & Infrastructure Automation"
            width={1920}
            height={1080}
            className="w-full lg:max-w-xl h-[300px] lg:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
