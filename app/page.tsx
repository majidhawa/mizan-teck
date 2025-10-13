"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Rocket, LineChart, Cpu, Sparkles } from "lucide-react";


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
      ctx.fillStyle = "rgba(124,92,255,0.9)"; // brand purple dots
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
              ctx.strokeStyle = `rgba(0,178,255,${alpha * 0.25})`; // brand blue links
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


function Marquee() {
  const items = ["Pagram", "High-Speed Internet", "Fiber & Wireless", "Estate Wi-Fi", "Business Internet", "Reliable Uptime", "24/7 Support"];
  return (
    <div className="relative py-6 bg-[#0F1230] border-y border-white/10 overflow-hidden">
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


function Testimonials() {
  const data = [
    { q: "Solid speeds and reliable uptime — our team stayed online without hiccups.", a: "Operations Lead, Nairobi" },
    { q: "Quick installation and helpful support. Video calls are crystal clear.", a: "Founder, SMB" },
    { q: "Great service for our estate. Streaming and gaming work flawlessly.", a: "Property Manager" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI(v => (v + 1) % data.length), 5000); return () => clearInterval(id); }, []);
  return (
    <div className="rounded-2xl border bg-white p-6">
      <Sparkles className="text-electric-purple" />
      <blockquote className="mt-2 text-lg leading-8 min-h-[96px] text-gray-900">{data[i].q}</blockquote>
      <div className="mt-1 text-sm text-gray-600">— {data[i].a}</div>
    </div>
  );
}


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
  const heroImages = ["/placeholder-1.jpg", "/placeholder-2.jpg", "/placeholder-3.jpg"]; // placeholders
  const [idx, setIdx] = useState(0);
  useEffect(() => { const id = setInterval(() => setIdx(v => (v + 1) % heroImages.length), 5000); return () => clearInterval(id); }, []);

  return (
    <div className="bg-white text-gray-900">

      <header className="relative overflow-hidden text-white">

        <div className="absolute inset-0 z-0 bg-gradient-to-br from-electric-purple via-midnight-blue to-neon-blue opacity-95" />

        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <Particles density={90} speed={0.35} connect />


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
              className="text-xs uppercase tracking-[0.22em] text-neon-blue">
              Pagram Internet Solutions
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Get reliable internet. <span className="text-neon-blue">Stay ahead.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-5 text-white/85 max-w-xl">
              High-speed fiber and fixed wireless connectivity for homes, estates, and businesses — with fast installation and friendly support.
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0F1230] px-6 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100">
                Contact us <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-2xl hover:bg-white/10">
                View services
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/85">
              <div className="flex items-center gap-2"><ShieldCheck className="text-neon-blue" size={18} /> Reliable uptime</div>
              <div className="flex items-center gap-2"><Rocket className="text-neon-blue" size={18} /> Fast installation</div>
            </div>
          </div>


          <div className="relative">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <Image src="/placeholder-hero.jpg" alt="Connection preview" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-white/10 backdrop-blur border border-white/15 grid place-items-center">
              <LineChart className="text-electric-purple" />
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-3xl bg-white/10 backdrop-blur border border-white/15 grid place-items-center">
              <Cpu className="text-neon-blue" />
            </div>
          </div>
        </section>


        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </header>


      <Marquee />


      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { k: "Average uptime", v: "99.9%" },
            { k: "Average reply", v: "1h" },
            { k: "Installs this year", v: "500+" },
            { k: "Happy customers", v: "1.2k+" },
          ].map(({ k, v }, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border p-6 text-center bg-white shadow-sm"
            >
              <div className="text-3xl font-extrabold text-electric-purple">
                <Counter value={v} duration={1100 + i * 150} />
              </div>
              <div className="mt-2 text-gray-500 text-sm">{k}</div>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="services" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue opacity-95" />
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-15" />
        <div className="absolute inset-0 z-0 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.06)_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <header className="text-center mb-12 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-neon-blue">Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Get connected, stay connected</h2>
            <p className="mt-2 text-white/85">Fiber, fixed wireless, and managed networking — tailored to your needs.</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Home Internet", copy: "Unlimited plans ideal for browsing, streaming & calls." , chips: ["10 Mbps","25 Mbps","Unlimited"] },
              { title: "Business Internet", copy: "High throughput with priority support & SLAs." , chips: ["50+ Mbps","Static IP","SLA"] },
              { title: "Estate & Campus Wi-Fi", copy: "Coverage design, deployment & maintenance." , chips: ["Mesh","Roaming","Monitoring"] },
              { title: "Point-to-Point Links", copy: "Fixed wireless links where fiber is limited." , chips: ["Backhaul","Last-mile","Line-of-sight"] },
            ].map(({ title, copy, chips }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-2xl p-6 border border-white/15 bg-white/10 backdrop-blur
                           text-white hover:bg-white/15 hover:shadow-2xl transition relative overflow-hidden"
              >
                <span className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/15 text-neon-blue border border-white/15">
                  <span className="text-lg">📶</span>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="text-white/85 text-sm mt-1">{copy}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/85">
                  {chips.map((t: string) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/10 border border-white/15">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>


          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-electric-purple">Learn more</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Services offered & About Pagram</h3>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tag:"Overview", title:"About Pagram", chips:["Mission","Team","Network"], href:"/about", img:"/placeholder-about.jpg" },
            { tag:"Packages", title:"Plans & Services", chips:["Home","Business","Enterprise"], href:"/services", img:"/placeholder-services.jpg" },
            { tag:"Support", title:"Get Connected", chips:["Contact form","WhatsApp","Email"], href:"/contact", img:"/placeholder-contact.jpg" },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group rounded-2xl border overflow-hidden bg-white hover:shadow-2xl transition block">
              <div className="relative h-44"><Image src={c.img} alt={c.title} fill className="object-cover" /></div>
              <div className="p-5">
                <div className="text-xs text-electric-purple font-semibold">{c.tag}</div>
                <div className="mt-1 font-semibold text-lg text-gray-900 group-hover:underline">{c.title}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
                  {c.chips.map((k) => (<span key={k} className="px-2 py-1 rounded-full bg-gray-100 border">{k}</span>))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>


      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-electric-purple">Network</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Built for speed and reliability</h3>
            <p className="mt-2 text-gray-600">Fiber where available, high-quality fixed wireless where it’s not — monitored and supported by our team.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {["Fiber","Fixed wireless","Managed Wi-Fi","Static IP","SLAs","Monitoring"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border bg-white">{t}</span>
              ))}
            </div>
          </div>
          <Testimonials />
        </div>
      </section>


      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center text-gray-900">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready to get connected?</h2>
            <p className="mt-2 text-gray-600">
              Tell us your location and preferred plan — we’ll send options and installation timelines.
            </p>

            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2 bg-gray-50 rounded-xl py-2.5 px-3 border">
                <span className="text-neon-blue">✔</span> Fast installation
              </li>
              <li className="flex items-center gap-2 bg-gray-50 rounded-xl py-2.5 px-3 border">
                <span className="text-neon-blue">↗</span> Friendly support
              </li>
              <li className="flex items-center gap-2 bg-gray-50 rounded-xl py-2.5 px-3 border">
                <span className="text-neon-blue">⎈</span> Flexible plans
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-gray-100 border">Unlimited data</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 border">Low latency</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 border">Transparent pricing</span>
            </div>
          </div>

          <div className="rounded-2xl p-6 border bg-white shadow-2xl">
            <div className="text-gray-900">
              <h3 className="text-xl font-semibold">Tell us about your location</h3>
              <p className="text-sm text-gray-600 mt-1">
                We’ll review and get back within one business day.
              </p>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-electric-purple text-white px-5 py-3 rounded-xl font-medium hover:brightness-110 shadow">
                Contact us
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3l7 7-7 7v-4H3v-6h11V3z"/></svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 border border-gray-300 px-5 py-3 rounded-xl font-medium hover:bg-gray-50">
                View services
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4v16h16V4zm-2 4l-6 4-6-4V6l6 4 6-4v2z"/></svg>
              </Link>
            </div>

            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-gray-50 border p-3">
                <div className="text-gray-600">Install window</div>
                <div className="font-semibold">1–3 days</div>
              </div>
              <div className="rounded-lg bg-gray-50 border p-3">
                <div className="text-gray-600">Typical speeds</div>
                <div className="font-semibold">10–50+ Mbps</div>
              </div>
              <div className="rounded-lg bg-gray-50 border p-3">
                <div className="text-gray-600">Availability</div>
                <div className="font-semibold">Expanding</div>
              </div>
            </div>

            <p className="mt-4 text-[13px] text-gray-500">
              Prefer email? Use the form on the contact page — we’ll reply within one business day.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
