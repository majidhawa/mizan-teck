"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  ArrowRight, ShieldCheck, Rocket, Code2, Smartphone, Database, Workflow,
  LineChart, Cpu, Sparkles
} from "lucide-react";

/* ---------------- Particles (no extra libs) ---------------- */
function Particles({ density = 90, speed = 0.35, connect = true }: { density?: number; speed?: number; connect?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    const R = (a: number, b: number) => a + Math.random() * (b - a);
    const ps: P[] = [];
    for (let i = 0; i < density; i++) {
      ps.push({ x: R(0, canvas.width), y: R(0, canvas.height), vx: R(-speed, speed), vy: R(-speed, speed), r: R(1, 2.3) * dpr });
    }

    const tick = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(16,185,129,0.9)";
      for (const p of ps) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      if (connect) {
        const max = 120 * dpr;
        for (let i = 0; i < ps.length; i++) {
          for (let j = i + 1; j < ps.length; j++) {
            const a = ps[i], b = ps[j];
            const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
            if (d2 < max * max) {
              const alpha = 1 - Math.sqrt(d2) / max;
              ctx.strokeStyle = `rgba(5,150,105,${alpha * 0.25})`;
              ctx.lineWidth = 1;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, [density, speed, connect]);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = ["Tahidi Corp", "Mizan Investments", "Fintech", "Logistics", "SaaS", "AI", "DevOps", "Stripe", "Next.js", "React Native"];
  return (
    <div className="relative py-6 bg-[#0b1324] border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
      <div className="flex gap-10 animate-[marquee_26s_linear_infinite]" style={{ whiteSpace: "nowrap" }}>
        {items.concat(items).map((t, i) => (<span key={i} className="text-white/70 text-sm">{t} •</span>))}
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0%) } 100% { transform: translateX(-50%) } }
      `}</style>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const data = [
    { q: "They scoped the real problem and shipped in under a month. The governance cadence kept us aligned.", a: "Operations Lead, Logistics" },
    { q: "Reliable, thoughtful engineering. Fewer incidents, faster releases.", a: "CTO, Fintech" },
    { q: "Outcome over output. They cut noise and delivered measurable improvements.", a: "Founder, SaaS" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI(v => (v + 1) % data.length), 5000); return () => clearInterval(id); }, []);
  return (
    <div className="rounded-2xl border bg-white p-6">
      <Sparkles className="text-emerald-600" />
      <blockquote className="mt-2 text-lg leading-8 min-h-[96px]">{data[i].q}</blockquote>
      <div className="mt-1 text-sm text-gray-600">— {data[i].a}</div>
    </div>
  );
}

/* ---------------- Counter (animated metrics) ---------------- */
function Counter({ value, from = 0, duration = 1200 }: { value: string; from?: number; duration?: number }) {
  const [out, setOut] = useState<string>(value);
  useEffect(() => {
    const prefixMatch = value.match(/^[^\d]*/)?.[0] ?? "";
    const numMatch = value.match(/[\d.]+/)?.[0] ?? "0";
    const suffix = value.slice((prefixMatch + numMatch).length);
    const target = parseFloat(numMatch);

    let raf = 0, start = 0;
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const n = from + (target - from) * ease(p);
      const formatted = numMatch.includes(".") ? n.toFixed(1) : Math.round(n).toString();
      setOut(`${prefixMatch}${formatted}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, from, duration]);

  return <>{out}</>;
}

