"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import emailjs from "@emailjs/browser";
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(null);
    setErr(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);

    // honeypot
    if ((fd.get("company") as string)?.trim()) {
      setLoading(false);
      setErr("Submission blocked (spam detected).");
      return;
    }

    // Map to the EXACT template variable names you configured in EmailJS
    const templateParams = {
      from_name: (fd.get("name") as string)?.trim(),
      reply_to: (fd.get("email") as string)?.trim(),
      message: (fd.get("message") as string)?.trim(),
      // Optionally add: to_name, subject, etc. if your template expects them
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!; // not USER_ID

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS env vars are missing (check NEXT_PUBLIC_* ids/keys).");
      }

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      setOk("Thanks! We’ve received your message and will reply within 1 business day.");
      e.currentTarget.reset();
    } catch (error: any) {
      // Surface a helpful message in dev, keep generic in prod
      const details =
        typeof window !== "undefined" && process.env.NODE_ENV === "development"
          ? ` ${error?.text || error?.message || ""}`.trim()
          : "";
      setErr(`Something went wrong. Please try again or email us directly.${details ? " " + details : ""}`);
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  
}
