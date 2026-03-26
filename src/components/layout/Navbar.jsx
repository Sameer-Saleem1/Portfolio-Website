import { useEffect, useState } from 'react'

function Navbar({ links, activeHref, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [activeHref])

  return (
    <header className="relative">
      <div className="fixed left-1/2 top-0 z-50 w-[min(1152px,calc(100vw-2rem))] -translate-x-1/2 pt-4">
        <div className="px-4">
          <div className="glass rounded-3xl px-5 py-3 shadow-atmospheric ghost-outline">
            <div className="flex items-center justify-between">
              <a
                href="#top"
                className="uppercase tracking-[0.10em] font-display text-lg font-semibold tracking-widest !leading-none text-primary-container"
              >
                Sameer's Portfolio
              </a>

              <nav className="hidden items-center gap-8 text-sm font-medium text-on-surface-variant md:flex">
                {links.map((link) => {
                  const isActive = activeHref === link.href
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={[
                        'relative py-2 transition duration-500 ease-spring',
                        isActive ? 'text-primary-container' : 'hover:text-on-surface',
                      ].join(' ')}
                    >
                      {link.label}
                      <span
                        className={[
                          'pointer-events-none absolute left-1/2 top-full mt-1 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary-container transition duration-500 ease-spring',
                          isActive ? 'opacity-100' : 'opacity-0',
                        ].join(' ')}
                      />
                    </a>
                  )
                })}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onToggleTheme}
                  aria-label="Toggle theme"
                  className="rounded-2xl bg-surface-highest/25 px-3 py-2 text-on-surface transition duration-500 ease-spring hover:bg-surface-highest/35 ghost-outline"
                >
                  {theme === 'dark' ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M21 14.2A8.6 8.6 0 0 1 9.8 3a7.2 7.2 0 1 0 11.2 11.2Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileOpen}
                  className="rounded-2xl bg-surface-highest/25 px-3 py-2 text-on-surface transition duration-500 ease-spring hover:bg-surface-highest/35 ghost-outline md:hidden"
                >
                  {mobileOpen ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M18 6 6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 7h16M4 12h16M4 17h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {mobileOpen && (
              <div className="mt-4 md:hidden">
                <div className="rounded-2xl bg-surface/40 p-2 ghost-outline">
                  <nav className="grid">
                    {links.map((link) => {
                      const isActive = activeHref === link.href
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className={[
                            'rounded-xl px-3 py-2 text-sm font-medium transition duration-500 ease-spring',
                            isActive
                              ? 'bg-surface-highest/30 text-primary-container'
                              : 'text-on-surface-variant hover:bg-surface-highest/20 hover:text-on-surface',
                          ].join(' ')}
                        >
                          {link.label}
                        </a>
                      )
                    })}
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
