// app/skilltree/page.tsx

export default function SkillTreePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-3 text-center">
        Skill &amp; Knowledge Tree
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Organized into three pillars: Precision, Development, and Integration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <Pillar
          title="Precision"
          color="blue"
          skills={[
            "Statistical Reasoning",
            "Regression Analysis",
            "Hypothesis Testing",
            "Model Evaluation",
            "Experiment Design",
            "Probability",
          ]}
        />

        <Pillar
          title="Development"
          color="green"
          skills={[
            "Python",
            "R",
            "Machine Learning",
            "Feature Engineering",
            "Data Visualization",
            "Reproducible Workflows",
          ]}
        />

        <Pillar
          title="Integration"
          color="purple"
          skills={[
            "SQL & Relational Design",
            "Data Pipelines",
            "Version Control (Git)",
            "Interpretability",
            "Responsible Data Practices",
            "Communicating Results",
          ]}
        />
      </div>
    </main>
  )
}

type PillarProps = {
  title: string
  color: "blue" | "green" | "purple"
  skills: string[]
}

function Pillar({ title, color, skills }: PillarProps) {
  return (
    <section className="flex flex-col items-center gap-8">
      <PillarHead title={title} color={color} />

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <SkillNode key={skill} label={skill} color={color} />
        ))}
      </div>
    </section>
  )
}

function PillarHead({
  title,
  color,
}: {
  title: string
  color: "blue" | "green" | "purple"
}) {
  const colors = {
    blue: "bg-blue-100 border-blue-400 text-blue-900",
    green: "bg-green-100 border-green-400 text-green-900",
    purple: "bg-purple-100 border-purple-400 text-purple-900",
  }

  return (
    <div
      className={[
        "w-48 h-48 rounded-full",
        "flex items-center justify-center",
        "border-2 shadow-md",
        "text-center",
        colors[color],
      ].join(" ")}
    >
      <span className="text-xl font-semibold">{title}</span>
    </div>
  )
}

function SkillNode({
  label,
  color,
}: {
  label: string
  color: "blue" | "green" | "purple"
}) {
  const colors = {
    blue: "bg-blue-50 border-blue-300 text-blue-900",
    green: "bg-green-50 border-green-300 text-green-900",
    purple: "bg-purple-50 border-purple-300 text-purple-900",
  }

  return (
    <div
      className={[
        "w-36 h-36 rounded-full",
        "flex items-center justify-center",
        "border shadow-sm",
        "text-center px-4",
        "transition hover:scale-105 hover:shadow-md",
        colors[color],
      ].join(" ")}
    >
      <span className="text-sm font-medium leading-snug">{label}</span>
    </div>
  )
}
