// app/page.tsx
// Sentropy — Modern / Data Humanism homepage (Next.js App Router + Tailwind)

import Link from "next/link";
import React from "react";

type Pillar = {
  title: string;
  subtitle: string;
  blurb: React.ReactNode; // allows string OR JSX (like <ul>)
  bg: string; // Tailwind bg class
  href: string;
  points: string[];
  hasArt?: boolean;
};

type Project = {
  title: string;
  oneLiner: string;
  tags: string[];
  href: string;
};

const pillars: Pillar[] = [
  {
    title: "Problem Solving",
    subtitle: "Thorough understanding of technology.",
    blurb: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Using statistics, algorithms, and data structures to solve problems and answer important questions
        </li>
        <li>Translating real-world questions into analytical and computational tasks</li>
        <li>Writing precise, clean, readable, and high-performance code</li>
        <li>Combining theoretical understanding with practical implementation</li>
        <li>Iterating solutions based on available evidence and thorough testing</li>
      </ul>
    ),
    bg: "bg-[#E6F2EA]",
    href: "/",
    points: ["Statistics + algorithms", "Problem decomposition", "Practical implementation", "Testing-driven iteration"],
  },
  {
    title: "Precision",
    subtitle: "Accuracy and clarity.",
    blurb: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Ensuring data quality through validation, cleaning, and verification</li>
        <li>Writing clear, reproducible, and well-documented code</li>
        <li>Producing defensible, interpretable, and trustworthy results</li>
      </ul>
    ),
    bg: "bg-[#EEF4E8]",
    href: "/betterment",
    points: ["Quality", "Clarity", "Accuracy"],
  },
  {
    title: "Scientific Rigor",
    subtitle: "Methods that hold up under scrutiny.",
    blurb: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Evidence-based reasoning and empirical validation</li>
        <li>Transparent assumptions and clear documentation</li>
        <li>Reproducibility, sound statistics, and careful measurement</li>
        <li>Clear communication for interpretability and accountability</li>
      </ul>
    ),
    bg: "bg-[#DFF0D8]",
    href: "/rigor",
    points: ["Reproducible workflows", "Statistical discipline", "Interpretability & clarity", "Transparent assumptions"],
    hasArt: true,
  },
];

const featuredProjects: Project[] = [
  {
    title: "Housing vs. Income: A Humanist View",
    oneLiner: "A story-first analysis of affordability, inequity, and what the numbers hide.",
    tags: ["Human Betterment", "Visualization", "Social Good"],
    href: "/work/housing-income",
  },
  {
    title: "Ethical Visualization Checklist",
    oneLiner: "A practical framework to reduce distortion, harm, and manipulation in charts.",
    tags: ["Ethics", "Design", "Communication"],
    href: "/work/ethical-viz",
  },
  {
    title: "Reproducible Analysis Template",
    oneLiner: "A lightweight workflow for repeatable results, versioning, and clear reporting.",
    tags: ["Scientific Rigor", "Science", "Workflow"],
    href: "/work/reproducible-template",
  },
];

const recentWriting = [
  {
    title: "Data Humanism: What It Is (and Isn’t)",
    desc: "A short manifesto for humane, careful analytics.",
    href: "/writing/data-humanism",
    date: "2025",
  },
  {
    title: "When Accuracy Isn’t Enough",
    desc: "On fairness, consent, and what models can’t justify.",
    href: "/writing/accuracy-isnt-enough",
    date: "2025",
  },
  {
    title: "Reproducibility as Respect",
    desc: "Why rigor is ethical—and how to practice it without arrogance.",
    href: "/writing/reproducibility-as-respect",
    date: "2025",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-black/80">
      {children}
    </span>
  );
}

function PillarCard({ p, index }: { p: Pillar; index: number }) {
  return (
    <Link
      href={p.href}
      className={[
        "group relative block min-h-[720px] overflow-visible rounded-2xl border border-black/10",
        "shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)] transition-transform",
        "hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
        p.bg,
      ].join(" ")}
      aria-label={`Open ${p.title}`}
    >
      {/* soft hover glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/25 blur-2xl" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-black/5 blur-2xl" />
      </div>

      <div className="relative flex h-full flex-col p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-serif text-3xl tracking-wide text-black/90">{p.title}</h2>
          <span className="rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs text-black/70">
            Pillar {index + 1}
          </span>
        </div>

        <p className="mt-2 text-sm text-black/70">{p.subtitle}</p>

        {/* lists render correctly inside div */}
        <div className="mt-6 max-w-[34ch] text-base leading-relaxed text-black/80">{p.blurb}</div>

        {/* secondary bullets */}
        <ul className="mt-8 space-y-2 text-sm text-black/75">
          {p.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/30" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          {p.hasArt ? (
            <div className="relative mt-2 overflow-hidden rounded-xl border border-black/10 bg-white/45 p-4">
              <svg
                viewBox="0 0 640 220"
                className="h-28 w-full opacity-80"
                role="img"
                aria-label="A gentle path illustration placeholder"
              >
                <path
                  d="M18 190 C120 160, 220 200, 320 170 C420 140, 520 180, 622 140"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  opacity="0.25"
                />
                <path
                  d="M20 188 C130 120, 250 220, 340 150 C430 80, 520 150, 620 90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  opacity="0.18"
                />
                <circle cx="470" cy="90" r="34" fill="currentColor" opacity="0.08" />
                <path
                  d="M470 70 C455 75, 450 95, 462 110 C474 125, 494 120, 500 105 C506 90, 494 70, 470 70 Z"
                  fill="currentColor"
                  opacity="0.12"
                />
                <path d="M470 110 C468 140, 470 165, 470 195" stroke="currentColor" strokeWidth="4" opacity="0.20" />
                <path d="M470 140 C452 145, 438 155, 426 170" stroke="currentColor" strokeWidth="3" opacity="0.14" />
                <path d="M470 145 C492 152, 512 165, 532 182" stroke="currentColor" strokeWidth="3" opacity="0.14" />
              </svg>

              <div className="mt-2 flex items-center justify-between text-xs text-black/60">
                <span>Rigor is a form of care.</span>
                <span className="underline underline-offset-2 opacity-70">Explore →</span>
              </div>
            </div>
          ) : (
            <div className="mt-2 flex items-center justify-between text-xs text-black/60">
              <span className="opacity-80">Explore →</span>
              <span className="opacity-60">Sentropy</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1F2328]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAFAF7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="group inline-flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-wide">Three Pillars</span>
            <span className="text-xs text-black/50 group-hover:text-black/70">data humanism</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link className="text-black/70 hover:text-black" href="/work">
              Work
            </Link>
            <Link className="text-black/70 hover:text-black" href="/writing">
              Writing
            </Link>
            <Link className="text-black/70 hover:text-black" href="/about">
              About
            </Link>
            <Link className="text-black/70 hover:text-black" href="/contact">
              Contact
