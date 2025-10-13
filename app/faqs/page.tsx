"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ChevronRight, HelpCircle, Wifi, Router, ShieldCheck, CreditCard, Clock, Building2, X
} from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: d },
});

/* -------------------- Data -------------------- */
const FAQS = [
  {
    q: "What areas do you currently serve?",
    a: "We’re expanding steadily. Installations are prioritized in and around Nairobi, with select suburbs and estates on-net. Share your location on the Contact page and we’ll confirm availability and timelines.",
    icon: Wifi,
  },
  {
    q: "How long does installation take?",
    a: "Typical home installs take 24–72 hours from payment/confirmation. Business fibre and dedicated links may require site surveys and right-of-way, which we coordinate with your team.",
    icon: Clock,
  },
  {
    q: "What speeds should I choose for home vs. business?",
    a: "Homes generally do well with 20–50 Mbps depending on concurrent video streams and gaming. SMEs often start from 50–100 Mbps, while enterprises prefer DIA/dedicated with guaranteed bandwidth.",
    icon: Router,
  },
  {
    q: "Do you throttle or cap usage?",
    a: "All listed plans are unlimited. We actively manage the network to keep performance fair for everyone during peak times, but we don’t sell hard data caps.",
    icon: ShieldCheck,
  },
  {
    q: "Do I get a static IP?",
    a: "Yes—static IPs are available on request (business plans usually include one by default). Ideal for VPNs, CCTV, or hosted services.",
    icon: Building2,
  },
  {
    q: "What equipment do you provide?",
    a: "We provide a quality GPON/Router for fibre, and managed CPE for fixed wireless. You can also connect your own mesh or APs—our team will advise on best placement.",
    icon: Router,
  },
  {
    q: "How do I pay?",
    a: "We support M-Pesa, bank transfer, and cards. Invoices are monthly unless otherwise agreed. You’ll receive reminders before renewal.",
    icon: CreditCard,
  },
  {
    q: "What happens if there’s an outage?",
    a: "We monitor 24/7. If a fault is detected, we start triage immediately and keep you updated. For business SLAs, we measure and report uptime, MTTR, and provide incident summaries.",
    icon: ShieldCheck,
  },
  {
    q: "Can you cover estates or campuses with roaming Wi-Fi?",
    a: "Yes. We design and run managed Wi-Fi for estates, campuses, hotels, and offices—seamless roaming, captive portals, usage analytics, and proactive monitoring.",
    icon: Wifi,
  },
  {
    q: "Do you offer custom solutions?",
    a: "Absolutely—SD-WAN, DIA, point-to-point links, data-centre interconnects, and secure networking. Tell us your requirements and we’ll propose a pragmatic plan.",
    icon: Building2,
  },
];

type BlogPost = {
  tag: string;
  title: string;
  excerpt: string;
  meta: string;
  body: string[];
};

const BLOG: BlogPost[] = [
  {
    tag: "Insights",
    title: "The Rise of Financial Apps in Kenya and Beyond",
    excerpt:
      "FinTech is reshaping payments, lending, and savings. From mobile wallets to merchant QR rails, apps are streamlining how consumers and SMEs move money.",
    meta: "By Admin • 3 comments",
    body: [
      "Kenya’s mobile-first ecosystem made instant payments the default. Today, financial apps bundle payments, savings, lending, and merchant services into simple flows.",
      "For SMEs, the upside is better cash flow visibility, cheaper collections, and faster payouts. For consumers, it’s safer day-to-day transactions and access to credit scored on real activity.",
      "As rails mature, expect tighter integrations with accounting, inventory, and e-commerce—plus improved fraud detection with device intelligence and network signals.",
    ],
  },
  {
    tag: "Strategy",
    title: "Future-Proofing Your Business with Emerging Technologies",
    excerpt:
      "AI assistants, edge analytics, and cloud-native networking are no longer optional—learn how to adopt them without derailing your roadmap.",
    meta: "By Admin",
    body: [
      "Start with outcomes: reduce incidents, shorten lead time, or improve customer response. Pick one metric and map tech choices to it.",
      "Adopt boring, proven building blocks first (observability, CI/CD, access control). Add AI/automation where it removes toil or unblocks decisions.",
      "Pilot in weeks, not months. Ship the smallest valuable change, measure impact, and iterate.",
    ],
  },
  {
    tag: "Networking",
    title: "Fibre vs. Fixed Wireless: Which Is Right for You?",
    excerpt:
      "When fibre isn’t at your door yet, a well-designed fixed wireless link can keep operations moving—with a smooth path to fibre later.",
    meta: "5 min read",
    body: [
      "Fibre offers the best latency and scalability, but trenching/wayleave timelines vary.",
      "Fixed wireless is fast to deploy and cost-effective as an interim or permanent solution.",
      "Great outcomes come from proper site survey, line-of-sight checks, and managed CPE.",
    ],
  },
  {
    tag: "Operations",
    title: "What a Business-Grade SLA Actually Covers",
    excerpt:
      "SLAs should measure what you feel: uptime, latency, and time-to-restore—plus incident communication that respects your timelines.",
    meta: "6 min read",
    body: [
      "Meaningful SLAs track uptime, packet loss, jitter, and MTTR—not just ‘best effort’.",
      "Transparency beats perfection: summaries of cause, fix, and actions to prevent repeat.",
      "Choose providers that publish maintenance windows and give heads-up alerts.",
    ],
  },
];


