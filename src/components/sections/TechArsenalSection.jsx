const frontendSkills = [
  'React',
  'Next.js',
  'Angular',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'React Native',
]
const backendSkills = [
  'Node.js',
  'Express.js',
  'REST APIs',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Firebase',
  'Prisma',
  'Drizzle',
  'Sequelize',
]
const capabilityCards = [
  ['Languages', 'JavaScript, TypeScript, Java, Python'],
  ['AI/ML', 'OpenAI API, Hugging Face, NumPy, Pandas'],
  ['Tools', 'Git, GitHub, VS Code, Vercel, Cursor AI, Copilot'],
  ['Soft Skills', 'Agile collaboration, communication, problem-solving'],
]

function TechArsenalSection() {
  return (
    <section id="arsenal" className="bg-surface-low py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
              Toolkit
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface">
              Tech Arsenal.
            </h2>
          </div>
          <div className="hidden text-sm text-on-surface-variant sm:block">
            Focused, modern stack for durable products.
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-surface p-6">
              <div className="text-sm font-semibold text-on-surface">
                Frontend Engineering
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface-low/70 px-3 py-1.5 text-xs font-medium text-on-surface-variant ghost-outline"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-surface p-6">
              <div className="text-sm font-semibold text-on-surface">
                Backend & Data
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface-low/70 px-3 py-1.5 text-xs font-medium text-on-surface-variant ghost-outline"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {capabilityCards.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-3xl bg-surface p-6 transition duration-500 ease-spring hover:shadow-atmospheric"
                >
                  <div className="text-sm font-semibold text-on-surface">{title}</div>
                  <div className="mt-5 p-2 text-sm text-on-surface-variant rounded-2xl bg-surface-low/60 ghost-outline" > {desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechArsenalSection
