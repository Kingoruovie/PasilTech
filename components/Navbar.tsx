"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import DropDown from "./NavItems";

const links = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Career", href: "/career" },
];

export default function Navbar() {
  const [dropDown, setDropDown] = useState<boolean>(false);
  return (
    <nav className="fixed z-50 bg-neutral-100 shadow-sm w-full">
      <div className="flex flex-row justify-between items-center  p-4 max-w-6xl mx-auto">
        <Link href="/">
          <div className="font-extrabold text-neutral-800 text-xl">
            PASIL TECH LIMITED
          </div>
        </Link>
        {/* Mobile Nav*/}
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setDropDown(!dropDown)}
        >
          <Menu strokeWidth={3} />
        </button>

        <ul className="hidden flex-row gap-10 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href} className="">
              <Link
                href=""
                className="transition-colors duration-200 ease-in-out hover:bg-blue-100 hover:text-blue-500 px-3 py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <DropDown open={dropDown} />
    </nav>
  );
}
