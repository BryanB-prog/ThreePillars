// app/page.tsx
import React from "react";
import Image from "next/image";
import { Card } from "@/components/Card";

const HomePage: React.FC = () => {
  return (
    <div className="max-h-screen flex flex-col items-center justify-start p-12">
      <section className="p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <p className="text-gray-500">
          Hi, I’m Bryan. I’m a data scientist with an experienced background in
          IT. I use science to help understand complex, human-centered problems.
        </p>

        <p className="text-gray-500 mt-3">
          This site reflects how I use data, the scientific method, and humanist
          values to help make the world a better place.
        </p>
      </section>

      <div className="mb-2" />

      <header className="flex items-center gap-4 mt-4">
        <h1 className="text-4xl font-bold text-gray-800">Three Pillars</h1>

        <Image src="/logo1.png" alt="Logo" width={200} height={200} />

        {/* Right: Menu */}
       <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
  <a
    href="/projects"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-900"
  >
    Projects
  </a>

  <a
    href="/skilltree"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    View Skill &amp; Knowledge Tree
  </a>

  <a
    href="/resume"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-900"
  >
    Projects
  </a>
</nav>

      </header>

      {/* Projects / Pillars */}
      <section id="projects" className="mt-6 w-full max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Precision">
            <h3 className="text-lg font-semibold mb-2">Precision</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>
                <strong>Probability theory &amp; statistical foundations</strong>{" "}
                – Random variables, distributions, sampling, and uncertainty
              </li>
              <li>
                <strong>Statistical inference</strong> – Estimation, hypothesis
                testing, confidence intervals, and power analysis
              </li>
              <li>
                <strong>Regression &amp; classification models</strong> – Linear
                and logistic regression, assumptions, and interpretability
              </li>
              <li>
                <strong>Model evaluation &amp; validation</strong> – Bias–variance
                tradeoff, cross-validation, and performance metrics
              </li>
              <li>
                <strong>Experimental design &amp; causal reasoning</strong> – A/B
                testing, confounding, and observational vs. experimental analysis
              </li>
              <li>
                <strong>Data cleaning &amp; preprocessing</strong> – Data quality
                assessment, transformations, and reproducible pipelines
              </li>
              <li>
                <strong>Feature engineering</strong> – Scaling, encoding,
                interactions, and domain-informed feature creation
              </li>
              <li>
                <strong>Exploratory Data Analysis (EDA)</strong> – Statistical
                summaries, visualization, and pattern discovery
              </li>
              <li>
                <strong>Missing data &amp; outlier handling</strong> – Robust
                methods, imputation strategies, and sensitivity analysis
              </li>
              <li>
                <strong>Uncertainty &amp; result reliability</strong> – Error
                analysis, reproducibility, and practical vs. statistical
                significance
              </li>
            </ul>
          </Card>

          <Card title="Development">
            <h3 className="text-lg font-semibold mb-2">Development</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>
                <strong>Supervised learning</strong> – Classification and
                regression models, training workflows, and evaluation
              </li>
              <li>
                <strong>Unsupervised learning</strong> – Clustering,
                dimensionality reduction, and structure discovery
              </li>
              <li>
                <strong>Tree-based methods</strong> – Decision trees, Random
                Forests, and Gradient Boosting
              </li>
              <li>
                <strong>Model selection &amp; tuning</strong> – Cross-validation,
                hyperparameter tuning, and comparative evaluation
              </li>
              <li>
                <strong>Optimization &amp; loss functions</strong> – Objective
                functions, gradient-based optimization, and convergence
              </li>
              <li>
                <strong>Deep learning fundamentals</strong> – Neural networks,
                representation learning, and training dynamics
              </li>
              <li>
                <strong>Algorithmic thinking</strong> – Problem decomposition,
                abstraction, and solution design
              </li>
              <li>
                <strong>Computational complexity</strong> – Time and space
                complexity analysis and scalability considerations
              </li>
              <li>
                <strong>Data structures</strong> – Trees, graphs, hashing, and
                efficient data organization
              </li>
              <li>
                <strong>End-to-end model development</strong> – From problem
                framing to deployable, maintainable solutions
              </li>
            </ul>
          </Card>

          <Card title="Integration">
            <h3 className="text-lg font-semibold mb-2">Integration</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>
                <strong>SQL &amp; relational database design</strong> – Schema
                design, joins, indexing, and query optimization
              </li>
              <li>
                <strong>Data pipelines &amp; reproducible workflows</strong> – ETL
                processes, automation, and repeatable analysis pipelines
              </li>
              <li>
                <strong>Version control &amp; collaboration</strong> – Git
                workflows, GitHub collaboration, and code review practices
              </li>
              <li>
                <strong>Data visualization &amp; storytelling</strong> – Clear
                visual communication and narrative-driven insights
              </li>
              <li>
                <strong>Ethical &amp; responsible data practices</strong> – Bias
                awareness, fairness, privacy, and data governance
              </li>
              <li>
                <strong>Interpretability &amp; explainability</strong> – Model
                transparency, explainable outputs, and trust-building
              </li>
              <li>
                <strong>Translating technical results</strong> – Communicating
                insights to non-technical and stakeholder audiences
              </li>
              <li>
                <strong>Deployment awareness</strong> – APIs, cloud fundamentals,
                and static site deployments
              </li>
              <li>
                <strong>Documentation &amp; knowledge sharing</strong> – Clear
                documentation, READMEs, and reproducible reporting
              </li>
              <li>
                <strong>End-to-end system integration</strong> – Connecting data,
                models, and insights into usable systems
              </li>
            </ul>
          </Card>
        </div>

       
      </section>


<section id="featured" className="mt-16">
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

        {/* Tags (optional) */}
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

      {/* Visual / Preview */}
      <div className="h-72 w-full rounded-2xl bg-zinc-200" />
      {/* Later replace the div above with an <Image /> or a real preview card */}
    </div>
  </div>
</section>


      {/* About section placeholder */}
      <section id="about" className="mt-10 max-w-3xl w-full">
        {/* Add About content here */}
      </section>
    </div>
  );
};

export default HomePage;



















