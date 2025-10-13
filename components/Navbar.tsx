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
    { name: "FAQs", href: "/faqs" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all",
        scrolled
          ? "backdrop-blur bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          : "backdrop-blur bg-white/90",
      ].join(" ")}
      aria-label="Main Navigation"
    >

      <div className="h-[3px] w-full bg-gradient-to-r from-electric-purple via-transparent to-neon-blue opacity-80" />

      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"       
              alt="Pagram logo"
              width={96}
              height={10}
              className="object-contain drop-shadow-[0_0_14px_rgba(0,0,0,0.45)]"
              priority
            />
            <span className="sr-only">Pagram</span>
          </Link>


          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map(({ name, href }) => (
              <li key={name} className="relative">
                <Link
                  href={href}
                  className={[
                    "px-1 py-2 transition text-gray-700 hover:text-gray-900",
                    isActive(href) ? "text-gray-900" : "",
                  ].join(" ")}
                >
                  {name}
                </Link>

                <span
                  className={[
                    "absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] rounded-full transition-all",
                    isActive(href) ? "w-6 bg-electric-purple shadow-[0_0_12px_rgba(124,92,255,0.7)]" : "w-0 bg-transparent",
                  ].join(" ")}
                />
              </li>
            ))}
          </ul>


          <Link
            href="/contacts"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-electric-purple text-white px-4 py-2 font-semibold shadow hover:bg-electric-purple/90"
          >
            <Calendar size={16} />
            Contact
          </Link>


          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>


      {open && (
        <div className="md:hidden fixed inset-0 z-50">

          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />


          <div className="absolute right-0 top-0 h-full w-[82%] max-w-[360px] bg-white backdrop-blur-lg border-l border-gray-200 shadow-2xl flex flex-col">

            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Pagram logo"
                  width={124}
                  height={30}
                  className="object-contain drop-shadow-[0_0_14px_rgba(0,0,0,0.45)]"
                />
                <span className="sr-only">Pagram</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>


            <div className="px-5 py-4 space-y-1">
              {links.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100",
                    isActive(href) ? "bg-gray-100 text-gray-900 ring-1 ring-gray-200" : "",
                  ].join(" ")}
                >
                  {name}
                </Link>
              ))}
            </div>


            <div className="mt-auto p-5 border-t border-gray-200">
              <Link
                href="/contacts"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-electric-purple text-white px-4 py-3 font-semibold shadow hover:bg-electric-purple/90"
              >
                <Calendar size={18} />
                Book a discovery call
              </Link>
              <p className="text-[12px] text-gray-500 mt-2">Reply within 24 hours • NDA on request</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
