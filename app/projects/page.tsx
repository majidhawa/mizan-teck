"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Case = {
  slug: string;
  tag: "Fintech" | "Logistics" | "SaaS" | "Healthcare" | "Gov";
  title: string;
  copy: string;
  img: string;
  tech: string[];
  caps: string[];
};

const ALL_CASES: Case[] = [
  { slug: "fintech", tag: "Fintech", title: "Payments & Payouts at Scale", copy: "Stripe-based flows with reconciliation and driver payouts.", img: "/cs-fintech.jpg", tech: ["Stripe","Postgres","Node"], caps:["Payments","Reconciliation","APIs"] },
  { slug: "logistics", tag: "Logistics", title: "Fleet & Route Optimization", copy: "Driver app + dispatcher console with live ETAs and cost-aware routing.", img: "/cs-logistics.jpg", tech: ["Maps","React Native","Python"], caps:["Optimization","Mobile","Telemetry"] },
  { slug: "saas", tag: "SaaS", title: "AI-Assisted Ops Dashboards", copy: "LLM copilots that summarize incidents and surface next actions.", img: "/cs-saas.jpg", tech: ["Next.js","LangChain","OpenAI"], caps:["LLM","Observability","Dashboards"] },
  { slug: "healthcare-intake", tag: "Healthcare", title: "Patient Intake & Scheduling", copy: "Queueing, consent flows, and claims exports.", img: "/cs-health.jpg", tech: ["Next.js","Node","Postgres"], caps:["Workflow","Exports","Compliance"] },
  { slug: "gov-e-services", tag: "Gov", title: "Citizen e-Services Portal", copy: "Queue-less permit applications with digital payments.", img: "/cs-gov.jpg", tech: ["AWS","Stripe","React"], caps:["Payments","Forms","Identity"] },
];

const INDUSTRIES = ["All","Fintech","Logistics","SaaS","Healthcare","Gov"] as const;
const CAPABILITIES = ["All","Payments","Mobile","LLM","Optimization","APIs","Observability","Dashboards","Workflow","Reconciliation","Forms","Identity","Telemetry","Exports","Compliance"] as const;

export default function ProjectsIndex() {
  const [industry, setIndustry] = useState<typeof INDUSTRIES[number]>("All");
  const [cap, setCap] = useState<typeof CAPABILITIES[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return ALL_CASES.filter((c) => {
      const matchIndustry = industry === "All" || c.tag === industry;
      const matchCap = cap === "All" || c.caps.includes(cap);
      const hay = (c.title + " " + c.copy + " " + c.tech.join(" ")).toLowerCase();
      const matchQ = !q || hay.includes(q.toLowerCase());
      return matchIndustry && matchCap && matchQ;
    });
  }, [industry, cap, q]);

  return (
    <div className="bg-white text-ink">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Case studies</h1>
            <p className="text-gray-600">Filter by industry, capability, or search by keyword/tech.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <select value={industry} onChange={(e)=>setIndustry(e.target.value as any)} className="border rounded-xl px-3 py-2">
              {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <select value={cap} onChange={(e)=>setCap(e.target.value as any)} className="border rounded-xl px-3 py-2">
              {CAPABILITIES.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search…" className="border rounded-xl px-3 py-2" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((c) => (
            <Link key={c.slug} href={`/projects/${c.slug}`} className="group rounded-2xl border overflow-hidden bg-white hover:shadow-2xl transition block">
              <div className="relative h-44">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs text-emerald-700 font-semibold">{c.tag}</div>
                <div className="mt-1 font-semibold text-lg group-hover:underline">{c.title}</div>
                <p className="text-gray-600 text-sm mt-1">{c.copy}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {c.tech.map(t => <span key={t} className="px-2 py-1 rounded-full bg-gray-100 border">{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-500 py-16">No results — try a different filter.</div>
        )}
      </div>
    </div>
  );
}
