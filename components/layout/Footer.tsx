"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  "Website Development",
  "Meta Ads",
  "TikTok Ads",
  "Klaviyo Email Marketing",
  "AI Automation",
  "SEO",
];

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="Newbrook Digital"
                width={60}
                height={60}
                className="h-14 w-auto"
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Newbrook Digital
                </h3>

                <p className="text-sm text-blue-400">
                  Build. Grow. Automate.
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Helping businesses grow through modern websites,
              paid advertising, AI automation and digital strategy.
            </p>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-6 text-lg font-semibold">
              Services
            </h4>

            <ul className="space-y-3">

              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400"
                >
                  {service}
                </li>
              ))}

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3">

              {links.map((link) => (
                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-6 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Mail className="mt-1 h-5 w-5 text-blue-500" />

                <div>

                  <p>newbrooksdigital@gmail.com</p>

                  <p className="text-slate-400">
                    nictonly@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Phone className="mt-1 h-5 w-5 text-blue-500" />

                <div>

                  <p>+254 729 178 171</p>

                  <p className="text-slate-400">
                    +1 417 342 3311
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <MapPin className="mt-1 h-5 w-5 text-blue-500" />

                <p>Nairobi, Kenya</p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">

          <p className="text-center text-slate-500">
            © {new Date().getFullYear()} Newbrook Digital. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}