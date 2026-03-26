import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS env vars (Vite requires the VITE_ prefix)
// Insert values in your local `.env` file (see `.env.example`)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function ContactSection() {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet.',
      })
      return
    }

    const formData = new FormData(formRef.current)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }
    if (!isValidEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setIsSending(true)
    setStatus({ type: 'idle', message: '' })

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      formRef.current.reset()
      setStatus({ type: 'success', message: 'Message sent successfully.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
            Contact
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-on-surface sm:text-5xl">
            Let's build the <span className="text-luminous">future</span>.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed">
            Open to software development opportunities and impactful projects.
            Reach out and I will get back to you quickly.
          </p>

          <div className="mt-10 space-y-3 text-sm text-on-surface-variant">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <a href="tel:+923183636046" target="_blank" rel="noopener noreferrer">+92 3183636046</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <a href="mailto:sameersaleemq75@gmail.com" target="_blank" rel="noopener noreferrer">sameersaleemq75@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary-container" />
              <a href="https://www.linkedin.com/in/sameer-saleem-4898b0221/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sameersaleem1</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-secondary-container" />
              <a href="https://github.com/Sameer-Saleem1" target="_blank" rel="noopener noreferrer">github.com/Sameer-Saleem1</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="rounded-3xl bg-surface-low p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
                  Name
                </span>
                <input
                  name="name"
                  className="mt-2 w-full rounded-2xl bg-surface px-4 py-3 text-sm text-on-surface ghost-outline focus:outline-none focus:ring-2 focus:ring-primary-container/40"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm">
                <span className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
                  Email
                </span>
                <input
                  name="email"
                  className="mt-2 w-full rounded-2xl bg-surface px-4 py-3 text-sm text-on-surface ghost-outline focus:outline-none focus:ring-2 focus:ring-primary-container/40"
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="text-xs font-medium uppercase tracking-[0.10em] text-on-surface-variant">
                Message
              </span>
              <textarea
                name="message"
                className="mt-2 min-h-32 w-full resize-none rounded-2xl bg-surface px-4 py-3 text-sm text-on-surface ghost-outline focus:outline-none focus:ring-2 focus:ring-primary-container/40"
                placeholder="What are you building?"
              />
            </label>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="text-xs text-on-surface-variant">
                {status.type === 'success' ? (
                  <span className="text-primary-container">{status.message}</span>
                ) : status.type === 'error' ? (
                  <span className="text-error">{status.message}</span>
                ) : (
                  'Usually replies within 24 hours.'
                )}
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="glow-primary rounded-xl2 bg-luminous px-5 py-3 text-sm font-semibold text-surface transition duration-500 ease-spring hover:shadow-atmospheric"
              >
                {isSending ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
