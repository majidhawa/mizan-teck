"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contacts", href: "/contacts" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all",
        scrolled
          ? "backdrop-blur bg-[#0b1324]/70 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "backdrop-blur bg-transparent",
      ].join(" ")}
      aria-label="Main Navigation"
    >
      {/* top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-500 via-transparent to-emerald-700 opacity-80" />

      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Mizan Teck logo"
              width={96}
              height={10}
              className="object-contain drop-shadow-[0_0_14px_rgba(0,0,0,0.45)]"
              priority
            />
            <span className="sr-only">Mizan Teck</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map(({ name, href }) => (
              <li key={name} className="relative">
                <Link
                  href={href}
                  className={[
                    "px-1 py-2 transition text-white/85 hover:text-white",
                    isActive(href) ? "text-white" : "",
                  ].join(" ")}
                >
                  {name}
                </Link>
                {/* active underline */}
                <span
                  className={[
                    "absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] rounded-full transition-all",
                    isActive(href)
                      ? "w-6 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
                      : "w-0 bg-transparent",
                  ].join(" ")}
                />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contacts"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white text-[#0b1324] px-4 py-2 font-semibold shadow hover:bg-gray-100"
          >
            <Calendar size={16} />
            Contact
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg text-white/90 hover:bg-white/10"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* panel - now with solid background */}
          <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-br from-[#08111f] via-[#0b1324] to-[#0d1629] shadow-2xl flex flex-col border-l-2 border-emerald-500/30">
            {/* header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-emerald-500/20 bg-[#08111f]/80">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/logo.png"
                  alt="Mizan Teck logo"
                  width={124}
                  height={30}
                  className="object-contain drop-shadow-[0_0_14px_rgba(16,185,129,0.3)]"
                />
                <span className="sr-only">Mizan Teck</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-white/90 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                aria-label="Close menu"
              >
                <X size={25} />
              </button>
            </div>

            {/* links */}
            <div className="px-5 py-4 space-y-2 bg-[#0a0f1e]/70">
              {links.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-3 font-medium transition",
                    isActive(href)
                      ? "bg-emerald-500 text-white shadow ring-1 ring-emerald-400"
                      : "bg-white/95 text-[#0b1324] hover:bg-gray-100",
                  ].join(" ")}
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto p-5 border-t border-emerald-500/20 bg-[#08111f]/50">
              <Link
                href="/contacts"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#0b1324] px-4 py-3 font-semibold shadow hover:bg-gray-100"
              >
                <Calendar size={18} />
                Book a discovery call
              </Link>
              <p className="text-[12px] text-white/60 mt-2">
                Reply within 24 hours • NDA on request
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}