'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useLanguage } from '@/components/language-provider'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/delademdagadu/Projects',
      external: true,
      icon: GitHubIcon,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/princessdelademdagadu',
      external: true,
      icon: LinkedInIcon,
    },
    {
      label: 'Email',
      href: 'mailto:princez.dagadu@gmail.com',
      external: false,
      icon: Mail,
    },
  ]

  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Profile card */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <div className="flex w-full items-center justify-center rounded-xl border border-border bg-secondary/40 px-6 py-10">
                <Logo className="h-9 w-auto" />
              </div>

              <h2 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                Princess Deladem Dagadu
              </h2>

              <span className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                {t.header.role}
              </span>

              <span className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  className="size-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                {t.hero.eyebrow}
              </span>

              <ul className="mt-6 flex items-center justify-center gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.external ? '_blank' : undefined}
                      rel={s.external ? 'noopener noreferrer' : undefined}
                      aria-label={s.label}
                      title={s.label}
                      className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <s.icon className="size-5" />
                      <span className="sr-only">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Headline + CTAs */}
          <div className="flex flex-col justify-center lg:col-span-3">
            <h1 className="max-w-2xl text-pretty text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:leading-[1.15]">
              {t.hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {t.hero.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
