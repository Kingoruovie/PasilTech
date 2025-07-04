import Image from "next/image";

const industries = [
  {
    name: "Education",
    desc: `Empowering learning through digital innovation.
Pasil Tech helps schools, colleges, and edtech startups with custom LMS platforms, virtual classrooms, mobile learning apps, and secure student portals—making education accessible, engaging, and efficient.`,
    img: "/education.jpg",
  },
  {
    name: "Healthcare",
    desc: `Modern IT solutions for better patient care.
We deliver HIPAA-compliant systems, telemedicine platforms, patient record management, and healthcare apps that streamline operations and improve care delivery in clinics and hospitals.`,
    img: "/healthcare.jpg",
  },
  {
    name: "Finance & Fintech",
    desc: `Secure, scalable technology for modern finance.
From digital banking interfaces to secure payment gateways and fintech apps, Pasil Tech builds high-performance, compliant solutions that drive financial innovation and customer trust.`,
    img: "/financial.jpg",
  },
  {
    name: "Retail & E-commerce",
    desc: `Digital tools to power modern retail.
We develop responsive e-commerce platforms, POS integrations, mobile shopping apps, and customer analytics dashboards that boost sales, enhance user experience, and optimize inventory.`,
    img: "/retail.jpg",
  },
  {
    name: "Construction & Real Estate",
    desc: `Bringing efficiency to the field and office.
Pasil Tech offers project management tools, real-time tracking systems, virtual property tours, and CRM platforms tailored for contractors, realtors, and developers.`,
    img: "/real-estate.jpg",
  },
  {
    name: "Government & Public Sector",
    desc: `Digital transformation for public services.
We build citizen-facing portals, workflow automation systems, and secure cloud solutions that improve transparency, accessibility, and operational efficiency in public institutions.`,
    img: "/government.jpg",
  },
  {
    name: "Logistics & Transportation",
    desc: `Smarter supply chains through technology.
Our logistics solutions include fleet tracking, route optimization, inventory systems, and logistics dashboards that improve delivery accuracy and reduce operational costs.`,
    img: "/logistics.jpg",
  },
  //   {
  //     name: "Pharmaceutical & Biotech",
  //     desc: `Reliable IT for research and compliance.
  // Pasil Tech supports drug development and clinical trials with data platforms, regulatory compliance tools, and secure lab information systems to drive innovation safely.`,
  //   },
  {
    name: "Media & Entertainment",
    desc: `Engaging audiences in the digital age.
We build custom streaming platforms, media content management tools, mobile apps, and audience analytics systems to empower creators and publishers.`,
    img: "/media.jpg",
  },
  //   {
  //     name: "Hospitality & Travel",
  //     desc: `Creating seamless guest experiences.
  // Pasil Tech helps hotels, resorts, and travel platforms with booking systems, mobile check-in apps, guest CRM, and feedback tools to enhance customer service and retention.`,
  //   },
  //   {
  //     name: "Corporate & Enterprise",
  //     desc: `Custom enterprise software that scales.
  // We deliver internal tools like HRMS, CRM, ERP, intranet portals, and cloud-based solutions that improve collaboration, data insight, and organizational efficiency.`,
  //   },
];

export default function Industries() {
  return (
    <section>
      <div className="my-30 px-6 flex flex-row flex-wrap gap-10 justify-center max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <article
            key={index}
            className="shadow-md rounded-sm overflow-hidden max-w-lg"
          >
            <div>
              <Image
                src={industry.img}
                alt={industry.name}
                width={1920}
                height={1280}
                className="h-[300px] object-cover"
              />
            </div>
            <div className="py-6 px-6">
              <h2 className="text-blue-900 text-2xl font-bold mb-4">
                {industry.name}
              </h2>
              <p className="text-lg">{industry.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
