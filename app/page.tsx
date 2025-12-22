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
    subtitle: "Thorough Understanding of Technology.",
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
    points: [
      "Statistics + algorithms",
      "Problem decomposition",
      "Practical implementation",
      "Testing-driven iteration",
    ],
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
    points: [
      "Reproducible workflows",
      "Statistical discipline",
      "Interpretability & clarity",
      "Transparent assumptions",
    ],
    hasArt: true,
  },
];
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1F2328]">
      {/* ...your full page JSX... */}
    </div>
  );
}

