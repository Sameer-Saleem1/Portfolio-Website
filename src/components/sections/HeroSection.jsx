function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-surface-low/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant ghost-outline">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-container glow-primary" />
          Available for full-stack roles
        </div>

        <h1 className="mt-8 font-display text-4xl font-semibold tracking-[-0.02em] text-on-surface sm:text-[3.5rem] sm:leading-[1.05]">
          Sameer <span className="text-luminous">Saleem</span> <br />
          <span className="text-on-surface">Full Stack Developer</span>
        </h1>

        <p className="mt-6 text-balance text-base leading-relaxed text-on-surface-variant">
          Software Developer with 1.5+ years of experience building scalable web
          applications, RESTful APIs, and third-party integrations using Next.js,
          Express.js, and PostgreSQL.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#work"
            className="glow-primary rounded-xl2 bg-luminous px-5 py-3 text-sm font-semibold text-surface transition duration-500 ease-spring hover:shadow-atmospheric"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-xl2 bg-surface-low/70 px-5 py-3 text-sm font-semibold text-on-surface transition duration-500 ease-spring hover:bg-surface-highest/40 ghost-outline"
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
