"use client";
import Image from "next/image";
import Link from "next/link";

type Work = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
};

const WORKS: Work[] = [
  {
    title: "Mizan Investments Website",
    description:
      "Corporate website built to showcase investment services, brand credibility, and client trust.",
    image: "/mizaninvestments.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.mizaninvestments.com/",
  },
  {
    title: "Funding Mole",
    description:
      "A financial platform helping users discover funding opportunities and financial insights.",
    image: "/fundingmole.png",
    tech: ["React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.fundingmole.com/",
  },
  {
    title: "KVA Mobile Application",
    description:
      "A mobile application designed to streamline service transport, user engagement, and real-time communication for KVA operations.",
    image: "/kva.jpg",
    tech: ["Flutter", "nodejs","namecheap", "UI/UX Design"],
    liveUrl: "#",
  },
  {
    title: "Hotel Booking Website",
    description:
      "Sustainability analytics platform that helps hotel businesses and customers manage accomaodation online",
    image: "/hotel.png",
    tech: ["React", "JavaScript", "UI/UX Design"],
    liveUrl: "https://hotel-booking-topaz-two.vercel.app/",
  },
];

export default function WorksPage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Small heading */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Mizan Teck Projects
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            A showcase of products and platforms we’ve designed and built using modern, scalable technologies.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS.map((work) => (
            <div
              key={work.title}
              className="group rounded-2xl border bg-white overflow-hidden hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {work.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {work.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-700 transition"
                  >
                    View Live Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
