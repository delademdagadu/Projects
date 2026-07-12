type TimelineItem = {
  period: string
  role: string
  org: string
  detail: string
}

const experience: TimelineItem[] = [
  {
    period: 'Oct 2025 — Present',
    role: 'Freelance Data Analyst',
    org: "Today's Travel Agency",
    detail:
      'Analyze data with SQL and Python to segment customers, build Tableau/Power BI dashboards, run A/B tests, and forecast demand — lifting ROI 20%+ and cutting reporting time 40%.',
  },
  {
    period: 'Mar 2024 — Oct 2024',
    role: 'Digital Marketing Intern',
    org: 'Insightful Metrics',
    detail:
      'Managed digital campaigns and analyzed performance (CTR, CPC, conversions) to optimize ROI, increasing engagement by 40%.',
  },
  {
    period: 'Sep 2022 — Feb 2024',
    role: 'Vice President, Marketing',
    org: 'DEGIS Göttingen',
    detail:
      'Led social media strategy and multi-channel campaigns, analyzing performance metrics to optimize communication — growing engagement 20%.',
  },
  {
    period: 'Jun 2014 — Aug 2014',
    role: 'Marketing Intern',
    org: 'GIHOC Distilleries Ltd.',
    detail:
      'Supported campaign execution and content development, and conducted market research for brand awareness initiatives.',
  },
]

const education: TimelineItem[] = [
  {
    period: 'Jan 2025 — Present',
    role: 'Double MSc — Data Science, AI & Digital Business + International Business',
    org: 'GISMA University Berlin & Kingston University London',
    detail:
      'Focused on data science, AI, and digital business alongside international business strategy.',
  },
  {
    period: 'Apr 2022 — Oct 2023',
    role: 'MSc General Management',
    org: 'PFH Private University, Göttingen',
    detail: 'Grade: 1.89. STIBET Scholarship for Extraordinary Social Engagement (2022, 2023).',
  },
  {
    period: 'Sep 2012 — May 2016',
    role: 'BSc Business Administration (Marketing)',
    org: 'University of Ghana, Legon',
    detail:
      'Foundations in marketing, market research, and business analytics.',
  },
]

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
  return (
    <section id="experience" className="border-b border-border/60">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-8 text-2xl font-medium tracking-tight text-foreground">
            Experience
          </h2>
          <Timeline items={experience} />
        </div>
        <div>
          <h2 className="mb-8 text-2xl font-medium tracking-tight text-foreground">
            Education
          </h2>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  )
}
