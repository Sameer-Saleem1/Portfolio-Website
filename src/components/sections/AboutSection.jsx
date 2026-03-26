const highlights = [
  ['Experience', '1.5+ years in full-stack web development'],
  ['Specialization', 'React.js, Next.js, Express.js, PostgreSQL, Tailwind CSS'],
  ['Current Role', 'Junior Software Developer at Sukkur IBA University'],
  ['Approach', 'Modular architecture, APIs, and performance optimization'],
]

import profileAvatar from '../../assets/portfolio avatar.png'
import Sameer from '../../assets/Sameer.jpg'

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-surface-low p-6 sm:p-8">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-highest/30 ghost-outline">
              <img
                src={Sameer}
                alt="Profile illustration"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
                  Profile
                </div>
                <div className="mt-1 text-sm font-semibold text-on-surface">Sameer Saleem</div>
              </div>
              <div className="rounded-full bg-surface-highest/50 px-3 py-1 text-xs font-medium text-on-surface-variant ghost-outline">BSCS</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <div className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
            About me
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-on-surface sm:text-3xl">
            Building scalable products with clean, maintainable code.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed">
            I hold a Bachelor of Computer Science degree from Sukkur IBA University and a Major in Computer Science from APSACS Sukkur.
            I focus on full-stack development with strong backend foundations, practical API design, and fast, user-friendly frontends.
          </p>

          <div className="mt-5 rounded-2xl bg-surface-low/70 p-4 text-sm text-on-surface-variant ghost-outline">
            <div className="font-medium text-on-surface">Education</div>
            <div className="mt-2">Sukkur IBA University - Bachelor of Computer Science (2021 - 2025)</div>
            <div className="mt-1">APSACS Sukkur - Major in Computer Science (2019 - 2021)</div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl bg-surface-low/80 p-5 transition duration-500 ease-spring hover:bg-surface-highest/35 hover:shadow-atmospheric"
              >
                <div className="text-sm font-semibold text-on-surface">{title}</div>
                <div className="mt-2 text-sm text-on-surface-variant">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
