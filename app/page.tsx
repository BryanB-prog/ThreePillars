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
    title: "Precision",
    subtitle: "Scientific Rigor",
    blurb: (
      <ul className="list-disc pl-6 space-y-2">
        <li> Probability theory and statistical inference</li>
        <li>Linear & logistic regressions</li>
        <li>Hypothesis testing and confidence intervals</li>
        <li>Bias–variance tradeoff and model evaluation</li>
        <li> Experimental design and causal reasoning </li>
        <li>Data cleaning, preprocessing, and feature engineering</li>
       <li>Exploratory Data Analysis (EDA)</li>
        <li>Handling missing data and outliers</li>
      </ul>
      
    ),
    bg: "bg-[url('/pillar1.png')] bg-cover bg-center bg-no-repeat bg-opacity-20"
    href: "/",
    points: ["R (tidyverse, ggplot2)", "Python (pandas, NumPy, SciPy)"],
  },
  {
    title: "Development",
    subtitle: "Models and Algorithms",
    blurb: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Supervised learning (classification & regression)</li>
        <li>Unsupervised learning (clustering, dimensionality reduction)</li>
        <li>Tree-based methods (Random Forests, Gradient Boosting)</li>
      <li>Model selection and cross-validation</li>
      <li>Optimization methods and loss functions </li>
      <li>Deep Learning</li>
        <li>Algorithmic thinking and complexity analysis</li>
        <li>Data structures (trees, graphs, hashing)</li>
               </ul>
    ),
    bg: "bg-[#EEF4E8]",
    href: "/betterment",
    points: ["scikit-learn", "TensorFlow / PyTorch (foundations)", "Custom algorithm implementation"],
  },
  {
    title: "Integration",
    subtitle: "Methods that hold up under scrutiny.",
    blurb: (
      <ul className="list-disc pl-6 space-y-2">
        <li>SQL and relational database design</li>
        <li>Data pipelines and reproducible workflows</li>
        <li>Version control (Git/GitHub)</li>
        <li>Data visualization and storytellingy</li>
        <li>Ethical and responsible data practices</li>
        <li>Clarity:Framing technical results for non-technical audiences</li>
        <li>Deployment awareness (APIs, cloud basics, static sites)</li>
      </ul>
    ),
    bg: "bg-[#DFF0D8]",
    href: "/rigor",
    points: ["SQL (PostgreSQL / MySQL concepts)", "Git & GitHub", "Jupyter / RStudio", "Web-based visualization & dashboards"],
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
            </Link>
          </nav>

          <Link
            href="/work"
            className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-black/80 hover:bg-white"
          >
            View work
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl leading-tight tracking-wide md:text-5xl">Charting The Road Ahead.</h1>
            <p className="mt-6 text-base leading-relaxed text-black/70 md:text-lg">
              Our Mission: Leveraging Data Science for Human Betterment
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/work" className="rounded-full bg-black px-5 py-2.5 text-sm text-white hover:bg-black/90">
                Explore the work
              </Link>
              <Link
                href="/writing/manifesto"
                className="rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm text-black/80 hover:bg-white"
              >
                Read the manifesto
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Tag>Ethical visualization</Tag>
              <Tag>Responsible ML</Tag>
              <Tag>Social impact</Tag>
              <Tag>Story-first analytics</Tag>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <PillarCard key={p.title} p={p} index={i} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl tracking-wide">Featured work</h2>
              <p className="mt-2 text-sm text-black/70">Projects that combine evidence, ethics, and human meaning.</p>
            </div>
            <Link href="/work" className="hidden text-sm text-black/70 underline underline-offset-4 hover:text-black md:inline">
              View all →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProjects.map((proj) => (
              <Link
                key={proj.title}
                href={proj.href}
                className="group rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.25)] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
              >
                <h3 className="font-serif text-xl tracking-wide">{proj.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{proj.oneLiner}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-6 text-sm text-black/60 underline underline-offset-4 opacity-0 transition-opacity group-hover:opacity-100">
                  Read case study →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link href="/work" className="text-sm text-black/70 underline underline-offset-4 hover:text-black">
              View all work →
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-black/10 bg-white/55 p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-serif text-3xl tracking-wide">Writing</h2>
                <p className="mt-2 text-sm text-black/70">Notes on ethics, visualization, and humane measurement.</p>
              </div>
              <Link href="/writing" className="text-sm text-black/70 underline underline-offset-4 hover:text-black">
                Browse all →
              </Link>
            </div>

            <div className="mt-8 divide-y divide-black/10">
              {recentWriting.map((w) => (
                <Link
                  key={w.title}
                  href={w.href}
                  className="group flex flex-col gap-1 py-5 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-lg">{w.title}</h3>
                      <span className="text-xs text-black/45">{w.date}</span>
                    </div>
                    <p className="mt-1 text-sm text-black/70">{w.desc}</p>
                  </div>
                  <span className="mt-2 text-sm text-black/60 underline underline-offset-4 opacity-0 transition-opacity group-hover:opacity-100 md:mt-0">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl tracking-wide">Build kinder systems.</h2>
              <p className="mt-4 text-base leading-relaxed text-black/70">
                Sentropy is a personal framework for choosing what to build, how to evaluate it, and who it should serve.
                If you’d like to collaborate, talk research, or share a project idea, reach out.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-black px-5 py-2.5 text-sm text-white hover:bg-black/90">
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm text-black/80 hover:bg-white"
                >
                  About Sentropy
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-[#EEF4E8] p-8 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.25)]">
                <p className="text-sm text-black/70">Guiding question</p>
                <p className="mt-3 font-serif text-2xl leading-snug">“Does this increase dignity and understanding?”</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Tag>Clarity</Tag>
                  <Tag>Care</Tag>
                  <Tag>Truth</Tag>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#FAFAF7]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} Sentropy</p>
          <div className="flex flex-wrap gap-6 text-sm">
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
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
