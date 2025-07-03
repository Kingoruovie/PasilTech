"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const links = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Application Development, Maintenance and Support",
        href: "/application",
      },
      { label: "Cloud Computing & DevOp", href: "/cloud-devops" },
      { label: "Cybersecurity", href: "cybersecurity" },
      { label: "Data and AI Solutions", href: "/data-ai" },
      { label: "Product Concept, Design and Maintenance ", href: "/product" },
      { label: "Mobile Application Development", href: "/mobile-application" },
      { label: "Internet of Things", href: "/internet-of-things" },
      {
        label: "Customer Relationship Management",
        href: "/customer-relationship",
      },
      {
        label: "Enterprise Application Testing",
        href: "/enterprise-application-testing",
      },
      { label: "Embedded Engineering", href: "/embedded" },
      {
        label: "Business Process Outsourcing",
        href: "/business-process-outsourcing",
      },
      { lable: "IT Help Desk Services", href: "/it-help-desk" },
      { label: "IT Infrastructure Management", href: "/it-infrastruture" },
    ],
  },
  {
    label: "Industry",
    href: "/industry",
    children: [
      { label: "Banking & Financial Services", href: "/banking" },
      { label: "Communications", href: "/communication" },
      { label: "Education", href: "/education" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Retail & Wholesale", href: "/retail-wholesale" },
      { label: "Transport & Logistics", href: "transport-logistics" },
      { label: "Travel & Hospitality", href: "/travel" },
    ],
  },
];

const otherLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Career", href: "/career" },
];

export default function DropDown({ open }: { open: boolean }) {
  const [accordion, setAccordion] = useState<boolean[]>([false, false]);

  function handleClick(index: number) {
    const newAccordion = [...accordion];
    newAccordion[index] = !newAccordion[index];
    setAccordion(newAccordion);
  }

  return (
    <div
      className={`${open ? "max-h-[1000px]" : "max-h-0"} px-4 overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <ul>
        {links.map((link, index) => (
          <li
            key={link.href}
            onClick={() => handleClick(index)}
            className="border-b border-b-gray-200"
          >
            <div className="flex flex-row justify-between py-2 ">
              <Link href="" className="font-semibold">
                {link.label}
              </Link>
              <ChevronDown
                className={`${accordion[index] == true ? "rotate-180" : "rotate-0"} transition-transform duration-150 ease-in-out`}
              />
            </div>
            <ul
              className={`${accordion[index] == false ? "max-h-0" : "max-h-[1000px]"} overflow-hidden transition-all duration-300 ease-in-out`}
            >
              {link.children.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:underline decoration-gray-600 decoration-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {otherLinks.map((link) => (
          <li
            key={link.href}
            className="py-2 border-b border-b-gray-200 font-semibold"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
