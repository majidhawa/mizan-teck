"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Briefcase, Code2, Smartphone, Database, Palette, Workflow,
  CloudCog, ShieldCheck, Rocket, Calendar, HelpCircle, Mail
} from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: d },
});

export default function CareerPage() {
  const disciplines = [
    { Icon: Code2, title: "Full-stack Engineering", blurb: "TypeScript • Next.js • Node • Postgres" },
    { Icon: Smartphone, title: "Mobile", blurb: "React Native • Clean APIs • Analytics" },
    { Icon: Database, title: "Data & ML", blurb: "Pipelines • Dashboards • Pragmatic ML" },
    { Icon: Palette, title: "Product Design", blurb: "Flows • Prototypes • Usability" },
    { Icon: Workflow, title: "Product Management", blurb: "Discovery • Roadmaps • Outcomes" },
    { Icon: CloudCog, title: "DevOps & SRE", blurb: "CI/CD • IaC • Observability • SLOs" },
  ];

  const steps = [
    { n: "01", t: "Intro & fit", d: "30-min call on interests, experience, and what great work means to you." },
    { n: "02", t: "Craft interview", d: "Realistic problem solving — code or product exercise, no trick puzzles." },
    { n: "03", t: "Collaboration", d: "Pair with us on a mini-scope to see how we communicate and decide." },
    { n: "04", t: "Offer", d: "Transparent leveling, salary band, and growth plan." },
  ];

  const benefits = [
    "Remote-first across US & Kenya time zones",
    "Outcome-based work, flexible hours",
    "Learning budget & certifications",
    "Top-tier tooling (preview envs, CI/CD, observability)",
    "Supportive, inclusive culture",
  ];

  const faqs = [
    {
      q: "Are there openings right now?",
      a: "Not at the moment. We hire in focused batches. Share your details and we’ll reach out when a role opens that matches your skills.",
    },
    {
      q: "Do you support internships or apprenticeships?",
      a: "Occasionally. Tell us your focus area in the form and we’ll keep you in the loop for early-career programs.",
    },
    {
      q: "What does your tech stack look like?",
      a: "Boring-on-purpose: Next.js/React, Node/TypeScript, Postgres, Prisma, Terraform, AWS/GCP. We optimize for reliability and speed.",
    },
    {
      q: "How do you work with clients?",
      a: "Short cycles, visible demos, and measurable outcomes. We embed with stakeholders and make operations easy with runbooks & SLOs.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* ===== HERO (dark glass) ===== */}
      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.h1 {...fade()} className="text-4xl md:text-5xl font-extrabold">
            Build practical software. <span className="text-emerald-200">Ship real outcomes.</span>
          </motion.h1>
          <motion.p {...fade(0.05)} className="mt-4 max-w-2xl mx-auto text-white/90">
            At <span className="font-semibold">Mizan Teck</span> you’ll solve useful problems for real users —
            alongside a kind, senior team across Texas & Kenya.
          </motion.p>

          {/* No openings banner */}
          <motion.div
            {...fade(0.1)}
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur px-4 py-3 text-white"
          >
            <Briefcase size={18} className="text-emerald-200" />
            Currently, we don’t have open roles — join our talent network to stay in the loop.
          </motion.div>

          {/* CTAs */}
          <motion.div {...fade(0.15)} className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-[#0b1324] px-6 py-3 font-semibold shadow hover:bg-gray-100"
            >
              <Calendar size={18} /> Register interest
            </Link>
            <a
              href="mailto:mizanteck2013@gmail.com?subject=Talent%20Network%20Registration&body=Hi%20Mizan%20Teck%2C%0A%0AMy%20name%20is%20...%0ARole%20of%20interest%3A%20...%0ALocation%2FTimezone%3A%20...%0APortfolio%2FGitHub%3A%20...%0A%0AThanks!"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 hover:bg-white/10"
            >
              <Mail size={18} /> Email résumé
            </a>
          </motion.div>
        </section>
      </header>

      {/* ===== DISCIPLINES ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
          <header className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Disciplines</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Where you could fit</h2>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {disciplines.map(({ Icon, title, blurb }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.03)}
                className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE HIRE ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Hiring process</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">What to expect</h3>
          </header>
          <div className="grid lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div key={s.t} {...fade(i * 0.03)} className="rounded-2xl border bg-white p-5">
                <div className="text-xs text-emerald-700 font-semibold">{s.n}</div>
                <div className="font-semibold">{s.t}</div>
                <p className="text-sm text-gray-600 mt-1">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS STRIP ===== */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
          <header className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Benefits</p>
            <h3 className="text-3xl font-extrabold">Work that supports great work</h3>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                {...fade(i * 0.02)}
                className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-4 text-center text-white/90"
              >
                {b}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
          <header className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">FAQ</p>
            <h3 className="text-3xl font-extrabold">Answers for candidates</h3>
          </header>

          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map(({ q, a }, i) => (
              <motion.div
                key={q}
                {...fade(i * 0.02)}
                className="rounded-2xl border bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 text-emerald-700" />
                  <div>
                    <div className="font-semibold">{q}</div>
                    <p className="text-gray-600 text-sm mt-1">{a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center text-white">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Join our talent network</h3>
            <p className="mt-2 text-white/85">
              Tell us what you’re great at. We’ll reach out when a role opens that matches your craft.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contacts" className="inline-flex items-center gap-2 bg-white text-[#0b1324] px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
              <Calendar size={18} /> Register interest
            </Link>
            <a
              href="mailto:mizanteck2013@gmail.com?subject=Talent%20Network%20Registration&body=Hi%20Mizan%20Teck%2C%0A%0AMy%20name%20is%20...%0ARole%20of%20interest%3A%20...%0ALocation%2FTimezone%3A%20...%0APortfolio%2FGitHub%3A%20...%0A%0AThanks!"
              className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-2xl hover:bg-white/10"
            >
              <Mail size={18} /> Email résumé
            </a>
          </div>
        </div>
      </section>
       <Footer dense />
    </div>
  );
}
