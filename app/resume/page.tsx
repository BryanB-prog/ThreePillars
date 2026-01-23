//app/resume/page.tsx

function ResumeHeader() {
  return (
    <header className="pt-10">
      {/* This is the actual header BAR, centered like the resume body */}
      <div className="max-w-6xl mx-auto bg-slate-800 text-white px-6 pt-7 pb-10 relative rounded-t-lg overflow-hidden">
        <div className="flex items-center gap-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-slate-500"
          />
          <div>
            <h1 className="text-2xl font-semibold leading-tight">
              Bryan Bucknell
            </h1>
            <p className="text-slate-300 text-sm">Data Scientist</p>
          </div>
        </div>

        {/* Angled cut */}
        <div className="absolute left-0 bottom-0 w-full h-10 overflow-hidden">
          <div
            className="w-full h-full bg-slate-800"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 22% 100%)",
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-10">
      <ResumeHeader />

      {/* Resume body is the same width as the header */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-b-lg overflow-hidden md:grid md:grid-cols-[240px_1fr]">
        {/* LEFT SIDEBAR */}
        <aside className="bg-[#e8dfd6] p-6 text-sm">
          <section className="space-y-2">
            <h2 className="font-semibold uppercase text-xs tracking-wide">
              Contact Details
            </h2>
            <p>📍 Peterborough, ON</p>
            <p>📧 bryan@email.com</p>
            <p>🔗 github.com/yourname</p>
          </section>

          <section className="mt-6">
            <h2 className="font-semibold uppercase text-xs tracking-wide mb-2">
              Education
            </h2>
            <p className="font-medium">M.S. Data Science</p>
            <p className="text-gray-600">University of Colorado Boulder</p>
          </section>

          <section className="mt-6">
            <h2 className="font-semibold uppercase text-xs tracking-wide mb-2">
              Skills
            </h2>
            <ul className="space-y-1">
              <li>Machine Learning</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Data Visualization</li>
            </ul>
          </section>
        </aside>

        {/* MAIN CONTENT */}
        <section className="p-8 md:p-10 space-y-7">
          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">Summary</h2>
            <p className="text-sm text-gray-700">
              Experienced data scientist with a focus on statistical rigor,
              interpretability, and ethical data practice.
            </p>
          </section>

          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">Work Experience</h2>
            <ul className="list-disc ml-5 text-sm space-y-2 text-gray-700">
              <li>Housing affordability analysis using StatsCan data</li>
              <li>Precision–recall evaluation for classification models</li>
              <li>Reproducible ML pipelines</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">References</h2>
            <p className="text-sm text-gray-600">Available upon request</p>
          </section>
        </section>
      </div>
    </main>
  );
}
