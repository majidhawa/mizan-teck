import type { Metadata } from "next";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mizan Teck — Practical software. Measurable outcomes.",
  description: "Tahidi Corp × Mizan Investments: we build reliable web & mobile platforms, data pipelines, and AI-assisted workflows.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
      </body>
    </html>
  );
}
