import { Check } from "lucide-react";

export default function ChooseUs() {
  return (
    <section className="px-6 my-18">
      <h2 className="text-3xl font-bold text-center">Why Partner With Us</h2>
      <div className="space-y-5 mt-7 mx-auto max-w-[400px]">
        <div className="flex flex-row items-center gap-4">
          <span className="">
            <Check className="text-neutral-100 bg-green-500 rounded-full" />
          </span>
          <span>Trusted by governments and enterprises</span>
        </div>

        <div className="flex flex-row items-center gap-4">
          <span>
            <Check className="text-neutral-100 bg-green-500 rounded-full" />
          </span>
          <span>Experienced team with deep industry knowledge</span>
        </div>

        <div className="flex flex-row items-center gap-4">
          <span>
            <Check className="text-neutral-100 bg-green-500 rounded-full" />
          </span>
          <span>Commitment to security and compliance</span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <span>
            <Check className="text-neutral-100 bg-green-500 rounded-full" />
          </span>
          <span>Customer-focused, tailored digital solutions</span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <span>
            <Check className="text-neutral-100 bg-green-500 rounded-full" />
          </span>
          <span>Proven methodologies and agile delivery</span>
        </div>
      </div>
    </section>
  );
}
