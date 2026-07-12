'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const VIZ_URL =
  'https://public.tableau.com/views/TravelBookingAnalytics/Dashboard1'
const EMBED_SCRIPT =
  'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'

export function DashboardSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load the Tableau Embedding API v3 script once.
    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = EMBED_SCRIPT
      document.body.appendChild(script)
    }

    // Mount the <tableau-viz> web component into the container.
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ''
    const viz = document.createElement('tableau-viz')
    viz.setAttribute('src', VIZ_URL)
    viz.setAttribute('toolbar', 'bottom')
    viz.setAttribute('hide-tabs', '')
    viz.style.width = '100%'
    container.appendChild(viz)
  }, [])

  return (
    <section id="dashboard" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-foreground">
              {t.dashboard.title}
            </h2>
            <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {t.dashboard.subtitle}
            </p>
          </div>
          <a
            href={VIZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary sm:inline-flex"
          >
            {t.dashboard.openFull}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div
            ref={containerRef}
            className="min-h-[600px] w-full"
            aria-label={t.dashboard.caption}
          />
          <p className="border-t border-border/60 px-6 py-3 text-xs text-muted-foreground">
            {t.dashboard.caption}
          </p>
        </div>

        <a
          href={VIZ_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary sm:hidden"
        >
          {t.dashboard.openFull}
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
