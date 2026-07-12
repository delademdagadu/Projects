'use client'

import { useLanguage } from '@/components/language-provider'

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          {t.skills.title}
        </h2>
        <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {t.skills.subtitle}
        </p>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
