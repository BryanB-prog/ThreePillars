// app/page.tsx
import React from "react";
import Image from "next/image";
import { Card } from "@/components/Card";

const HomePage: React.FC = () => {
  return (
    <div className="max-h-screen flex flex-col items-center justify-start p-12">
      {/* ... your intro + header ... */}

      {/* Projects / Pillars */}
      <section id="projects" className="mt-6 w-full max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {/* ... your Cards ... */}
        </div>
      </section>

      {/* ✅ Featured section MUST be inside return */}
      <section id="featured" className="mt-16 w-full max-w-6xl">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Text */}
            <div>
              <p className="text-sm font-medium text-zinc-600">Latest Project</p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
                Housing Affordability vs Income in Canada
              </h2>

              <p className="mt-3 leading-relaxed text-zinc-700">
                A data-driven look at whether housing costs are rising faster than
                after-tax income, with clear visualizations and a reproducible pipeline.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  View Project
                </a>

                <a
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  Open Projects Page ↗
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Pandas", "StatsCan", "Visualization", "Reproducible"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual / Preview */}
            <div className="flex h-72 w-full gap-4">
              <div className="relative flex-1 overflow-hidden rounded-2xl bg-zinc-200">
                <Image
                  src="/IncomeVsHousingCosts.png"
                  alt="Income vs Housing Costs"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative flex-1 overflow-hidden rounded-2xl bg-zinc-200">
                <Image
                  src="/HousingCostBurden.png"
                  alt="Housing Cost Burden"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-10 max-w-3xl w-full" />
    </div>
  );
};

export default HomePage;
