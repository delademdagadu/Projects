const highlights = [
  'Blends marketing strategy with hands-on data science',
  'Turns analysis into decisions leaders can act on',
  'Comfortable across the full lifecycle — SQL to dashboards to ML',
]

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          About
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div className="space-y-5 md:col-span-2">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I&apos;m a data and marketing analyst who started out in marketing
              and grew into analytics — which means I care as much about the
              business question as the model behind the answer. I work end to
              end: pulling and cleaning data with SQL and Python, exploring it
              for patterns, and translating the results into dashboards and
              recommendations that non-technical stakeholders can act on.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Based in Berlin, I&apos;m currently completing a double MSc in Data
              Science, AI &amp; Digital Business and International Business. My
              recent work spans customer segmentation, demand forecasting,
              sentiment analysis, and campaign performance — consistently
              focused on lifting ROI and making reporting faster and clearer.
            </p>
          </div>
          <ul className="space-y-4">
            {highlights.map((item) => (
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
