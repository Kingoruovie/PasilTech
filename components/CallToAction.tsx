import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="px-6 py-30 flex flex-row flex-wrap justify-center gap-10 bg-blue-500 text-neutral-100">
      <h2 className="text-3xl font-semibold max-w-xl">
        {" "}
        Ready to transform your business with digital innovation?
      </h2>
      <div className="max-w-xl">
        <p className="text-xl">
          Contact PASIL TECH LIMITED for expert IT Services and Support
        </p>
        <div className="mt-5 flex flex-wrap flex-row gap-4 text-center">
          <Link
            href=""
            className="px-4 py-3 bg-neutral-100 text-blue-500 rounded-sm grow max-w-[210px] ransition-all duration-300 ease-in-out hover:text-neutral-100 hover:border-neutral-100 hover:bg-blue-500 hover:border"
          >
            Request a Consultation
          </Link>
          <Link
            href=""
            className="px-4 py-3 border-2 border-neutral-100  rounded-sm grow max-w-[210px] ransition-colors duration-300 ease-in-out hover:bg-neutral-100 hover:text-blue-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
