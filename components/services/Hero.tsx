import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="">
        <Image
          src="/service.jpg"
          alt="Our service: Job meeting"
          width={1920}
          height={1280}
          className="h-[100vh] object-cover"
        />
      </div>

      <article className="px-6 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-100 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold">Our Services</h1>
        <p className="text-xl lg:text-2xl">
          Solving problems through modern engineering, intelligent systems, and
          secure infrastructure.
        </p>
      </article>
    </section>
  );
}
