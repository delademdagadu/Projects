'use client'

import { useState } from 'react'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

export function ContactSection() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const links = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/princessdelademdagadu',
      external: true,
      icon: LinkedInIcon,
      className: 'bg-[#0a66c2]/10 text-[#0a66c2]',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/delademdagadu/Projects',
      external: true,
      icon: GitHubIcon,
      className: 'bg-foreground/10 text-foreground',
    },
    {
      label: t.contact.emailLabel,
      href: 'mailto:princez.dagadu@gmail.com',
      external: false,
      icon: Mail,
      className: 'bg-primary/10 text-primary',
    },
  ]

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name || 'someone'}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
    window.location.href = `mailto:princez.dagadu@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {t.contact.body}
          </p>

          <ul className="mt-8 flex items-center gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  title={link.label}
                  className={`flex size-12 items-center justify-center rounded-xl transition-transform hover:-translate-y-0.5 ${link.className}`}
                >
                  <link.icon className="size-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t.contact.downloadCv}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/princess-dagadu-cv-en.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="size-4" />
                {t.contact.cvEnglish}
              </a>
              <a
                href="/princess-dagadu-lebenslauf-de.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="size-4" />
                {t.contact.cvGerman}
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                {t.contact.formName}
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder={t.contact.formNamePlaceholder}
              />
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                {t.contact.formEmail}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder={t.contact.formEmailPlaceholder}
              />
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                {t.contact.formMessage}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder={t.contact.formMessagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.contact.formSubmit}
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
