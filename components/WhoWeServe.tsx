import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    name: "Governments & Public Sector",
    description:
      "We digitize public services, automate operations, and enhance citizen engagement through secure, scalable tech solutions.",
    image: "/government.jpg",
  },
  {
    name: "Financial Services",
    description:
      "We support banks and fintechs with AI analytics, secure cloud systems, and blockchain tools for efficient, fraud-resistant operations.",
    image: "/financial.jpg",
  },
  {
    name: "Healthcare",
    description:
      "We build secure digital health platforms that enable smart diagnostics, telemedicine, and streamlined patient care.",
    image: "/healthcare.jpg",
  },
];

export default function WhoWeServe() {
  return (
    <section className="px-6 mt-20 bg-neutral-50 py-20">
      <h2 className="text-3xl font-bold text-center">Who We Serve</h2>
      <div className="flex flex-rows gap-10 flex-wrap mt-10 justify-center">
        {industries.map((industry, index) => (
          <article
            key={index}
            className="grow basis-sm shadow-2xl rounded-sm overflow-hidden max-w-[450px]"
          >
            <div>
              <Image
                src={industry.image}
                alt="Government building"
                height={853}
                width={1280}
              />
            </div>
            <div className="px-4 py-6">
              <h3 className="text-2xl mb-4">{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-14 mx-auto">
        <Link
          href=""
          className="inline-block  px-4 py-3 border border-blue-500 text-blue-500 ransition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-neutral-100"
        >
          See More
        </Link>
      </div>
    </section>
  );
}
