const milestones = [
  {
    period: 'Nov 2025 - Present',
    role: 'Junior Software Developer',
    company: 'Sukkur IBA University',
    dot: 'bg-primary',
  },
  {
    period: 'Sept 2025 - Oct 2025',
    role: 'Full Stack Web Development Intern',
    company: 'Wired Hub Consulting Ltd.',
    dot: 'bg-secondary',
  },
  {
    period: 'July 2024 - July 2025',
    role: 'Senior Frontend Developer',
    company: 'Exclusive Digitals',
    dot: 'bg-primary-container',
  },
  {
    period: 'Nov 2023 - May 2024',
    role: 'Web Developer',
    company: 'Aura Canvas',
    dot: 'bg-primary',
  },
]

function MilestonesSection() {
  return (
    <section id="milestones" className="bg-surface-low py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-primary-container">
            Journey
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface sm:text-5xl">
            Milestones.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-surface-highest/60 md:block" />

          {milestones.map((item, index) => {
            const odd = index % 2 === 1
            return (
              <div
                key={item.role}
                className="relative mb-12 grid items-center gap-5 md:grid-cols-2 md:gap-10"
              >
                <div className={odd ? 'md:order-2 md:pl-6' : 'md:pr-6'}>
                  <article className="rounded-2xl bg-surface/80 p-5 shadow-atmospheric ghost-outline">
                    <div
                      className={[
                        'text-xs font-semibold uppercase tracking-[0.1em]',
                        odd ? 'text-secondary' : 'text-primary-container',
                      ].join(' ')}
                    >
                      {item.period}
                    </div>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-on-surface">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-primary">{item.company}</p>
                  </article>
                </div>

                <div className={odd ? 'md:order-1' : 'md:order-2'} />

                <span
                  className={[
                    'absolute left-1/2 top-7 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full md:block',
                    item.dot,
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-1/2 top-7 hidden h-7 w-7 -translate-x-1/2 rounded-full blur-md md:block',
                    item.dot,
                  ].join(' ')}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MilestonesSection
