export default function SkillTreePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-12 text-center">
        Skill & Knowledge Tree
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <Pillar
          title="Precision"
          color="blue"
          skills={[
            "Statistical Reasoning",
            "Regression Analysis",
            "Hypothesis Testing",
            "Model Evaluation",
          ]}
        />

        <Pillar
          title="Development"
          color="green"
          skills={[
            "Python & R",
            "Machine Learning Pipelines",
            "Feature Engineering",
            "Data Visualization",
          ]}
        />

        <Pillar
          title="Integration"
          color="purple"
          skills={[
            "SQL & Relational Design",
            "Ethical Data Practices",
            "Interpretability",
            "Communicating Results",
          ]}
        />
      </div>
    </main>
  )
}
