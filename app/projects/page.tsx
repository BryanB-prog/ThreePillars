// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Page padding */}
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        {/* Top row: Menu (left), Title (center) */}
        <header className="relative mb-10">
          <div className="absolute left-0 top-0 text-lg font-medium">
            <a
              href="/"
              className="rounded-md px-2 py-1 text-zinc-800 hover:bg-zinc-100"
            >
              Menu
            </a>
          </div>

          <h1 className="text-center text-5xl font-semibold tracking-tight">
            Projects
          </h1>
        </header>

        {/* Main layout: Newest (left), Recent grid (right) */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Newest */}
          {
  id: "Housing Costs",
  title: "Housing Costs and Average Income Comparison",
  blurb:
    "An analysis of housing costs and average income",
  tags: ["Housing", "Income", "Housing Crises", "JSON"],
  demoUrl: "three-pillars-sv6v.vercel.app",
  repoUrl: "https://github.com/BryanB-prog/ThreePillars/tree/main/housingcosts",
  codeSnippet: {
    languageLabel: "json",
    code: `{
  "StackSizeMultiplier": 15.0,
  "WeightMultiplier": 0.25,
  "UseWaste": false
}`
  },
  group: "recent"
},


          
          <div className="md:col-span-1">
            <h2 className="mb-3 text-xl font-medium">Newest</h2>

            <div className="h-[520px] w-full rounded-xl bg-zinc-200" />
          </div>

          {/* Recent */}
          <div className="md:col-span-2">
            <h2 className="mb-3 text-xl font-medium">Recent</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="h-40 rounded-xl bg-zinc-200" />
              <div className="h-40 rounded-xl bg-zinc-200" />

              <div className="h-40 rounded-xl bg-zinc-200" />
              <div className="h-40 rounded-xl bg-zinc-200" />

              <div className="h-40 rounded-xl bg-zinc-200" />
              <div className="h-40 rounded-xl bg-zinc-200" />
            </div>
          </div>
        </section>

        {/* Other Works */}
        <section className="mt-12">
          <h2 className="mb-3 text-center text-2xl font-medium">Other Works</h2>
          <div className="h-28 w-full rounded-xl bg-zinc-200" />
        </section>
      </div>
    </main>
  );
}
