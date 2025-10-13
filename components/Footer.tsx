"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer({ dense = false }: { dense?: boolean }) {
  if (dense) {

    return (
      <footer className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue opacity-95" />
        <div className="relative max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-white">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo2.png" // Pagram logo (transparent/white variant in /public)
              alt="PAGRAM Internet Solutions"
              width={128}
              height={32}
              className="object-contain drop-shadow-[0_0_14px_rgba(0,0,0,0.45)]"
              priority
            />
            <span className="sr-only">PAGRAM</span>
          </Link>
          <div className="text-xs text-white/80 text-center md:text-right">
            © {new Date().getFullYear()} PAGRAM Internet Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }


  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue opacity-95" />
      <div className="relative max-w-7xl mx-auto px-6 py-14 text-white">
        <div className="grid gap-10 md:grid-cols-4">

          <div className="space-y-3">
            <Image
              src="/logo2.png"  // <-- keep the same image variable as compact
              alt="PAGRAM Internet Solutions"
              width={160}
              height={40}
              className="object-contain drop-shadow-[0_0_16px_rgba(0,0,0,0.5)]"
              priority
            />
            <p className="text-sm text-white/85">
              Fast, reliable &amp; affordable internet for homes, estates, SMBs, and enterprises.
              Stay connected. Stay ahead.
            </p>
          </div>


          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link className="hover:underline" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h5 className="font-semibold mb-3">What we offer</h5>
            <ul className="space-y-2 text-sm text-white/90">
              <li>Home Internet (10–25 Mbps)</li>
              <li>Business Internet (50+ Mbps)</li>
              <li>Estate &amp; Campus Wi-Fi</li>
              <li>Point-to-Point Links</li>
              <li>Managed Network Services</li>
            </ul>
          </div>


          <div>
            <h5 className="font-semibold mb-3">Contact</h5>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Mail size={16} />{" "}
                <a className="hover:underline" href="mailto:hello@pagram.co.ke">
                  hello@pagram.co.ke
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />{" "}
                <a className="hover:underline" href="tel:+254704658766">
                  +254 704 658 766
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Nairobi, Kenya
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/254704658766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-electric-purple px-4 py-2 font-semibold shadow hover:bg-gray-100"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 font-semibold backdrop-blur hover:bg-white/20"
              >
                Get Connected
              </Link>
            </div>
          </div>
        </div>


        <div className="mt-10 h-px bg-white/25" />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/80">
          <div>© {new Date().getFullYear()} PAGRAM Internet Solutions. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Privacy</Link>
            <span className="opacity-40">•</span>
            <Link href="#" className="hover:underline">Terms</Link>
            <span className="opacity-40">•</span>
            <Link href="/contact" className="hover:underline">Get in touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