export default function Page() {
  const heroImages = ["/hero-consult.jpg", "/hero-dev.jpg", "/hero-dataml.jpg"];
  const [idx, setIdx] = useState(0);
  useEffect(() => { const id = setInterval(() => setIdx(v => (v + 1) % heroImages.length), 5000); return () => clearInterval(id); }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* ================ HERO (emerald, no waves) ================ */}
      <header className="relative overflow-hidden text-white">
        {/* stronger emerald gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-[#0a1428] opacity-95" />
        {/* subtle texture + particles */}
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <Particles density={90} speed={0.35} connect />

        {/* background video (desktop) + image fallback (mobile) with tint */}
        <div className="absolute inset-0 -z-10">
          <video
            className="hidden md:block w-full h-full object-cover opacity-25 mix-blend-overlay"
            autoPlay muted loop playsInline
            poster={heroImages[idx]}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <Image
            key={`fallback-${heroImages[idx]}`}
            src={heroImages[idx]}
            alt="Hero background"
            fill
            priority
            className="md:hidden object-cover opacity-30 mix-blend-overlay transition-opacity duration-700"
          />
        </div>

        <section className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.22em] text-emerald-200">
              Tahidi Corp × Mizan Investments
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Practical software. <span className="text-emerald-200">Measurable outcomes.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-5 text-white/85 max-w-xl">
              We’re a product-minded engineering team. Mizan Teck builds reliable web & mobile platforms, data pipelines,
              and AI-assisted workflows — while Mizan Investments sources and stewards client relationships.
              Together, we ship software that moves businesses forward.
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contacts" className="inline-flex items-center gap-2 bg-white text-[#0b1324] px-6 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100">
                Book a call <ArrowRight size={18} />
              </Link>
              <Link href="/contacts" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-2xl hover:bg-white/10">
                Contact us
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-200" size={18} /> Delivery you can operate</div>
              <div className="flex items-center gap-2"><Rocket className="text-emerald-200" size={18} /> CI/CD by default</div>
            </div>
          </div>

          {/* hero mock + glass chips */}
          <div className="relative">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <Image src="/hero-app.jpg" alt="Product preview" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-white/10 backdrop-blur border border-white/15 grid place-items-center">
              <LineChart className="text-emerald-200" />
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-3xl bg-white/10 backdrop-blur border border-white/15 grid place-items-center">
              <Cpu className="text-emerald-200" />
            </div>
          </div>
        </section>

        {/* subtle section seam (replaces wave) */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </header>

      {/* marquee */}
      <Marquee />

      {/* Metrics (animated) */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { k: "Projects shipped", v: "40+" },
            { k: "Industries served", v: "8+" },
            { k: "Avg. cycle time", v: "10d" },
            { k: "Cloud costs saved", v: "25%" },
          ].map(({ k, v }, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border p-6 text-center bg-white shadow-sm"
            >
              <div className="text-3xl font-extrabold text-emerald-600">
                <Counter value={v} duration={1100 + i * 150} />
              </div>
              <div className="mt-2 text-gray-500 text-sm">{k}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services (emerald glass) */}
      <section id="services" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <header className="text-center mb-12 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">From idea to reliable release</h2>
            <p className="mt-2 text-white/85">We build, augment, and advise — always outcome-driven.</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Code2, title: "Web Platforms", copy: "Next.js, Node — built for uptime and speed." },
              { icon: Smartphone, title: "Mobile Apps", copy: "Cross-platform apps with clean APIs & analytics." },
              { icon: Database, title: "Data & ML", copy: "Pipelines, dashboards, pragmatic ML for decisions." },
              { icon: Workflow, title: "Product & UX", copy: "Workshops, roadmaps, UX flows that reduce risk." },
            ].map(({ icon: Icon, title, copy }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-2xl p-6 border border-white/15 bg-white/10 backdrop-blur
                           text-white hover:bg-white/15 hover:shadow-2xl transition relative overflow-hidden"
              >
                <span className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/15 text-emerald-200 border border-white/15">
                  <Icon />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="text-white/85 text-sm mt-1">{copy}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/85">
                  {title === "Web Platforms" && ["Next.js", "Node", "Postgres"].map(t => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/10 border border-white/15">{t}</span>
                  ))}
                  {title === "Mobile Apps" && ["React Native", "Expo", "API-first"].map(t => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/10 border border-white/15">{t}</span>
                  ))}
                  {title === "Data & ML" && ["Pipelines", "Dashboards", "LLM"].map(t => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/10 border border-white/15">{t}</span>
                  ))}
                  {title === "Product & UX" && ["Workshops", "Roadmaps", "UX flows"].map(t => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/10 border border-white/15">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-4 mt-12">
            {[
              { n: "01", t: "Discover", d: "Align on one core journey, constraints, and success metrics." },
              { n: "02", t: "Design", d: "Architecture, UX flows, delivery plan, preview envs." },
              { n: "03", t: "Build", d: "Short cycles, visible demos, QA automation." },
              { n: "04", t: "Harden", d: "Load checks, runbooks, SLOs, observability." },
              { n: "05", t: "Launch", d: "Docs, handover, incident channel, roadmap." },
            ].map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-5 text-white"
              >
                <div className="text-xs text-emerald-200 font-semibold">{s.n}</div>
                <div className="font-semibold">{s.t}</div>
                <p className="text-sm text-white/85 mt-1">{s.d}</p>
              </motion.div>
            ))}
          </div>

          {/* section seam */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* Work */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Work</p>
          <h3 className="text-2xl md:text-3xl font-extrabold">Selected case studies</h3>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tag:"Fintech", title:"Payments & Payouts at Scale", kpis:["TTV $1.5M+","Chargebacks <0.3%"], href:"/projects/fintech", img:"/cs-fintech.jpg" },
            { tag:"Logistics", title:"Fleet & Route Optimization", kpis:["On-time +18%","Fuel −12%"], href:"/projects/logistics", img:"/cs-logistics.jpg" },
            { tag:"SaaS", title:"AI-Assisted Ops Dashboards", kpis:["MTTR −35%","CSAT +22"], href:"/projects/saas", img:"/cs-saas.jpg" },
          ].map((c) => (
            <a key={c.title} href={c.href} className="group rounded-2xl border overflow-hidden bg-white hover:shadow-2xl transition block">
              <div className="relative h-44"><Image src={c.img} alt={c.title} fill className="object-cover" /></div>
              <div className="p-5">
                <div className="text-xs text-emerald-700 font-semibold">{c.tag}</div>
                <div className="mt-1 font-semibold text-lg group-hover:underline">{c.title}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
                  {c.kpis.map((k) => (<span key={k} className="px-2 py-1 rounded-full bg-gray-100 border">{k}</span>))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Stack + Testimonial */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-700">Tech</p>
            <h3 className="text-2xl md:text-3xl font-extrabold">A modern, boring-on-purpose stack</h3>
            <p className="mt-2 text-gray-600">We choose tools for reliability, speed, and great DX — not hype.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {["Next.js", "Node", "Python", "Postgres", "Prisma/Drizzle", "Stripe", "AWS/GCP", "Docker", "Terraform", "Grafana", "LangChain"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border bg-white">{t}</span>
              ))}
            </div>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA (emerald glass) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready to build?</h2>
            <p className="mt-2 text-white/80">
              Align on outcomes, scope the first release, and leave with a concrete plan you can operate.
            </p>

            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-white/90">
              <li className="flex items-center gap-2 bg-white/10 rounded-xl py-2.5 px-3 border border-white/10">
                <span className="text-emerald-300">✔</span> Free 30-min scoping
              </li>
              <li className="flex items-center gap-2 bg-white/10 rounded-xl py-2.5 px-3 border border-white/10">
                <span className="text-emerald-300">↗</span> Reply in &lt; 24h
              </li>
              <li className="flex items-center gap-2 bg-white/10 rounded-xl py-2.5 px-3 border border-white/10">
                <span className="text-emerald-300">⎈</span> NDA on request
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Outcome-driven</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">CI/CD by default</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Runbooks &amp; SLOs</span>
            </div>
          </div>

          <div className="rounded-2xl p-6 border border-white/15 bg-white/10 backdrop-blur shadow-2xl">
            <div className="text-white/90">
              <h3 className="text-xl font-semibold">Tell us about your project</h3>
              <p className="text-sm text-white/70 mt-1">
                We’ll review your goals and send a short plan with options &amp; timelines.
              </p>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <a href="/contacts" className="inline-flex items-center justify-center gap-2 bg-white text-[#0b1324] px-5 py-3 rounded-xl font-medium hover:bg-gray-100 shadow">
                Book a discovery call
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3l7 7-7 7v-4H3v-6h11V3z"/></svg>
              </a>
              <a href="/contacts" className="inline-flex items-center justify-center gap-2 border border-white/40 px-5 py-3 rounded-xl font-medium hover:bg-white/10">
                Contact us
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4v16h16V4zm-2 4l-6 4-6-4V6l6 4 6-4v2z"/></svg>
              </a>
            </div>

            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="text-white/80">Kickoff window</div>
                <div className="font-semibold">1–2 weeks</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="text-white/80">Typical MVP</div>
                <div className="font-semibold">6–10 weeks</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="text-white/80">Availability</div>
                <div className="font-semibold">Open slots</div>
              </div>
            </div>

            <p className="mt-4 text-[13px] text-white/70">
              Prefer email? Use the form on the contact page — we’ll reply within one business day.
            </p>
          </div>
        </div>

        {/* seam */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </section>
       <Footer/>
    </div>
  );
}
