'use client'

import Link from 'next/link'
import {
  ArrowUpRight,
  Car,
  FlaskConical,
  GitBranch,
  LineChart,
  MessageSquare,
  ShoppingBag,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const NBVIEWER = 'https://nbviewer.org/github/delademdagadu/Projects/blob/main'

type ProjectMeta = {
  track: 1 | 2
  icon: LucideIcon
  file?: string
  internalHref?: string
}

// Language-neutral metadata, aligned by index with the translated project copy.
const projectMeta: ProjectMeta[] = [
  {
    track: 1,
    icon: Stethoscope,
    file: 'Deep%20Learning%20Pipeline%20for%20Pneumonia%20Detection.ipynb',
  },
  {
    track: 1,
    icon: MessageSquare,
    file: 'Binary%20Sentiment%20Analysis%20using%20NLP%20Models%20.ipynb',
  },
  {
    track: 1,
    icon: GitBranch,
    file: 'End_to_end_Machine_Learning_Pipeline.ipynb',
  },
  {
    track: 1,
    icon: Car,
    file: 'Exploratory_Data_Analysis_of_Classic_Cars_for_Restoration_and_Auction.ipynb',
  },
  {
    track: 2,
    icon: ShoppingBag,
    file: 'Customer%20Behavior%20Analysis%20and%20Personalization%20for%20a%20Fashion%20E-Commerce%20Platform.ipynb',
  },
  {
    track: 2,
    icon: LineChart,
    internalHref: '/dashboard',
  },
  {
    track: 2,
    icon: FlaskConical,
    file: 'Checkout_A_B_Test_Analysis.ipynb',
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()

  const items = t.projects.items.map((item, i) => {
    const meta = projectMeta[i]
    const href = meta.internalHref ?? `${NBVIEWER}/${meta.file}`
    return { ...item, ...meta, href }
  })

  return (
    <section id="work" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <header className="mb-12">
          <h2 className="text-2xl font-medium tracking-tight text-foreground">
            {t.projects.title}
          </h2>
          <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.projects.subtitle}
          </p>
        </header>

        <div className="space-y-14">
          {t.projects.tracks.map((track, ti) => {
            const trackNumber = (ti + 1) as 1 | 2
            const trackItems = items.filter((p) => p.track === trackNumber)

            return (
              <div key={track.title}>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {track.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {track.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {trackItems.map((project) => {
                    const Icon = project.icon
                    const isInternal = Boolean(project.internalHref)
                    const cardClass =
                      'group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-secondary/40'
                    const content = (
                      <>
                        <div className="mb-5 flex items-start justify-between">
                          <Icon
                            className="size-6 text-primary"
                            aria-hidden="true"
                          />
                          <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                        <h4 className="text-pretty font-medium leading-snug text-foreground">
                          {project.title}
                        </h4>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary/80">
                          {project.caption}
                        </p>
                        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                          {project.blurb}
                        </p>
                      </>
                    )

                    return isInternal ? (
                      <Link
                        key={project.title}
                        href={project.href}
                        className={cardClass}
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClass}
                      >
                        {content}
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
