import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Career", href: "/career" },
];

export default function DropDown({ open }: { open: boolean }) {
  return (
    <div
      className={`${open ? "max-h-[1000px]" : "max-h-0"} px-4 overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <ul className="pb-10">
        {links.map((link) => (
          <li key={link.href} className="py-3">
            <Link
              href=""
              className="transition-colors duration-300 ease-in-out hover:text-blue-500 px-3 py-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
