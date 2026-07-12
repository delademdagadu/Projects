'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="mb-6 text-sm text-muted-foreground">{t.hero.eyebrow}</p>
        <h1 className="max-w-3xl text-pretty text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.15]">
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

        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 sm:max-w-md">
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
