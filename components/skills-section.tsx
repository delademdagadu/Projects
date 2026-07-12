'use client'

import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Cpu,
  Database,
  Languages,
  Terminal,
  TrendingUp,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

type Badge = {
  color?: string
  slug?: string
  href?: string
  dark?: boolean
}

// Group-level presentation, keyed by position so it works in every language.
const groupIcons: LucideIcon[] = [
  Database,
  BarChart3,
  Cpu,
  TrendingUp,
  Terminal,
  Languages,
]

const groupAccents = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-1)',
  'var(--chart-4)',
  'var(--chart-2)',
  'var(--chart-5)',
]

// Per-item brand styling, keyed by [group][item] to match the translated order.
const badgeMeta: Badge[][] = [
  // Data & Analytics
  [
    { color: '#3776AB', slug: 'python', href: 'https://www.python.org' },
    { color: '#150458', slug: 'pandas', href: 'https://pandas.pydata.org' },
    { color: '#013243', slug: 'numpy', href: 'https://numpy.org' },
    { color: '#4479A1' },
    {},
    {},
  ],
  // Visualization & BI
  [
    { color: '#E97627', slug: 'tableau', href: 'https://www.tableau.com' },
    {
      color: '#F2C811',
      slug: 'powerbi',
      dark: true,
      href: 'https://powerbi.microsoft.com',
    },
    { color: '#4285F4', href: 'https://lookerstudio.google.com' },
    {
      color: '#217346',
      slug: 'microsoftexcel',
      href: 'https://www.microsoft.com/microsoft-365/excel',
    },
    {},
  ],
  // Machine Learning
  [
    {
      color: '#F7931E',
      slug: 'scikitlearn',
      href: 'https://scikit-learn.org',
    },
    {},
    {},
    {},
    {},
    {},
  ],
  // Marketing Analytics
  [
    {
      color: '#E37400',
      slug: 'googleanalytics',
      href: 'https://analytics.google.com',
    },
    {},
    { color: '#4285F4', slug: 'googleads', href: 'https://ads.google.com' },
    {},
  ],
  // Tools & Platforms
  [
    { color: '#F05032', slug: 'git', href: 'https://git-scm.com' },
    {
      color: '#669DF6',
      slug: 'googlebigquery',
      href: 'https://cloud.google.com/bigquery',
    },
    { color: '#F37626', slug: 'jupyter', href: 'https://jupyter.org' },
    {},
  ],
  // Languages
  [{}, {}, {}],
]

function SkillBadge({ label, meta }: { label: string; meta: Badge }) {
  const isBrand = Boolean(meta.color)

  const content = (
    <>
      {meta.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${meta.slug}/${meta.dark ? '111111' : 'white'}`}
          alt=""
          aria-hidden="true"
          width={14}
          height={14}
          className="size-3.5"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ) : null}
      {label}
    </>
  )

  if (isBrand) {
    const className =
      'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium shadow-sm transition-transform hover:-translate-y-0.5'
    const style = {
      backgroundColor: meta.color,
      color: meta.dark ? '#111111' : '#ffffff',
    }

    return meta.href ? (
      <a
        href={meta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {content}
      </a>
    ) : (
      <span className={className} style={style}>
        {content}
      </span>
    )
  }

  // Conceptual skill — neutral pill.
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
      {label}
    </span>
  )
}

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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, groupIndex) => {
            const Icon = groupIcons[groupIndex % groupIcons.length]
            const accent = groupAccents[groupIndex % groupAccents.length]

            return (
              <div
                key={group.title}
                className="rounded-xl border border-border border-t-2 bg-card p-5 shadow-sm"
                style={{ borderTopColor: accent }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex size-8 items-center justify-center rounded-md"
                    style={{ backgroundColor: `color-mix(in oklch, ${accent} 15%, transparent)` }}
                  >
                    <Icon className="size-4" style={{ color: accent }} />
                  </span>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <li key={item}>
                      <SkillBadge
                        label={item}
                        meta={badgeMeta[groupIndex]?.[itemIndex] ?? {}}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
