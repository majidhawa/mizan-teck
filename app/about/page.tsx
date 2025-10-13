"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck, Network, Building2, Globe2, Award, ChevronRight, Signal, Wifi, Router
} from "lucide-react";


function Floaters() {
  const dots = Array.from({ length: 8 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{
            background:
              i % 2 === 0 ? "rgba(124,92,255,0.6)" : "rgba(0,178,255,0.6)",
            boxShadow: "0 0 18px rgba(124,92,255,0.45)",
            top: `${10 + (i * 11) % 80}%`,
            left: `${(i * 17) % 90}%`,
          }}
          initial={{ y: 0, opacity: 0.6 }}
          animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}


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

export default function AboutPage() {

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <div className="bg-white text-gray-900">

      <header className="relative overflow-hidden text-white">

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue" />

        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10" />
        <Floaters />

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.22em] text-white/85"
            >
              About Pagram
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-4xl md:text-5xl font-extrabold leading-[1.08]"
            >
              Reliable internet for homes & businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-white/90 max-w-xl"
            >
              Pagram is a Kenyan Internet Service Provider delivering high-speed{" "}
              <strong>fiber</strong> and <strong>fixed wireless</strong> connectivity.
              We design, deploy, and manage networks for estates, SMBs, and enterprises —
              with responsive support and transparent plans.
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100"
              >
                Contact us <ChevronRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-6 py-3 rounded-2xl text-white hover:bg-white/15"
              >
                View services
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} /> 99.9% target uptime
              </div>
              <div className="flex items-center gap-2">
                <Router size={18} /> Managed Wi-Fi available
              </div>
            </div>
          </div>


          <motion.div
            style={{ y }}
            className="relative h-72 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
          >
            <Image
              src="/placeholder-about-hero.jpg"
              alt="Pagram network"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          </motion.div>
        </section>
      </header>


      <nav className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        <span className="mx-1">/</span> <span>About Us</span>
      </nav>


      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-extrabold"
            >
              Who we are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-700 leading-relaxed"
            >
              We connect communities and businesses to fast, dependable internet.
              Our team engineers <strong>last-mile fiber</strong> where available and{" "}
              <strong>fixed wireless</strong> where fiber is limited — so you can browse, stream,
              collaborate, and run your operations without interruption.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-gray-700 leading-relaxed"
            >
              Pagram also provides <strong>managed Wi-Fi</strong>, <strong>secure routing</strong>,
              and <strong>monitoring</strong> to keep networks healthy. Whether it’s a home,
              a gated community, or an enterprise site, we tailor solutions to the way you work and live.
            </motion.p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: Building2,
                  title: "Tailored deployments",
                  copy: "Estate, SMB, and enterprise rollouts.",
                },
                {
                  Icon: Network,
                  title: "High-quality hardware",
                  copy: "Carrier-grade equipment and configs.",
                },
                {
                  Icon: Globe2,
                  title: "Coverage expansion",
                  copy: "Fiber first; fixed wireless as needed.",
                },
                {
                  Icon: Award,
                  title: "Service you can trust",
                  copy: "Transparent SLAs and friendly support.",
                },
              ].map(({ Icon, title, copy }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                >
                  <div className="h-9 w-9 grid place-items-center rounded-lg bg-gray-50 text-gray-900 border">
                    <Icon size={18} />
                  </div>
                  <div className="mt-3 font-semibold">{title}</div>
                  <p className="text-sm text-gray-600 mt-1">{copy}</p>
                </motion.div>
              ))}
            </div>
          </div>


          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Quick facts
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                ["Target uptime", "99.9%"],
                ["Avg. reply", "1h"],
                ["Installs / yr", "500+"],
                ["Customers", "1.2k+"],
              ].map(([k, v], i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border p-4 text-center"
                >
                  <div className="text-2xl font-extrabold text-gray-900">{v}</div>
                  <div className="mt-1 text-xs text-gray-500">{k}</div>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ——— Gradient band between sections ——— */}
      <Band />


      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900">Mission</h3>
            <p className="mt-2 text-gray-700">
              To provide affordable, high-quality internet and managed networking that keeps people and
              businesses connected to what matters most.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900">Vision</h3>
            <p className="mt-2 text-gray-700">
              Continuous innovation and expansion — bringing dependable connectivity to more homes,
              estates, and workplaces across Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ——— Gradient band between sections ——— */}
      <Band />


      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <h3 className="font-semibold text-gray-900">Technology partners</h3>
          <p className="mt-2 text-gray-700">
            We work with trusted network vendors and distributors to deliver dependable performance.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Cambium", "Huawei", "Ubiquiti", "MikroTik", "Redington", "Structured Cabling"].map(
              (p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * i }}
                  className="px-3 py-1 rounded-full border bg-gray-50"
                >
                  {p}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* ——— Gradient band between sections ——— */}
      <Band />


      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Case study
            </p>
            <h3 className="mt-1 text-xl font-semibold text-gray-900">
              Estate Wi-Fi deployment (Naivasha)
            </h3>
            <p className="mt-2 text-gray-700">
              Pagram designed and deployed an estate-wide Wi-Fi network across a large property,
              balancing coverage, roaming, and backhaul capacity. The project improved tenant
              experience and reduced onsite support visits.
            </p>
            <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              <li className="rounded-lg border bg-gray-50 p-3">Seamless roaming</li>
              <li className="rounded-lg border bg-gray-50 p-3">24/7 monitoring</li>
              <li className="rounded-lg border bg-gray-50 p-3">Rapid installation</li>
            </ul>
            <div className="mt-5">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-electric-purple font-semibold hover:underline"
              >
                Explore our services <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border bg-white"
          >
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder-case.jpg"
                alt="Estate Wi-Fi deployment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
            </div>
          </motion.div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Let’s get you connected
            </h2>
            <p className="mt-2 text-gray-700">
              Share your location and preferred plan — we’ll confirm options and timelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-electric-purple text-white px-6 py-3 rounded-2xl font-semibold shadow hover:brightness-110"
            >
              Contact us <ChevronRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-50"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <Footer dense />
    </div>
  );
}
