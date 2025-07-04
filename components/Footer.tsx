import Link from "next/link";
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <section className="text-neutral-300 bg-neutral-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="" className="font-extrabold text-xl text-blue-900">
            PASIL TECH LIMITED
          </Link>
        </div>
        <div className="flex flex-col flex-wrap gap-10 mb-10 lg:mb-20 md:flex-row justify-between">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex flex-row gap-3 items-center">
              <span>
                <Phone />
              </span>
              <span>+2349999909900</span>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <span>
                <Mail />
              </span>
              <span>info@pasiltech.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <Link href="" className="hover:underline">
              Services
            </Link>
            <Link href="" className="hover:underline">
              Industries
            </Link>
            <Link href="" className="hover:underline">
              About Us
            </Link>
            <Link href="" className="hover:underline">
              Contact Us
            </Link>
            <Link href="" className="hover:underline">
              Career
            </Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <Link href="" className="flex flex-row gap-3 items-center">
              <span>
                <Linkedin />
              </span>
              <span>LinkedIn</span>
            </Link>
            <Link href="" className="flex flex-row gap-3 items-center">
              <span>
                <Twitter />
              </span>
              <span>Twitter</span>
            </Link>
            <Link href="" className="flex flex-row gap-3 items-center">
              <span>
                <Facebook />
              </span>
              <span>Facebook</span>
            </Link>
            <Link href="" className="flex flex-row gap-3 items-center">
              <span>
                <Instagram />
              </span>
              <span>Instagram</span>
            </Link>
          </div>
        </div>

        <div className="text-sm text-center">
          &copy; 2025 PASIL TECH LIMITED. All rights reserved
        </div>
      </div>
    </section>
  );
}
