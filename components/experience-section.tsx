'use client'

import { useLanguage } from '@/components/language-provider'

type TimelineItem = {
  period: string
  role: string
  org: string
  detail: string
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-8">
      {items.map((item) => (
        <li
          key={`${item.role}-${item.org}`}
          className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6"
        >
          <span className="font-mono text-xs text-muted-foreground sm:pt-1">
            {item.period}
          </span>
          <div>
            <h4 className="text-base font-medium tracking-tight text-foreground">
              {item.role}{' '}
              <span className="text-muted-foreground">· {item.org}</span>
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="border-b border-border/60">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-8 text-2xl font-medium tracking-tight text-foreground">
            {t.experienceSection.experienceTitle}
          </h2>
          <Timeline items={t.experienceSection.experience} />
        </div>
        <div>
          <h2 className="mb-8 text-2xl font-medium tracking-tight text-foreground">
            {t.experienceSection.educationTitle}
          </h2>
          <Timeline items={t.experienceSection.education} />
        </div>
      </div>
    </section>
  )
}
