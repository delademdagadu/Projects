'use client'

import Link from 'next/link'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const REPO = 'https://github.com/delademdagadu/Projects/blob/main'
const NBVIEWER = 'https://nbviewer.org/github/delademdagadu/Projects/blob/main'

type ProjectMeta = {
  track: 1 | 2
  image: string
  tags: string[]
  file?: string
  internalHref?: string
}

// Language-neutral metadata, aligned by index with the translated project copy.
const projectMeta: ProjectMeta[] = [
  {
    track: 1,
    image: '/images/project-pneumonia.png',
    tags: ['Python', 'TensorFlow/Keras', 'CNN', 'Computer Vision'],
    file: 'Deep%20Learning%20Pipeline%20for%20Pneumonia%20Detection.ipynb',
  },
  {
    track: 1,
    image: '/images/project-nlp.png',
    tags: ['Python', 'NLP', 'DistilBERT', 'scikit-learn'],
    file: 'Binary%20Sentiment%20Analysis%20using%20NLP%20Models%20.ipynb',
  },
  {
    track: 1,
    image: '/images/project-forecast.png',
    tags: ['Python', 'scikit-learn', 'Feature Engineering', 'Pipelines'],
    file: 'End_to_end_Machine_Learning_Pipeline.ipynb',
  },
  {
    track: 2,
    image: '/images/project-churn.png',
    tags: ['Python', 'Pandas', 'Segmentation', 'EDA'],
    file: 'Customer%20Behavior%20Analysis%20and%20Personalization%20for%20a%20Fashion%20E-Commerce%20Platform.ipynb',
  },
  {
    track: 2,
    image: '/images/project-eda.png',
    tags: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
    file: 'Exploratory_Data_Analysis_of_Classic_Cars_for_Restoration_and_Auction.ipynb',
  },
  {
    track: 2,
    image: '/images/project-bi.png',
    tags: ['Tableau', 'BI', 'Dashboards'],
    internalHref: '/dashboard',
  },
  {
    track: 2,
    image: '/images/project-ab.png',
    tags: ['Python', 'A/B Testing', 'SciPy', 'Statistics'],
    file: 'Checkout_A_B_Test_Analysis.ipynb',
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()

  const items = t.projects.items.map((item, i) => {
    const meta = projectMeta[i]
    const demoHref = meta.internalHref ?? `${NBVIEWER}/${meta.file}`
    const codeHref = meta.file ? `${REPO}/${meta.file}` : undefined
    return { ...item, ...meta, demoHref, codeHref }
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

        <div className="space-y-16">
          {t.projects.tracks.map((track, ti) => {
            const trackNumber = (ti + 1) as 1 | 2
            const trackItems = items.filter((p) => p.track === trackNumber)

            return (
              <div key={track.title}>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {track.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {track.description}
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  {trackItems.map((project) => {
                    const isInternal = Boolean(project.internalHref)
                    return (
                      <article
                        key={project.title}
                        className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
                      >
                        <div className="aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.image || '/placeholder.svg'}
                            alt={`Preview of the ${project.title} project`}
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <h4 className="text-pretty text-lg font-medium leading-snug tracking-tight text-foreground">
                            {project.title}
                          </h4>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {project.blurb}
                          </p>

                          <p className="mt-4 text-sm font-medium text-primary">
                            {project.metric}
                          </p>

                          <ul className="mt-4 flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <li
                                key={tag}
                                className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-4 text-sm">
                            {isInternal ? (
                              <Link
                                href={project.demoHref}
                                className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-primary"
                              >
                                {t.projects.viewDashboard}
                                <ArrowUpRight className="size-4" />
                              </Link>
                            ) : (
                              <>
                                <a
                                  href={project.demoHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-primary"
                                >
                                  {t.projects.viewNotebook}
                                  <ArrowUpRight className="size-4" />
                                </a>
                                {project.codeHref ? (
                                  <a
                                    href={project.codeHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                                  >
                                    <Code2 className="size-4" />
                                    {t.projects.code}
                                  </a>
                                ) : null}
                              </>
                            )}
                          </div>
                        </div>
                      </article>
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
