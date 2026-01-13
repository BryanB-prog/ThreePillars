import React from "react";

type Node = {
  title: string;
  items?: string[];
  children?: Node[];
};

const data: { pillar: string; nodes: Node[] }[] = [
  {
    pillar: "Precision",
    nodes: [
      {
        title: "Probability & Distributions",
        items: [
          "Random variables, expectation/variance",
          "Common distributions, sampling",
          "CLT / LLN intuition",
        ],
      },
      {
        title: "Inference & Uncertainty",
        items: [
          "Estimation, confidence intervals",
          "Hypothesis tests, p-values",
          "Power / sample size",
          "Multiple testing basics",
        ],
      },
      {
        title: "Regression & Statistical Modeling",
        items: [
          "Linear regression assumptions + diagnostics",
          "Logistic regression + classification basics",
          "Regularization (ridge/lasso) concepts",
          "Effect sizes + interpretability",
        ],
      },
      {
        title: "Evaluation & Reliability",
        items: [
          "Bias–variance tradeoff",
          "Cross-validation concepts",
          "Metrics (RMSE/MAE/R², precision/recall, ROC-AUC)",
          "Reproducibility + sensitivity checks",
        ],
      },
      {
        title: "Data Quality",
        items: [
          "Missing data strategies",
          "Outliers + robust approaches",
          "Sanity checks / validation",
        ],
      },
    ],
  },
  {
    pillar: "Development",
    nodes: [
      {
        title: "Supervised Learning",
        items: [
          "Regression vs classification framing",
          "Baselines and feature/target design",
          "Training loops + evaluation",
        ],
      },
      {
        title: "Unsupervised Learning",
        items: [
          "Clustering (k-means, hierarchical ideas)",
          "Dimensionality reduction (PCA concepts)",
          "Interpreting latent structure",
        ],
      },
      {
        title: "Tree-Based Methods",
        items: ["Decision trees", "Random Forest", "Gradient Boosting concepts"],
      },
      {
        title: "Model Selection & Tuning",
        items: [
          "Hyperparameters",
          "CV + grid/random search concepts",
          "Avoiding leakage",
        ],
      },
      {
        title: "Optimization",
        items: [
          "Loss functions",
          "Gradient descent intuition",
          "Regularization as constraint/penalty",
        ],
      },
      {
        title: "Deep Learning Foundations",
        items: [
          "Neural nets basics",
          "Overfitting controls (dropout/early stopping concepts)",
          "Representation learning intuition",
        ],
      },
      {
        title: "CS Fundamentals",
        items: [
          "Data structures (hashing, trees, graphs)",
          "Complexity (time/space)",
          "Algorithmic problem decomposition",
        ],
      },
    ],
  },
  {
    pillar: "Integration",
    nodes: [
      {
        title: "SQL & Databases",
        items: [
          "Relational design (tables/keys)",
          "Joins, aggregates, window functions (conceptual)",
          "Indexing + query performance basics",
        ],
      },
      {
        title: "Pipelines & Reproducibility",
        items: [
          "ETL/ELT concepts",
          "Notebooks → scripts → pipelines",
          "Reproducible environments + requirements",
        ],
      },
      {
        title: "Version Control & Collaboration",
        items: ["Git basics (commit/branch/merge)", "PRs + reviews", "Issue tracking"],
      },
      {
        title: "Communication & Storytelling",
        items: [
          "Stakeholder-ready summaries",
          "Visual storytelling principles",
          "Explaining tradeoffs and uncertainty",
        ],
      },
      {
        title: "Ethics & Responsible Data",
        items: ["Bias and fairness awareness", "Privacy + governance mindset", "Proper framing of conclusions"],
      },
      {
        title: "Interpretability & Explainability",
        items: ["Local vs global explanation concepts", "Trust + transparency for stakeholders"],
      },
      {
        title: "Deployment Awareness",
        items: ["APIs at a high level", "Cloud basics (what runs where)", "Static sites (Next.js/Vercel) and constraints"],
      },
    ],
  },
];

function NodeBlock({ node }: { node: Node }) {
  return (
    <details className="rounded-xl border border-gray-200 bg-white p-4">
      <summary className="cursor-pointer select-none font-semibold text-gray-900">
        {node.title}
      </summary>

      {node.items?.length ? (
        <ul className="list-disc pl-5 space-y-1 mt-3 text-sm text-gray-700">
          {node.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      ) : null}

      {node.children?.length ? (
        <div className="mt-3 space-y-3">
          {node.children.map((child) => (
            <NodeBlock key={child.title} node={child} />
          ))}
        </div>
      ) : null}
    </details>
  );
}

export default function SkillTree() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Skill / Knowledge Tree</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {data.map((p) => (
          <div key={p.pillar} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">{p.pillar}</h3>
            <div className="space-y-3">
              {p.nodes.map((n) => (
                <NodeBlock key={n.title} node={n} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
