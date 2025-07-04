import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative top-14">
      <div>
        <Image
          src="/hero.jpg"
          alt="Lady in IT"
          width={4000}
          height={1500}
          className="h-[50vh] object-cover"
        />
      </div>
      <article className="px-6 py-20 lg:py-30 max-w-2xl lg:max-w-6xl lg:flex flex-rows items-center gap-18 lg:gap-24 mx-auto">
        <h1 className="text-4xl font-bold ">
          Empowering Businesses &amp; Governments with Cutting-Edge Digital
          Solutions
        </h1>
        <div>
          <p className="my-4">
            Delivering innovative, customized technology solutions designed to
            drive efficiency, enhance security, and accelerate growth for
            businesses and governments navigating today’s rapidly evolving
            digital landscape.
          </p>
          <div className="mt-6 flex flex-row gap-6">
            <Link
              href=""
              className="py-3 px-3 bg-blue-900 text-neutral-100 ransition-colors duration-300 ease-in-out hover:text-blue-900 hover:bg-blue-100"
            >
              Learn more
            </Link>
            <Link
              href=""
              className="py-3 px-3 bg-blue-100 text-blue-900 ransition-colors duration-300 ease-in-out hover:bg-blue-900 hover:text-blue-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
