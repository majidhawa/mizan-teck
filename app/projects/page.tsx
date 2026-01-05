"use client";
import Image from "next/image";
import WorksPage from "./works/page";

type Case = {
  slug: string;
  tag: "Fintech" | "Logistics" | "SaaS";
  title: string;
  copy: string;
  img: string;
  tech: string[];
};

const ALL_CASES: Case[] = [
  {
    slug: "fintech",
    tag: "Fintech",
    title: "Payments & Payouts at Scale",
    copy: "Stripe-based flows with reconciliation and driver payouts.",
    img: "/cs-fintech.jpg",
    tech: ["Stripe", "Postgres", "Node"],
  },
  {
    slug: "logistics",
    tag: "Logistics",
    title: "Fleet & Route Optimization",
    copy: "Driver app + dispatcher console with live ETAs and cost-aware routing.",
    img: "/cs-logistics.jpg",
    tech: ["Maps", "React Native", "Python"],
  },
  {
    slug: "saas",
    tag: "SaaS",
    title: "AI-Assisted Ops Dashboards",
    copy: "LLM copilots that summarize incidents and surface next actions.",
    img: "/cs-saas.jpg",
    tech: ["Next.js", "LangChain", "OpenAI"],
  },
];

export default function ProjectsIndex() {
  return (
    <>
      {/* Intro / Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-[#0a1428] opacity-95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
          <span className="inline-block text-sm font-semibold tracking-wide text-emerald-200">
            Our Work
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Case Studies & Projects
          </h1>

          <p className="mt-4 max-w-2xl text-emerald-100 text-lg">
            A selection of real-world projects and case studies showcasing how we
            design, build, and scale practical software across fintech,
            logistics, and SaaS.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Case Studies
          </h2>

          <p className="mt-2 text-gray-600 max-w-2xl">
            Highlighted engagements where we solved real business problems using
            modern, scalable technology.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {ALL_CASES.map((c) => (
              <div
                key={c.slug}
                className="rounded-2xl border overflow-hidden bg-white hover:shadow-2xl transition"
              >
                <div className="relative h-44">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="text-xs text-emerald-700 font-semibold">
                    {c.tag}
                  </div>

                  <h3 className="mt-1 font-semibold text-lg">
                    {c.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">
                    {c.copy}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {c.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-full bg-gray-100 border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works / Projects */}
      <WorksPage />
    </>
  );
}
