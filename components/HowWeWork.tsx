import {
  Binoculars,
  NotebookPen,
  AppWindow,
  TestTubeDiagonal,
  HeartPlus,
} from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="my-20 px-4">
      <h2 className="mb-10 font-bold text-3xl text-center">How Work</h2>
      <div className="flex flex-row flex-wrap items-stretch justify-center gap-10 max-w-6xl mx-auto">
        <article className="p-6 bg-blue-100 rounded-sm w-full max-w-[400px]">
          <div className="flex flex-row items-center gap-3 font-semibold mb-2">
            <span>
              <Binoculars className="size-8 text-blue-500" />
            </span>
            <h3 className="font-bold text-xl">Consultation &amp; Discovery</h3>
          </div>
          <p className="text-xl">Understanding your needs and goals</p>
        </article>
        <article className="p-6 bg-yellow-100 rounded-sm w-full max-w-[400px]">
          <div className="flex flex-row items-center gap-3 font-semibold mb-2">
            <span>
              <NotebookPen className="size-8 text-yellow-500" />
            </span>
            <h3 className="font-bold text-xl">Strategy &amp; Planning</h3>
          </div>
          <p className="text-xl">Tailoring solutions that fit your business</p>
        </article>
        <article className="p-6 bg-cyan-100 rounded-sm w-full max-w-[400px]">
          <div className="flex flex-row items-center gap-3 font-semibold mb-2">
            <span>
              <AppWindow className="size-8 text-cyan-500" />
            </span>
            <h3 className="font-bold text-xl">Design &amp; Development</h3>
          </div>
          <p className="text-xl">Building scalable and secure technology</p>
        </article>
        <article className="p-6 bg-green-100 rounded-sm w-full max-w-[400px]">
          <div className="flex flex-row items-center gap-3 font-semibold mb-2">
            <span>
              <TestTubeDiagonal className="size-8 text-green-500" />
            </span>
            <h3 className="font-bold text-xl">Testing &amp; Deployment</h3>
          </div>
          <p className="text-xl">Ensuring quality and smooth delivery</p>
        </article>
        <article className="p-6 bg-red-100 rounded-sm w-full max-w-[400px]">
          <div className="flex flex-row items-center gap-3 font-semibold mb-2">
            <span>
              <HeartPlus className="size-8 text-red-500" />
            </span>
            <h3 className="font-bold text-xl">Ongoing Support</h3>
          </div>
          <p className="text-xl">Continuous improvements and maintenance</p>
        </article>
      </div>
    </section>
  );
}
