//app/resume/page.tsx
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      
function ResumeHeader() {
  return (
    <header className="relative bg-slate-800 text-white">
      {/* Top content */}
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center gap-6">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full border-4 border-slate-500"
        />
        <div>
          <h1 className="text-2xl font-semibold leading-tight">
            Bryan Bucknell
          </h1>
          <p className="text-slate-300 text-sm">
            Data Scientist
          </p>
        </div>
      </div>

      {/* Angled bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <div
          className="h-10 bg-slate-800"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          }}
        />
      </div>
    </header>
  );
}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-b-lg overflow-hidden md:grid md:grid-cols-[280px_1fr]">
        
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
            <p className="font-medium">
              M.S. Data Science
            </p>
            <p className="text-gray-600">
              University of Colorado Boulder
            </p>
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
        <section className="p-8 space-y-6">
          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">
              Summary
            </h2>
            <p className="text-sm text-gray-700">
              Experienced data scientist with a focus on statistical rigor,
              interpretability, and ethical data practice.
            </p>
          </section>

          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">
              Work Experience
            </h2>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>Housing affordability analysis using StatsCan data</li>
              <li>Precision–recall evaluation for classification models</li>
              <li>Reproducible ML pipelines</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold border-b pb-1 mb-2">
              References
            </h2>
            <p className="text-sm text-gray-600">
              Available upon request
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
