import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div>
        <Image
          src="/service.jpg"
          alt="Our service: Job meeting"
          width={1920}
          height={1280}
        />
      </div>

      <article className="absolute top-1/2 left-1/2 -translate-x-1/2 text-neutral-100 text-center">
        <h1 className="text-6xl font-extrabold">Our Services</h1>
        <p className="text-2xl">
          Solving problems through modern engineering, intelligent systems, and
          secure infrastructure.
        </p>
      </article>
    </section>
  );
}
