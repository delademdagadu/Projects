'use client'

import { useState } from 'react'
import { ArrowUpRight, Code2, Download, ExternalLink, Mail } from 'lucide-react'

const links = [
  {
    label: 'Email',
    value: 'princez.dagadu@gmail.com',
    href: 'mailto:princez.dagadu@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: '/in/princessdelademdagadu',
    href: 'https://linkedin.com/in/princessdelademdagadu',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    value: 'delademdagadu/Projects',
    href: 'https://github.com/delademdagadu/Projects',
    icon: Code2,
  },
]

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

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
            {"Let's work together"}
          </h2>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {
              "I'm open to data analyst, data science, and marketing analytics roles, plus freelance projects. Based in Berlin — the fastest way to reach me is email."
            }
          </p>

          <ul className="mt-8 space-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group flex items-center gap-3 text-sm"
                >
                  <span className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors group-hover:text-primary">
                    <link.icon className="size-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                      {link.label}
                    </span>
                    <span className="font-medium text-foreground">
                      {link.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Download CV
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/princess-dagadu-cv-en.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="size-4" />
                English (PDF)
              </a>
              <a
                href="/princess-dagadu-lebenslauf-de.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="size-4" />
                Deutsch (PDF)
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
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder="you@company.com"
              />
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                placeholder="Tell me a bit about the role or project…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send message
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
