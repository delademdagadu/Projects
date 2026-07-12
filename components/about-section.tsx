'use client'

import { useLanguage } from '@/components/language-provider'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          {t.about.title}
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div className="space-y-5 md:col-span-2">
            {t.about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="space-y-4">
            {t.about.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
