import React from "react";
import Image from "next/image";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-zinc-50 px-8 py-12">
      {/* Intro */}
      <section className="max-w-3xl w-full mb-10 rounded-xl bg-white p-6 shadow-sm border border-zinc-200">
        <p className="text-zinc-600">
          Hi, I’m Bryan. I’m a data scientist with an experienced background in IT.
          I use science to help understand complex, human-centered problems.
        </p>

        <p className="text-zinc-600 mt-3">
          This site reflects how I use data, the scientific method, and humanist
          values to help make the world a better place.
        </p>
      </section>

      {/* Header */}
      <header className="flex items-center gap-6 mb-12">
        <h1 className="text-4xl font-bold text-zinc-900">Three Pillars</h1>
        <Image src="/logo1.png" alt="Logo" width={160} height={160} />

        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700 ml-8">
          <a href="/projects" className="hover:text-zinc-900">
            Projects
          </a>
          <a
            href="/skilltree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Skill & Knowledge Tree
          </a>
          <a href="/resume" className="hover:text-zinc-900">
            Resume
          </a>
        </nav>
      </header>

      {/* Pillars */}
   
<section id="projects" className="w-full max-w-6xl mb-16">
  <div className="grid gap-6 md:grid-cols-3">

    {/* ELECTRONICS */}
    <Card title="Electronics">
      <h3 className="text-lg font-semibold mb-3">Scientific & Statistical Rigor</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
        <li><strong>Sensors and Sensor Circuit Design</strong> – thermal sensors, sensor development and prototyping, thermistors, RTDs and thermocouples</li>
        <li><strong>Statistical inference</strong> – estimation, hypothesis testing, confidence intervals</li>
        <li><strong>Regression & classification</strong> – linear and logistic models, interpretability</li>
        <li><strong>Model evaluation</strong> – bias–variance tradeoff, ROC, precision–recall, calibration</li>
        <li><strong>Experimental design & causality</strong> – A/B testing, confounding, observational analysis</li>
        <li><strong>Data quality & cleaning</strong> – missing data, outliers, validation rules</li>
        <li><strong>Feature engineering</strong> – transformations, scaling, domain-informed features</li>
        <li><strong>Exploratory Data Analysis (EDA)</strong> – statistical summaries and visual pattern discovery</li>
        <li><strong>Uncertainty & reliability</strong> – error analysis, robustness, reproducibility</li>
      </ul>
    </Card>

    {/* DEVELOPMENT */}
    <Card title="Development">
      <h3 className="text-lg font-semibold mb-3">Modeling & Algorithms</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
        <li><strong>Supervised learning</strong> – regression, classification, training workflows</li>
        <li><strong>Unsupervised learning</strong> – clustering, dimensionality reduction</li>
        <li><strong>Tree-based models</strong> – Random Forests, Gradient Boosting</li>
        <li><strong>Model selection & tuning</strong> – cross-validation, hyperparameter search</li>
        <li><strong>Optimization</strong> – gradient descent, loss functions, convergence</li>
        <li><strong>Deep learning foundations</strong> – neural networks, representation learning</li>
        <li><strong>Algorithmic thinking</strong> – abstraction, decomposition, solution design</li>
        <li><strong>Computational complexity</strong> – scalability and performance tradeoffs</li>
        <li><strong>Data structures</strong> – trees, graphs, hashing, indexing</li>
        <li><strong>End-to-end ML pipelines</strong> – from problem formulation to trained models</li>
      </ul>
    </Card>

    {/* INTEGRATION */}
    <Card title="Integration">
      <h3 className="text-lg font-semibold mb-3">Delivery & Human Context</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
        <li><strong>SQL & relational modeling</strong> – schema design, joins, indexing</li>
        <li><strong>Data pipelines</strong> – ETL, reproducible workflows, automation</li>
        <li><strong>Version control</strong> – Git, GitHub, collaboration workflows</li>
        <li><strong>Data visualization</strong> – storytelling, dashboards, insight communication</li>
        <li><strong>Ethics & fairness</strong> – bias, privacy, responsible data use</li>
        <li><strong>Interpretability</strong> – explainable models, transparent reporting</li>
        <li><strong>Stakeholder communication</strong> – translating technical results</li>
        <li><strong>Deployment awareness</strong> – APIs, cloud basics, static & model hosting</li>
        <li><strong>Documentation</strong> – READMEs, notebooks, technical writing</li>
        <li><strong>End-to-end system integration</strong> – connecting data, models, and people</li>
      </ul>
    </Card>

  </div>
</section>

      {/* Featured Project */}
      <section id="featured" className="w-full max-w-6xl">
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
                after-tax income, with clear visualizations and a reproducible
                pipeline.
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
                {["Python", "Pandas", "StatsCan", "Visualization", "Reproducible"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Images */}
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
    </div>
  );
}


