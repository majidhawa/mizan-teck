"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck, Rocket, LineChart, Users2, Globe2, Sparkles, Building2, Target,
  Crown, Briefcase, Cpu, Palette, Brain, Shield, Wrench
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">

      <header className="relative overflow-hidden text-white">
        {/* background stack */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">About Mizan Teck</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-[1.08]">
              Practical software. <span className="text-emerald-200">Real business outcomes.</span>
            </h1>
            <p className="mt-5 text-white/90 max-w-xl">
              We’re a US–Kenya collaboration delivering modern web &amp; mobile platforms, data pipelines, and AI-assisted workflows.
              Based in <strong>Texas, USA</strong> and partnered with the engineering team at <strong>Tahidi Corp (Kenya)</strong>,
              we design, build, and operate systems you can run with confidence.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contacts" className="inline-flex items-center gap-2 bg-white text-[#0b1324] px-6 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100">
                Talk to us
              </Link>
              <a href="#team" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-2xl hover:bg-white/10">
                Meet the team
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/85">
              <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-200" size={18}/> Delivery you can operate</div>
              <div className="flex items-center gap-2"><Rocket className="text-emerald-200" size={18}/> CI/CD by default</div>
            </div>
          </div>

          {/* safe fallback image */}
          <div className="relative h-72 rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <Image src="/tech.jpg" alt="Collaboration at Mizan Teck" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          </div>
        </section>
      </header>

      {/* ===== WHO WE ARE ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-white" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Who we are</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Mizan Teck is a product-minded software consultancy helping organizations ship dependable, measurable software.
                We bring a <strong>partner mindset</strong> — clarifying outcomes, shaping scope, then delivering the smallest
                valuable release to prove impact fast.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {icon: <Building2/>, title: "Texas HQ + Kenya Engineering", copy: "US presence with a senior Kenya delivery hub via Tahidi Corp."},
                  {icon: <Users2/>, title: "10+ years combined PM & Eng", copy: "Seasoned leadership across product and engineering."},
                  {icon: <LineChart/>, title: "Outcome-driven", copy: "We measure success by user impact, not output."},
                  {icon: <Target/>, title: "Boring-on-purpose stack", copy: "Fewer incidents, faster releases, predictable ops."},
                ].map((b) => (
                  <div key={b.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                    <div className="h-9 w-9 grid place-items-center rounded-lg bg-emerald-50 text-emerald-700">{b.icon}</div>
                    <div className="mt-3 font-semibold">{b.title}</div>
                    <p className="text-sm text-gray-600 mt-1">{b.copy}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* quick metrics */}
            <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
              className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">By the numbers</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  ["Projects shipped","40+"],
                  ["Industries","8+"],
                  ["Avg. cycle time","10d"],
                  ["Cloud spend saved","25%"],
                ].map(([k,v]) => (
                  <div key={k} className="rounded-xl border p-4 text-center">
                    <div className="text-2xl font-extrabold text-emerald-700">{v}</div>
                    <div className="mt-1 text-xs text-gray-500">{k}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== COLLABORATION MODEL ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">How we’re structured</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Tahidi Corp × Mizan Investments</h3>
              <p className="mt-3 text-gray-700">
                We combine US-based client stewardship with a Kenya engineering core. Mizan Investments leads
                discovery, contracts, and long-term relationships. Tahidi Corp embeds product managers, designers,
                and engineers to deliver from idea to production.
              </p>
              <ul className="mt-5 space-y-2 text-gray-700">
                <li>• <strong>Mizan Investments (US):</strong> client discovery, contracts, governance.</li>
                <li>• <strong>Tahidi Corp (Kenya):</strong> product strategy, engineering, QA, DevOps.</li>
                <li>• <strong>Joint cadence:</strong> weekly demos, metrics reviews, transparent budgets.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-emerald-700">Leadership</h4>
              <p className="mt-2 text-gray-700">
                Guided by <strong>CEO Zachary Cooper</strong>, Mizan Teck emphasizes clear goals, inclusive teams, and sustainable delivery.
                Zachary’s management brings clarity and momentum, ensuring diverse voices contribute to better products.
              </p>
              <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg border p-3">
                  <div className="text-gray-500">Footprint</div>
                  <div className="font-semibold">Texas &amp; Nairobi</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-gray-500">Engagement</div>
                  <div className="font-semibold">Outcome-based</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-gray-500">Governance</div>
                  <div className="font-semibold">Weekly demos</div>
                </div>
              </div>
            </div>
          </div>

          {/* locations strip */}
          <div className="mt-10 rounded-2xl border bg-white p-5 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700"><Globe2 className="text-emerald-700" /> US (Texas) • Kenya</div>
            <div className="h-px flex-1 bg-gray-200" />
            <div className="text-gray-500">We work across time zones; handoffs keep delivery moving ~24h.</div>
          </div>
        </div>
      </section>

      {/* ===== VALUES (glass on dark) ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-white">
          <header className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Values</p>
            <h3 className="text-3xl font-extrabold">What guides our work</h3>
          </header>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Sparkles/>, t: "Outcome over output", d: "Ship small, improve fast, measure impact." },
              { icon: <LineChart/>, t: "Quality by default", d: "Testing, CI/CD, observability — not afterthoughts." },
              { icon: <Users2/>, t: "Partner mindset", d: "We embed, communicate openly, and move as one." },
            ].map((v, i) => (
              <motion.div key={v.t} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.04}}
                className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6"
              >
                <div className="h-9 w-9 grid place-items-center rounded-lg bg-white/15 text-emerald-200">{v.icon}</div>
                <div className="mt-3 font-semibold">{v.t}</div>
                <p className="text-white/85 text-sm mt-1">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM (icons, no photos) ===== */}
      <section id="team" className="relative overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Team</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">People who ship</h3>
            <p className="text-gray-700 mt-2 max-w-3xl">
              Senior PMs, designers, and engineers from Texas and Kenya. We build with empathy for operators and
              a healthy respect for boring, proven tools.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Crown, name:"Zachary Cooper", role:"CEO • Strategy", blurb:"Sets clear outcomes and inclusive culture; aligns delivery with business value." },
              { Icon: Briefcase, name:"Lead PM", role:"Product Management", blurb:"Discovery, scoping, roadmaps, and measurable releases." },
              { Icon: Cpu, name:"Lead Engineer", role:"Full-stack / DevOps", blurb:"Architecture, CI/CD, observability, incident-ready ops." },
              { Icon: Palette, name:"Design Lead", role:"Product Design / UX", blurb:"Flows, interaction patterns, and usability testing." },
              { Icon: Brain, name:"Data / ML", role:"Pipelines & ML", blurb:"Dashboards, pragmatic ML, and data-informed decisions." },
              { Icon: Shield, name:"QA & SRE", role:"Quality & Reliability", blurb:"Automation, load checks, SLOs, and runbooks." },
            ].map(({ Icon, name, role, blurb }) => (
              <div key={name} className="rounded-2xl border bg-white p-6">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 grid place-items-center">
                  <Icon />
                </div>
                <div className="mt-3 font-semibold">{name}</div>
                <div className="text-sm text-emerald-700">{role}</div>
                <p className="text-sm text-gray-600 mt-2">{blurb}</p>
              </div>
            ))}

            {/* Optional: operational card */}
            <div className="rounded-2xl border bg-white p-6">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 grid place-items-center">
                <Wrench />
              </div>
              <div className="mt-3 font-semibold">Our global network</div>
              <div className="text-sm text-emerald-700">Texas &amp; Nairobi</div>
              <p className="text-sm text-gray-600 mt-2">
                We work across time zones; structured hand-offs keep delivery moving ~24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Process</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">From idea to reliable release</h3>
          </header>
          <div className="grid lg:grid-cols-5 gap-4">
            {[
              { n:"01", t:"Discover", d:"Align on one core journey, constraints, and success metrics." },
              { n:"02", t:"Design", d:"Architecture, UX flows, delivery plan, preview envs." },
              { n:"03", t:"Build", d:"Short cycles, visible demos, QA automation." },
              { n:"04", t:"Harden", d:"Load checks, runbooks, SLOs, observability." },
              { n:"05", t:"Launch", d:"Docs, handover, incident channel, roadmap." },
            ].map((s, i) => (
              <motion.div key={s.t} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.03}}
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

      {/* ===== TESTIMONIALS (glass on dark) ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-white">
          <header className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Testimonials</p>
            <h3 className="text-2xl md:text-3xl font-extrabold">What partners say</h3>
          </header>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              "They scoped the real problem and shipped in under a month. Our ops got faster immediately.",
              "Reliable engineering. Fewer incidents, faster releases, and clearer governance.",
              "Outcome over output. They cut noise and delivered measurable improvements.",
            ].map((q,i)=>(
              <div key={i} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6">
                <Sparkles className="text-emerald-200" />
                <blockquote className="mt-2 leading-7">{q}</blockquote>
                <div className="text-sm text-white/80 mt-1">— Partner feedback</div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Let’s plan your first release</h2>
            <p className="mt-2 text-white/80">Free 30-min scoping call. We’ll align on outcomes and propose a pragmatic path.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contacts" className="inline-flex items-center gap-2 bg-white text-[#0b1324] px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
              Book a discovery call
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
