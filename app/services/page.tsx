"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Database, Workflow, Server, ShieldCheck, LineChart,
  Rocket, Gauge, CloudCog, Cpu, CreditCard, BarChart3, Layers, Lock,
  Calendar, HelpCircle, ArrowRight
} from "lucide-react";
import { image } from "framer-motion/client";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

export default function ServicesPage() {
  const core = [
    { Icon: Code2, title: "Web Platforms", desc: "Next.js, Node, edge APIs — fast, secure, maintainable." },
    { Icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform React Native apps with clean APIs & analytics." },
    { Icon: Database, title: "Data & ML", desc: "Ingest, transform, visualize. Pragmatic ML for decisions." },
    { Icon: Workflow, title: "Product & UX", desc: "Discovery, flows, prototypes, and outcome-driven roadmaps." },
    { Icon: CloudCog, title: "DevOps & SRE", desc: "CI/CD, infra-as-code, observability, runbooks & SLOs." },
    { Icon: ShieldCheck, title: "Security & Compliance", desc: "Auth, audit trails, secrets, least privilege, reviews." },
  ];

  const buckets = [
    {
      title: "Build (MVP 6–10 weeks)",
      points: ["Web/Mobile app", "Core APIs & Auth", "Payments & Analytics", "Observability & CI/CD"],
      blurb: "Tight scope. Ship the smallest valuable release that proves impact.",
      badge: "Outcome-driven",
      Icon: Rocket,
    },
    {
      title: "Augment (Dedicated squad)",
      points: ["2–5 engineers + PM/Design", "Sprint goals tied to KPIs", "Preview environments", "QA & automation"],
      blurb: "Embed a senior squad to accelerate your roadmap with real momentum.",
      badge: "Velocity",
      Icon: Gauge,
    },
    {
      title: "Advise (CTO office)",
      points: ["Architecture reviews", "Cost optimization", "Security & reliability", "Hiring & interviews"],
      blurb: "Hands-on guidance for leaders who need clarity, tradeoffs, and plans.",
      badge: "Pragmatic",
      Icon: LineChart,
    },
  ];

  const timeline = [
    { n: "01", t: "Discover", d: "Align on one core journey, constraints, risks, and success metrics." },
    { n: "02", t: "Design", d: "Information architecture, UX flows, API contracts, delivery plan." },
    { n: "03", t: "Build", d: "Short cycles with visible demos. Tests and instrumentation by default." },
    { n: "04", t: "Harden", d: "Load checks, runbooks, SLOs, on-call, incident drills." },
    { n: "05", t: "Launch", d: "Docs, handover, training, roadmap & next bets." },
  ];

  const capabilities = [
    { Icon: Layers, label: "Clean architecture" },
    { Icon: Lock, label: "Secure by design" },
    { Icon: CreditCard, label: "Payments & billing" },
    { Icon: Server, label: "Cloud-native infra" },
    { Icon: BarChart3, label: "Analytics & KPIs" },
    { Icon: Cpu, label: "GenAI & ML where it helps" },
  ];

  const faqs = [
    {
      q: "How fast can you start?",
      a: "Usually within 1–2 weeks. We begin with a free 30-minute scoping call and a short alignment note so you know exactly what you’ll get."
    },
    {
      q: "Do you work fixed-bid or time-and-materials?",
      a: "Both. For well-shaped scopes we can offer fixed-bid MVPs. Ongoing product work is usually T&M with clear sprint goals tied to KPIs."
    },
    {
      q: "What stacks do you prefer?",
      a: "“Boring on purpose.” Next.js/React, Node/TypeScript, Postgres, Prisma, Terraform, AWS/GCP. We choose predictability over novelty."
    },
    {
      q: "Can you work with our in-house team?",
      a: "Yes. We embed alongside your PM/Eng, share preview envs, and keep demos + runbooks visible so the work is easy to operate."
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* ===== HERO (dark) ===== */}
      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.h1 {...fadeUp} className="text-4xl md:text-5xl font-extrabold">
            Services that turn ideas into <span className="text-emerald-200">reliable releases</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.05 }} className="mt-4 max-w-2xl text-white/90">
            Product strategy, full-stack engineering, data, and operations — delivered as MVPs, embedded squads, or advisory.
          </motion.p>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts" className="inline-flex items-center gap-2 rounded-2xl bg-white text-[#0b1324] px-6 py-3 font-semibold shadow hover:bg-gray-100">
              <Calendar size={18} /> Book a discovery call
            </Link>
            <a href="#buckets" className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 hover:bg-white/10">
              Explore offerings <ArrowRight size={16} />
            </a>
          </motion.div>
        </section>
      </header>

      {/* ===== CORE CAPABILITIES (glass cards) ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
          <header className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">What we’re great at</h2>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {core.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* quick badges row */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {capabilities.map(({ Icon, label }) => (
              <div key={label} className="rounded-xl border bg-white p-3 text-sm text-gray-700 flex items-center gap-2">
                <Icon className="text-emerald-700" size={18} /> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENGAGEMENT BUCKETS (glass gradient) ===== */}
      <section id="buckets" className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <header className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Engagement models</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Build • Augment • Advise</h2>
            <p className="mt-2 text-white/90">Pick what you need now; grow into the next as your product scales.</p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {buckets.map(({ title, points, blurb, badge, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/15 text-emerald-200">
                    <Icon />
                  </div>
                  <span className="text-[11px] px-2 py-1 rounded-lg bg-white/10 border border-white/15">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="text-white/85 text-sm mt-1">{blurb}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/90">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link href="/contacts" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b1324] px-4 py-2 font-semibold shadow hover:bg-gray-100">
                    Discuss this model
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DELIVERY TIMELINE ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Process</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">From idea to reliable release</h2>
          </header>

          <div className="grid lg:grid-cols-5 gap-4">
            {timeline.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl border bg-white p-5"
              >
                <div className="text-xs text-emerald-700 font-semibold">{s.n}</div>
                <div className="font-semibold">{s.t}</div>
                <p className="text-sm text-gray-600 mt-1">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ (glass) ===== */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <header className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">FAQ</p>
            <h2 className="text-3xl font-extrabold">Answers that unblock decisions</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 text-emerald-200" />
                  <div>
                    <div className="font-semibold">{q}</div>
                    <p className="text-white/85 text-sm mt-1">{a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center text-white">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Ready to move from plan to shipped?</h3>
            <p className="mt-2 text-white/85">Free 30-min scoping call. We’ll align on outcomes and propose a pragmatic path.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contacts" className="inline-flex items-center gap-2 bg-white text-[#0b1324] px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
              <Calendar size={18} /> Book a discovery call
            </Link>
            <Link href="/contacts" className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-2xl hover:bg-white/10">
              Contact us
            </Link>
          </div>
        </div>
      </section>
       <Footer dense />
    </div>
  );
}
