export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1F2328]">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-serif text-4xl tracking-wide">Three Pillars</h1>
        <p className="mt-4 text-black/70">
          Problem solving, precision, and scientific rigor.
        </p>

        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className={[
                "block rounded-2xl border border-black/10 p-8",
                "shadow-[0_14px_30px_-18px_rgba(0,0,0,0.25)]",
                "transition-transform hover:-translate-y-1",
                p.bg,
              ].join(" ")}
            >
              <h2 className="font-serif text-2xl text-black/90">{p.title}</h2>
              <p className="mt-2 text-sm text-black/70">{p.subtitle}</p>

              <div className="mt-5 text-sm leading-relaxed text-black/80">
                {p.blurb}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-black/75">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/30" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-xs text-black/60 underline underline-offset-4">
                Explore →
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
