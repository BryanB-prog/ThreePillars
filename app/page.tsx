export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1F2328]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAFAF7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="font-serif text-xl tracking-wide">Three Pillars</span>

            <Image
              src="/pillarsthumbnail.png"
              alt="Data Humanism"
              width={18}
              height={18}
              className="opacity-60 group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link className="text-black/70 hover:text-black" href="/work">
              Work
            </Link>
            <Link className="text-black/70 hover:text-black" href="/writing">
              Writing
            </Link>
            <Link className="text-black/70 hover:text-black" href="/about">
              About
            </Link>
            <Link className="text-black/70 hover:text-black" href="/contact">
              Contact
            </Link>
          </nav>

          <Link
            href="/work"
            className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-black/80 hover:bg-white"
          >
            View work
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl leading-tight tracking-wide md:text-5xl">
              Charting The Road Ahead.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-black/70 md:text-lg">
              Our Mission: Leveraging Data Science for Human Betterment
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/work" className="rounded-full bg-black px-5 py-2.5 text-sm text-white hover:bg-black/90">
                Explore the work
              </Link>
              <Link
                href="/writing/manifesto"
                className="rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-sm text-black/80 hover:bg-white"
              >
                Read the manifesto
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Tag>Ethical visualization</Tag>
              <Tag>Responsible ML</Tag>
              <Tag>Social impact</Tag>
              <Tag>Story-first analytics</Tag>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <PillarCard key={p.title} p={p} index={i} />
            ))}
          </div>
        </section>

        {/* keep the rest of your main content exactly as you had it */}
        {/* ...Featured work, Writing, Build kinder systems... */}
      </main>

      <footer className="border-t border-black/10 bg-[#FAFAF7]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} Sentropy</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link className="text-black/70 hover:text-black" href="/work">
              Work
            </Link>
            <Link className="text-black/70 hover:text-black" href="/writing">
              Writing
            </Link>
            <Link className="text-black/70 hover:text-black" href="/about">
              About
            </Link>
            <Link className="text-black/70 hover:text-black" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
