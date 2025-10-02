"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer({ dense = false }: { dense?: boolean }) {
  if (dense) {
    // COMPACT glass footer (brand + legal)
    return (
      <footer className="relative z-10">
        <div className="absolute inset-0 bg-[#0b1324]/70 backdrop-blur-xl border-t border-white/10" />
        <div className="relative max-w-7xl mx-auto px-6  flex flex-col md:flex-row items-center justify-between gap-3 text-white">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"  // white transparent PNG
              alt="Mizan Teck logo"
              width={128}
              height={32}
              className="object-contain drop-shadow-[0_0_14px_rgba(0,0,0,0.45)]"
              priority
            />
            <span className="sr-only">Mizan Teck</span>
          </Link>
          <div className="text-xs text-white/70 text-center md:text-right">
            © {new Date().getFullYear()} Mizan Teck. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  // FULL glass grid (no gradient)
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-[#0b1324]/70 backdrop-blur-2xl border-t border-white/10" />
      <div className="relative max-w-7xl mx-auto px-6 py-14 text-white">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand / blurb */}
          <div>
            <Image
              src="/logo.png"
              alt="Mizan Teck logo"
              width={148}
              height={36}
              className="object-contain drop-shadow-[0_0_16px_rgba(0,0,0,0.5)]"
            />
            <p className="text-sm text-white/80">
              Practical software, measurable outcomes. We design and ship reliable web &amp; mobile platforms,
              data pipelines, and AI-assisted workflows.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-sm text-white/85">
              <li><Link className="hover:underline" href="/about">About</Link></li>
              <li><Link className="hover:underline" href="/team">Team</Link></li>
              <li><Link className="hover:underline" href="/careers">Careers</Link></li>
              <li><Link className="hover:underline" href="/contacts">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold mb-3">Services</h5>
            <ul className="space-y-2 text-sm text-white/85">
              <li>Web Platforms</li>
              <li>Mobile Apps</li>
              <li>Data &amp; ML</li>
              <li>Product &amp; UX</li>
              <li>DevOps &amp; SRE</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-3">Contact</h5>
            <ul className="space-y-2 text-sm text-white/85">
              <li className="flex items-center gap-2"><Mail size={16}/> mizanteck2013@gmail.com</li>
              <li className="flex items-center gap-2"><Phone size={16}/> +1 312 285 7262</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Remote • Global</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b1324] px-4 py-2 font-semibold shadow hover:bg-gray-100"
              >
                Book a discovery call
              </Link>
            </div>
          </div>
        </div>

        {/* divider & legal */}
        <div className="mt-10 h-px bg-white/10" />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <div>© {new Date().getFullYear()} Mizan Teck. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Privacy</Link>
            <span className="opacity-40">•</span>
            <Link href="#" className="hover:underline">Terms</Link>
            <span className="opacity-40">•</span>
            <Link href="/contacts" className="hover:underline">Get in touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
