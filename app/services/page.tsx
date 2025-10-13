"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion, useAnimation } from "framer-motion";
import {
  Wifi, Router, Network, ShieldCheck, Building2, Download,
  Radio, Globe2, Cable, ChevronRight
} from "lucide-react";
import { useEffect } from "react";

/* ----------------- helpers ----------------- */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: d },
});

function Band() {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue opacity-95" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-white/30" />
      </div>
    </div>
  );
}

/* ----------------- simple auto-rotating strip (no external libs) ----------------- */
function ShowcaseStrip() {
  const images = ["/placeholder-1.jpg", "/placeholder-2.jpg", "/placeholder-3.jpg", "/placeholder-4.jpg"];
  const controls = useAnimation();

  useEffect(() => {
    let idx = 0;
    const loop = async () => {
      while (true) {
        await controls.start({
          x: `-${idx * 25}%`,
          transition: { duration: 0.9, ease: "easeInOut" },
        });
        idx = (idx + 1) % images.length;
        await new Promise((r) => setTimeout(r, 2600));
      }
    };
    loop();
  }, [controls]);

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
      <motion.div className="flex w-[400%]" animate={controls}>
        {images.map((src, i) => (
          <div key={i} className="relative w-1/4 h-40 md:h-56 lg:h-64">
            <Image src={src} alt={`Showcase ${i + 1}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ----------------- services list ----------------- */
const SERVICES = [
  { icon: Wifi,      title: "Home Fibre Internet",        points: ["Unlimited data", "Stable speeds", "GPON router"] },
  { icon: Building2, title: "Business Fibre Internet",    points: ["Static IP options", "Priority support", "SLA-backed"] },
  { icon: Radio,     title: "Fixed Wireless Internet",    points: ["Fast installs", "Reliable last-mile", "Unlimited data"] },
  { icon: Router,    title: "Managed Wi-Fi",              points: ["Estate & campus Wi-Fi", "Seamless roaming", "24/7 monitoring"] },
  { icon: Network,   title: "SD-WAN",                     points: ["Smart traffic routing", "Redundancy", "Cost optimization"] },
  { icon: Cable,     title: "Dedicated Links / DIA",      points: ["Guaranteed bandwidth", "Low latency", "Enterprise-grade"] },
  { icon: Globe2,    title: "Direct Connect & Colocation",points: ["Data center presence", "Interconnects", "Scalable backhaul"] },
  { icon: ShieldCheck,title: "Secure Networking",          points: ["Firewalls & VLANs", "Access controls", "Best-practice configs"] },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10" />
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-extrabold">
            Our Services
          </motion.h1>
          <motion.p {...fadeUp(0.05)} className="mt-3 max-w-2xl text-white/90">
            Fast, dependable connectivity for homes, estates, and businesses — engineered for uptime and backed by friendly support.
          </motion.p>

          <motion.div {...fadeUp(0.1)} className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-deep-navy px-6 py-3 font-semibold shadow hover:bg-gray-100"
            >
              <Router size={18} /> Contact us
            </Link>
            <a href="#list" className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 hover:bg-white/10">
              View list <ChevronRight size={16} />
            </a>
          </motion.div>
        </section>
      </header>

      {/* breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link> <span className="mx-1">/</span> <span>Services</span>
      </nav>

      {/* ——— gradient band ——— */}
      <Band />

      {/* ===== SERVICES LIST ===== */}
      <section id="list" className="max-w-7xl mx-auto px-6 py-12">
        <motion.header {...fadeUp()} className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-electric-purple">What we offer</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Connectivity & Network Services</h2>
          <p className="mt-2 text-gray-600">Quick overview — contact us for availability, plans, and installation timelines.</p>
        </motion.header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, points }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14, rotate: -0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.03 * i }}
              whileHover={{ y: -3, rotate: 0.3, transition: { type: "spring", stiffness: 230, damping: 16 } }}
              className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition relative overflow-hidden"
            >
              <span className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-electric-purple/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gray-50 border text-electric-purple">
                <Icon />
              </div>
              <div className="mt-3 font-semibold text-lg">{title}</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-blue" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-electric-purple text-white px-4 py-2 font-semibold shadow hover:bg-electric-purple/90"
                >
                  Contact us <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* rotating showcase */}
        <div className="mt-10">
          <ShowcaseStrip />
        </div>
      </section>

      {/* ——— gradient band ——— */}
      <Band />

      {/* ===== BROCHURE & LIGHT CONTACT STRIP ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-6 items-stretch">
        <motion.div {...fadeUp()} className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
          <h3 className="text-xl font-semibold text-gray-900">Prefer a one-pager?</h3>
          <p className="mt-1 text-gray-700">Download a concise brochure and share it with your team.</p>
          <div className="mt-4">
            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-semibold hover:bg-gray-50"
            >
              <Download size={18} /> Download brochure (PDF)
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.05)} className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Talk to a human</h3>
          <p className="mt-1 text-gray-700">Tell us your location and target speeds — we’ll confirm what’s available.</p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-electric-purple text-white px-4 py-2 font-semibold shadow hover:bg-electric-purple/90"
            >
              Contact us <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ===== FINAL CTA (white end) ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Ready to get connected?</h3>
            <p className="mt-2 text-gray-700">We’ll help you pick the right option and schedule installation.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-electric-purple text-white px-6 py-3 rounded-2xl shadow hover:bg-electric-purple/90"
            >
              Contact us <ChevronRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-50"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <Footer dense />
    </div>
  );
}
