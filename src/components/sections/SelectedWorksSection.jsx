import { useMemo, useState } from 'react'
import projects from '../../data/projects.json'

function SelectedWorksSection() {
  const defaultVisible = 2
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = useMemo(
    () => (showAll ? projects : projects.slice(0, defaultVisible)),
    [showAll],
  )
  const canExpand = projects.length > defaultVisible
  const placeholder = '/projects/placeholder.svg'

  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
            Portfolio
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface">
            Selected Works.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-surface-low p-6 transition duration-500 ease-spring hover:shadow-atmospheric"
            >
              <div className="relative">
                {/*
                  Blur needs to affect the image itself (filter blur), not backdrop-blur.
                  Buttons are always shown; they become active once URLs are filled in JSON.
                */}
                <img
                  src={project.image || placeholder}
                  onError={(e) => {
                    e.currentTarget.src = placeholder
                  }}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl  bg-surface-highest/50 object-cover ghost-outline transition duration-500 ease-spring group-hover:scale-[1.01] group-hover:blur-[2px] group-hover:cursor-pointer"
                  loading="lazy"
                  decoding="async"
                />

                <div className="pointer-events-none absolute  inset-0 z-10 rounded-2xl bg-surface/45 opacity-0 transition duration-500 ease-spring group-hover:opacity-100" />

                <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 rounded-2xl opacity-0 transition duration-500 ease-spring group-hover:opacity-100">
                  {(() => {
                    const demoUrl = (project.demoUrl || '').trim()
                    const codeUrl = (project.codeUrl || '').trim()
                    const demoEnabled = demoUrl.length > 0
                    const codeEnabled = codeUrl.length > 0

                    return (
                      <>
                        <a
                          href={demoEnabled ? demoUrl : '#'}
                          target={demoEnabled ? '_blank' : undefined}
                          rel={demoEnabled ? 'noreferrer' : undefined}
                          aria-disabled={!demoEnabled}
                          onClick={(e) => {
                            if (!demoEnabled) e.preventDefault()
                          }}
                          className={[
                            'glow-primary pointer-events-auto rounded-xl2 px-4 py-2.5 text-sm font-semibold transition duration-500 ease-spring',
                            demoEnabled
                              ? 'bg-luminous text-surface hover:shadow-atmospheric'
                              : 'bg-surface-low/60 text-on-surface-variant ghost-outline opacity-70 cursor-not-allowed',
                          ].join(' ')}
                        >
                          View Demo
                        </a>

                        <a
                          href={codeEnabled ? codeUrl : '#'}
                          target={codeEnabled ? '_blank' : undefined}
                          rel={codeEnabled ? 'noreferrer' : undefined}
                          aria-disabled={!codeEnabled}
                          onClick={(e) => {
                            if (!codeEnabled) e.preventDefault()
                          }}
                          className={[
                            'pointer-events-auto rounded-xl2 px-4 py-2.5 text-sm font-semibold transition duration-500 ease-spring ghost-outline',
                            codeEnabled
                              ? 'bg-surface-low/70 text-on-surface hover:bg-surface-highest/40'
                              : 'bg-surface-low/60 text-on-surface-variant opacity-70 cursor-not-allowed',
                          ].join(' ')}
                        >
                          Code
                        </a>
                      </>
                    )
                  })()}
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-on-surface">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-on-surface-variant">{project.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-highest/40 px-3 py-1 text-xs font-medium text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {canExpand && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-xl2 bg-surface-low/70 px-5 py-3 text-sm font-semibold text-on-surface transition duration-500 ease-spring hover:bg-surface-highest/40 ghost-outline"
            >
              {showAll ? 'Show less' : 'View more'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SelectedWorksSection
