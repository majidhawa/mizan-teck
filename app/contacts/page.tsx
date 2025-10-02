"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: d },
});

export default function ContactsPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // Basic EmailJS-ready payload (kept local for now)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(null);
    setErr(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    // honeypot: if filled, it's a bot
    if ((fd.get("company") as string)?.trim()) {
      setLoading(false);
      setErr("Submission blocked (spam detected).");
      return;
    }

    // shape payload
    const payload = {
      name: (fd.get("name") as string)?.trim(),
      email: (fd.get("email") as string)?.trim(),
      message: (fd.get("message") as string)?.trim(),
    };

    try {
      // TODO: swap this for EmailJS or your /api/contact route
      // Example EmailJS (when you’re ready):
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   payload,
      //   "YOUR_PUBLIC_KEY"
      // );

      await new Promise((r) => setTimeout(r, 900)); // mock network
      setOk("Thanks! We’ve received your message and will reply within 1 business day.");
      e.currentTarget.reset();
    } catch (e) {
      setErr("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-[#0b1324] to-emerald-700 opacity-95" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-15" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.h1 {...fade()} className="text-4xl md:text-5xl font-extrabold">
            Let’s talk
          </motion.h1>
          <motion.p {...fade(0.05)} className="mt-4 text-white/85">
            We usually reply within 1 business day.
          </motion.p>
        </div>
      </header>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="relative max-w-5xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* Left: Form */}
        <motion.form {...fade()} onSubmit={onSubmit} className="bg-white rounded-2xl border shadow p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>

          {/* success / error banners */}
          {ok && (
            <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-800 text-sm">
              <CheckCircle2 size={18} /> {ok}
            </div>
          )}
          {err && (
            <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-800 text-sm">
              <AlertTriangle size={18} /> {err}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Your name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="mt-1 w-full border rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Your email
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              autoComplete="email"
              className="mt-1 w-full border rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="jane@company.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 w-full border rounded-lg p-3 min-h-[140px] focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="Tell us a bit about your goals, timeline, and budget (if known)."
            />
          </div>

          {/* honeypot (should be hidden visually) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold shadow hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed transition"
          >
            <Send size={18} /> {loading ? "Sending..." : "Send"}
          </button>

          <p className="text-xs text-gray-500">
            By contacting us, you agree to our{" "}
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </motion.form>

        {/* Right: Info */}
        <motion.div {...fade(0.1)} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Other ways to reach us</h2>
          <p className="text-gray-600">
            Don’t like forms? Reach out via email or phone. We’d love to hear about your project.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-emerald-600" /> mizanteck2013@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-emerald-600" /> <a className="hover:underline" href="tel:+13122857262">+1 312 285 7262</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-emerald-600" /> US (Texas) &amp; Kenya (Remote)
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:mizanteck2013@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 text-emerald-700 px-5 py-3 font-medium hover:bg-gray-200"
            >
              <Mail size={18} /> Email directly
            </a>
            <a
              href="tel:+13122857262"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-medium hover:bg-gray-50"
            >
              <Phone size={18} /> Call us
            </a>
          </div>

          <div className="pt-4 text-xs text-gray-500">
            Typical first step: 30-min discovery call → brief written plan with options and timelines.
          </div>
        </motion.div>
      </section>

   
      <Footer dense />
    </div>
  );
}