function BlogModal({
  open,
  onClose,
  post,
}: {
  open: boolean;
  onClose: () => void;
  post: BlogPost | null;
}) {
  return (
    <AnimatePresence>
      {open && post && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          {/* Dialog */}
          <motion.div
            key="dialog"
            role="dialog"
            aria-modal="true"
            aria-label={post.title}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="fixed z-50 inset-0 grid place-items-center px-4 py-6"
            onKeyDown={(e) => { if (e.key === "Escape") onClose(); }}
          >
            <div className="w-full max-w-2xl rounded-2xl border bg-white shadow-2xl">
              <div className="flex items-start justify-between p-5 border-b">
                <div>
                  <div className="text-[11px] font-semibold text-electric-purple">{post.tag}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                  <div className="text-xs text-gray-500 mt-1">{post.meta}</div>
                </div>
                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-5 space-y-3 text-gray-700">
                {post.body.map((p, i) => (
                  <p key={i} className="leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-electric-purple text-white px-4 py-2 font-semibold shadow hover:bg-electric-purple/90"
                >
                  Talk to us <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


export default function FAQPage() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);

  const openPost = (p: BlogPost) => {
    setPost(p);
    setOpen(true);
  };

  return (
    <div className="bg-white text-gray-900">

      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          <motion.h1 {...fade()} className="text-4xl md:text-5xl font-extrabold">
            FAQs & Resources
          </motion.h1>
          <motion.p {...fade(0.05)} className="mt-3 max-w-2xl text-white/90">
            Quick answers for getting connected—plus practical reads from our blog.
          </motion.p>
          <motion.div {...fade(0.1)} className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-deep-navy px-6 py-3 font-semibold shadow hover:bg-gray-100"
            >
              Contact us <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </header>


      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.header {...fade()} className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-electric-purple">FAQs</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Common questions</h2>
          <p className="mt-2 text-gray-600">Don’t see yours? Ask us—responses are usually within one business day.</p>
        </motion.header>

        <div className="divide-y rounded-2xl border bg-white shadow-sm">
          {FAQS.map(({ q, a, icon: Icon }, i) => (
            <motion.details
              key={q}
              {...fade(0.02 * i)}
              className="group p-5 open:bg-gray-50"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 select-none">
                <div className="mt-1 h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-gray-100 text-electric-purple border">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{q}</div>
                  <div className="mt-2 text-sm text-gray-700 group-open:block hidden">
                    {a}
                  </div>
                </div>
              </summary>
            </motion.details>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-electric-purple text-white px-5 py-3 font-semibold shadow hover:bg-electric-purple/90"
          >
            Still need help? Contact us <ChevronRight size={18} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold hover:bg-gray-50"
          >
            See services <ChevronRight size={18} />
          </Link>
        </div>
      </section>


      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple via-midnight-blue to-neon-blue opacity-95" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="h-px w-full bg-white/30" />
        </div>
      </div>


      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.header {...fade()} className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-electric-purple">From the blog</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Practical connectivity & tech reads</h2>
        </motion.header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG.map((b, i) => (
            <motion.article
              key={b.title}
              {...fade(0.03 * i)}
              className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-[11px] font-semibold text-electric-purple">{b.tag}</div>
              <h3 className="mt-1 font-semibold leading-snug">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-4">{b.excerpt}</p>
              <div className="mt-3 text-xs text-gray-500">{b.meta}</div>
              <button
                onClick={() => openPost(b)}
                className="mt-4 inline-flex items-center gap-2 text-electric-purple font-semibold hover:underline"
              >
                Read more <ChevronRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer dense />


      <BlogModal open={open} onClose={() => setOpen(false)} post={post} />
    </div>
  );
}
