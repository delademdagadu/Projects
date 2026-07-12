const skillGroups = [
  {
    title: 'Data & Analytics',
    items: ['Python', 'Pandas', 'NumPy', 'SQL', 'EDA', 'Statistical Analysis'],
  },
  {
    title: 'Visualization & BI',
    items: ['Tableau', 'Power BI', 'Looker Studio', 'Excel', 'Dashboards'],
  },
  {
    title: 'Machine Learning',
    items: [
      'scikit-learn',
      'Regression',
      'Clustering',
      'Time Series',
      'NLP',
      'A/B Testing',
    ],
  },
  {
    title: 'Marketing Analytics',
    items: ['Google Analytics (GA4)', 'SEO/SEM', 'Google Ads', 'KPI Reporting'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'BigQuery', 'Jupyter', 'NLTK'],
  },
  {
    title: 'Languages',
    items: ['English (Native)', 'German (B2)', 'French (B2)'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          Skills &amp; tools
        </h2>
        <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          The stack I reach for across the full lifecycle — from exploration to
          production.
        </p>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
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
