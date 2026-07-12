import { ArrowUpRight } from 'lucide-react'

const stats = [
  { value: '20%+', label: 'Campaign ROI lift' },
  { value: '40%', label: 'Faster reporting' },
  { value: '15–25%', label: 'Conversion uplift' },
]

export function HeroSection() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="mb-6 text-sm text-muted-foreground">
          {'Berlin, Germany · Open to opportunities'}
        </p>
        <h1 className="max-w-3xl text-pretty text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.15]">
          {"I'm Princess, a data & marketing analyst turning data into decisions — across analytics, BI, and applied machine learning."}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          I help teams move from raw numbers to clear answers: building BI
          dashboards stakeholders actually use, running rigorous A/B tests, and
          applying ML and NLP to lift ROI and guide strategy. Currently pursuing
          a double MSc in Data Science, AI &amp; Digital Business and
          International Business.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View selected work
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 sm:max-w-md">
          {stats.map((stat) => (
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
