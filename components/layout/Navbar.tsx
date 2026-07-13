"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Newbrook Digital"
            width={52}
            height={52}
            priority
            className="h-12 w-auto"
          />

          <div className="hidden sm:block leading-tight">

            <h1 className="text-xl font-extrabold text-slate-900">
              Newbrook Digital
            </h1>

            <p className="text-xs font-medium tracking-wide text-blue-600">
              Build. Grow. Automate.
            </p>

          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* CTA */}

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">

          <div className="flex flex-col px-6 py-6">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-lg font-medium text-slate-700"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-6 rounded-full bg-blue-600 py-4 text-center font-semibold text-white"
            >
              Book Strategy Call
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}