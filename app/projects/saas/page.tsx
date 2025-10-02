import Link from "next/link";

export default function CaseStudy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-green-700">Case study</p>
      <h1 className="text-3xl md:text-4xl font-extrabold my-2">AI‑Assisted Ops Dashboards</h1>
      <p className="text-gray-700">Problem → Approach → Results → Stack → Testimonial. Replace this placeholder with your real story and KPIs.</p>
      <Link href="/projects" className="text-green-700 underline mt-6 inline-block">← Back to case studies</Link>
    </div>
  );
}
