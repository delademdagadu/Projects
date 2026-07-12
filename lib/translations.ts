export type Language = 'en' | 'de'

type Project = {
  title: string
  blurb: string
  metric: string
}

type TimelineItem = {
  period: string
  role: string
  org: string
  detail: string
}

export type Dictionary = {
  header: {
    role: string
    nav: { about: string; work: string; skills: string; experience: string; contact: string }
    cv: string
    langLabel: string
    themeToDark: string
    themeToLight: string
  }
  hero: {
    eyebrow: string
    heading: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
    stats: { value: string; label: string }[]
  }
  about: {
    title: string
    paragraphs: string[]
    highlights: string[]
  }
  projects: {
    title: string
    subtitle: string
    viewNotebook: string
    code: string
    items: Project[]
  }
  skills: {
    title: string
    subtitle: string
    groups: { title: string; items: string[] }[]
  }
  experienceSection: {
    experienceTitle: string
    educationTitle: string
    experience: TimelineItem[]
    education: TimelineItem[]
  }
  contact: {
    title: string
    body: string
    emailLabel: string
    downloadCv: string
    cvEnglish: string
    cvGerman: string
    formName: string
    formNamePlaceholder: string
    formEmail: string
    formEmailPlaceholder: string
    formMessage: string
    formMessagePlaceholder: string
    formSubmit: string
  }
  footer: {
    rights: string
    backToTop: string
  }
}

export const translations: Record<Language, Dictionary> = {
  en: {
    header: {
      role: 'Data & Marketing Analyst',
      nav: {
        about: 'About',
        work: 'Work',
        skills: 'Skills',
        experience: 'Experience',
        contact: 'Contact',
      },
    cv: 'CV',
    langLabel: 'Language',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    },
    hero: {
      eyebrow: 'Berlin, Germany · Open to opportunities',
      heading:
        "I'm Princess, a data & marketing analyst turning data into decisions — across analytics, BI, and applied machine learning.",
      body: 'I help teams move from raw numbers to clear answers: building BI dashboards stakeholders actually use, running rigorous A/B tests, and applying ML and NLP to lift ROI and guide strategy. Currently pursuing a double MSc in Data Science, AI & Digital Business and International Business.',
      ctaPrimary: 'View selected work',
      ctaSecondary: 'Get in touch',
      stats: [
        { value: '20%+', label: 'Campaign ROI lift' },
        { value: '40%', label: 'Faster reporting' },
        { value: '15–25%', label: 'Conversion uplift' },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        "I'm a data and marketing analyst who started out in marketing and grew into analytics — which means I care as much about the business question as the model behind the answer. I work end to end: pulling and cleaning data with SQL and Python, exploring it for patterns, and translating the results into dashboards and recommendations that non-technical stakeholders can act on.",
        "Based in Berlin, I'm currently completing a double MSc in Data Science, AI & Digital Business and International Business. My recent work spans customer segmentation, demand forecasting, sentiment analysis, and campaign performance — consistently focused on lifting ROI and making reporting faster and clearer.",
      ],
      highlights: [
        'Blends marketing strategy with hands-on data science',
        'Turns analysis into decisions leaders can act on',
        'Comfortable across the full lifecycle — SQL to dashboards to ML',
      ],
    },
    projects: {
      title: 'Selected work',
      subtitle:
        'A few projects that show how I move from a question to a shipped, measurable result.',
      viewNotebook: 'View notebook',
      code: 'Code',
      items: [
        {
          title: 'Deep Learning Pipeline for Pneumonia Detection',
          blurb:
            'Built an end-to-end convolutional neural network pipeline to classify chest X-rays, from image preprocessing and augmentation through model training and evaluation.',
          metric: 'Medical imaging classification with a CNN',
        },
        {
          title: 'Binary Sentiment Analysis using NLP Models',
          blurb:
            'Cleaned and vectorized text data, then trained and compared NLP models to classify sentiment as positive or negative.',
          metric: 'Text classification across NLP model variants',
        },
        {
          title: 'Customer Behavior Analysis & Personalization',
          blurb:
            'Explored customer behavior for a fashion e-commerce platform and built a personalization approach to surface relevant products.',
          metric: 'Personalization for a fashion e-commerce platform',
        },
        {
          title: 'End-to-End Machine Learning Pipeline',
          blurb:
            'Assembled a complete ML workflow — data cleaning, feature engineering, model training, and evaluation — into a single reproducible pipeline.',
          metric: 'Reproducible workflow from raw data to model',
        },
        {
          title: 'Exploratory Data Analysis: Classic Cars',
          blurb:
            'Analyzed a classic-car dataset for restoration and auction insights, using visualization and correlation analysis to surface value drivers.',
          metric: 'Insight-driven EDA for restoration & auction',
        },
      ],
    },
    skills: {
      title: 'Skills & tools',
      subtitle:
        'The stack I reach for across the full lifecycle — from exploration to production.',
      groups: [
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
          items: ['scikit-learn', 'Regression', 'Clustering', 'Time Series', 'NLP', 'A/B Testing'],
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
      ],
    },
    experienceSection: {
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      experience: [
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
      ],
      education: [
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
          detail:
            'Grade: 1.89. STIBET Scholarship for Extraordinary Social Engagement (2022, 2023).',
        },
        {
          period: 'Sep 2012 — May 2016',
          role: 'BSc Business Administration (Marketing)',
          org: 'University of Ghana, Legon',
          detail: 'Foundations in marketing, market research, and business analytics.',
        },
      ],
    },
    contact: {
      title: "Let's work together",
      body: "I'm open to data analyst, data science, and marketing analytics roles, plus freelance projects. Based in Berlin — the fastest way to reach me is email.",
      emailLabel: 'Email',
      downloadCv: 'Download CV',
      cvEnglish: 'English (PDF)',
      cvGerman: 'Deutsch (PDF)',
      formName: 'Name',
      formNamePlaceholder: 'Your name',
      formEmail: 'Email',
      formEmailPlaceholder: 'you@company.com',
      formMessage: 'Message',
      formMessagePlaceholder: 'Tell me a bit about the role or project…',
      formSubmit: 'Send message',
    },
    footer: {
      rights: 'Princess Deladem Dagadu. Berlin, Germany.',
      backToTop: 'Back to top ↑',
    },
  },
  de: {
    header: {
      role: 'Daten- & Marketing-Analystin',
      nav: {
        about: 'Über mich',
        work: 'Projekte',
        skills: 'Fähigkeiten',
        experience: 'Werdegang',
        contact: 'Kontakt',
      },
    cv: 'Lebenslauf',
    langLabel: 'Sprache',
    themeToDark: 'Zum Dunkelmodus wechseln',
    themeToLight: 'Zum Hellmodus wechseln',
    },
    hero: {
      eyebrow: 'Berlin, Deutschland · Offen für neue Möglichkeiten',
      heading:
        'Ich bin Princess, eine Daten- & Marketing-Analystin, die aus Daten Entscheidungen macht — über Analytics, BI und angewandtes Machine Learning hinweg.',
      body: 'Ich helfe Teams, von reinen Zahlen zu klaren Antworten zu kommen: BI-Dashboards, die Stakeholder wirklich nutzen, fundierte A/B-Tests und der Einsatz von ML und NLP, um den ROI zu steigern und die Strategie zu leiten. Aktuell absolviere ich einen doppelten MSc in Data Science, AI & Digital Business sowie International Business.',
      ctaPrimary: 'Ausgewählte Projekte',
      ctaSecondary: 'Kontakt aufnehmen',
      stats: [
        { value: '20%+', label: 'Höherer Kampagnen-ROI' },
        { value: '40%', label: 'Schnelleres Reporting' },
        { value: '15–25%', label: 'Höhere Conversion' },
      ],
    },
    about: {
      title: 'Über mich',
      paragraphs: [
        'Ich bin eine Daten- und Marketing-Analystin, die im Marketing begonnen und sich in die Analytik entwickelt hat — das heißt, mir ist die geschäftliche Fragestellung genauso wichtig wie das Modell hinter der Antwort. Ich arbeite End-to-End: Daten mit SQL und Python ziehen und bereinigen, sie auf Muster untersuchen und die Ergebnisse in Dashboards und Empfehlungen übersetzen, mit denen auch nicht-technische Stakeholder handeln können.',
        'In Berlin ansässig, schließe ich derzeit einen doppelten MSc in Data Science, AI & Digital Business sowie International Business ab. Meine jüngsten Arbeiten umfassen Kundensegmentierung, Nachfrageprognosen, Sentiment-Analyse und Kampagnen-Performance — stets mit Fokus darauf, den ROI zu steigern und Reporting schneller und klarer zu machen.',
      ],
      highlights: [
        'Verbindet Marketingstrategie mit praktischer Data Science',
        'Macht aus Analysen Entscheidungen, mit denen Führungskräfte handeln können',
        'Sicher über den gesamten Lebenszyklus — von SQL über Dashboards bis ML',
      ],
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle:
        'Einige Projekte, die zeigen, wie ich von einer Fragestellung zu einem umgesetzten, messbaren Ergebnis komme.',
      viewNotebook: 'Notebook ansehen',
      code: 'Code',
      items: [
        {
          title: 'Deep-Learning-Pipeline zur Lungenentzündungs-Erkennung',
          blurb:
            'Eine End-to-End-Pipeline mit einem Convolutional Neural Network zur Klassifikation von Röntgenbildern des Brustkorbs — von der Bildvorverarbeitung und Augmentierung über das Modelltraining bis zur Auswertung.',
          metric: 'Medizinische Bildklassifikation mit einem CNN',
        },
        {
          title: 'Binäre Sentiment-Analyse mit NLP-Modellen',
          blurb:
            'Textdaten bereinigt und vektorisiert, dann NLP-Modelle trainiert und verglichen, um Sentiment als positiv oder negativ zu klassifizieren.',
          metric: 'Textklassifikation über mehrere NLP-Modellvarianten',
        },
        {
          title: 'Kundenverhaltensanalyse & Personalisierung',
          blurb:
            'Kundenverhalten für eine Fashion-E-Commerce-Plattform untersucht und einen Personalisierungsansatz entwickelt, um relevante Produkte hervorzuheben.',
          metric: 'Personalisierung für eine Fashion-E-Commerce-Plattform',
        },
        {
          title: 'End-to-End-Machine-Learning-Pipeline',
          blurb:
            'Einen vollständigen ML-Workflow — Datenbereinigung, Feature Engineering, Modelltraining und Auswertung — in einer einzigen reproduzierbaren Pipeline zusammengeführt.',
          metric: 'Reproduzierbarer Workflow von Rohdaten bis Modell',
        },
        {
          title: 'Explorative Datenanalyse: Oldtimer',
          blurb:
            'Einen Oldtimer-Datensatz für Restaurierungs- und Auktionseinblicke analysiert und mit Visualisierung und Korrelationsanalyse die Werttreiber herausgearbeitet.',
          metric: 'Erkenntnisgetriebene EDA für Restaurierung & Auktion',
        },
      ],
    },
    skills: {
      title: 'Fähigkeiten & Tools',
      subtitle:
        'Die Werkzeuge, zu denen ich über den gesamten Lebenszyklus greife — von der Exploration bis zur Produktion.',
      groups: [
        {
          title: 'Daten & Analytics',
          items: ['Python', 'Pandas', 'NumPy', 'SQL', 'EDA', 'Statistische Analyse'],
        },
        {
          title: 'Visualisierung & BI',
          items: ['Tableau', 'Power BI', 'Looker Studio', 'Excel', 'Dashboards'],
        },
        {
          title: 'Machine Learning',
          items: ['scikit-learn', 'Regression', 'Clustering', 'Zeitreihen', 'NLP', 'A/B-Tests'],
        },
        {
          title: 'Marketing-Analytics',
          items: ['Google Analytics (GA4)', 'SEO/SEM', 'Google Ads', 'KPI-Reporting'],
        },
        {
          title: 'Tools & Plattformen',
          items: ['Git', 'BigQuery', 'Jupyter', 'NLTK'],
        },
        {
          title: 'Sprachen',
          items: ['Englisch (Muttersprache)', 'Deutsch (B2)', 'Französisch (B2)'],
        },
      ],
    },
    experienceSection: {
      experienceTitle: 'Werdegang',
      educationTitle: 'Ausbildung',
      experience: [
        {
          period: 'Okt. 2025 — heute',
          role: 'Freiberufliche Datenanalystin',
          org: "Today's Travel Agency",
          detail:
            'Analysiere Daten mit SQL und Python zur Kundensegmentierung, erstelle Tableau-/Power-BI-Dashboards, führe A/B-Tests durch und prognostiziere Nachfrage — mit einer ROI-Steigerung von über 20% und 40% weniger Reporting-Aufwand.',
        },
        {
          period: 'März 2024 — Okt. 2024',
          role: 'Praktikantin Digital Marketing',
          org: 'Insightful Metrics',
          detail:
            'Digitale Kampagnen betreut und die Performance (CTR, CPC, Conversions) analysiert, um den ROI zu optimieren und das Engagement um 40% zu steigern.',
        },
        {
          period: 'Sep. 2022 — Feb. 2024',
          role: 'Vizepräsidentin, Marketing',
          org: 'DEGIS Göttingen',
          detail:
            'Social-Media-Strategie und Multi-Channel-Kampagnen geleitet und Performance-Kennzahlen analysiert, um die Kommunikation zu optimieren — mit 20% mehr Engagement.',
        },
        {
          period: 'Juni 2014 — Aug. 2014',
          role: 'Praktikantin Marketing',
          org: 'GIHOC Distilleries Ltd.',
          detail:
            'Kampagnenumsetzung und Content-Entwicklung unterstützt sowie Marktforschung für Maßnahmen zur Markenbekanntheit durchgeführt.',
        },
      ],
      education: [
        {
          period: 'Jan. 2025 — heute',
          role: 'Doppel-MSc — Data Science, AI & Digital Business + International Business',
          org: 'GISMA University Berlin & Kingston University London',
          detail:
            'Schwerpunkt auf Data Science, KI und Digital Business sowie internationaler Unternehmensstrategie.',
        },
        {
          period: 'Apr. 2022 — Okt. 2023',
          role: 'MSc General Management',
          org: 'PFH Private Hochschule, Göttingen',
          detail:
            'Note: 1,89. STIBET-Stipendium für außergewöhnliches soziales Engagement (2022, 2023).',
        },
        {
          period: 'Sep. 2012 — Mai 2016',
          role: 'BSc Betriebswirtschaftslehre (Marketing)',
          org: 'University of Ghana, Legon',
          detail: 'Grundlagen in Marketing, Marktforschung und Business Analytics.',
        },
      ],
    },
    contact: {
      title: 'Lassen Sie uns zusammenarbeiten',
      body: 'Ich bin offen für Positionen als Datenanalystin, Data Scientist und im Marketing-Analytics sowie für freiberufliche Projekte. In Berlin ansässig — am schnellsten erreichen Sie mich per E-Mail.',
      emailLabel: 'E-Mail',
      downloadCv: 'Lebenslauf herunterladen',
      cvEnglish: 'Englisch (PDF)',
      cvGerman: 'Deutsch (PDF)',
      formName: 'Name',
      formNamePlaceholder: 'Ihr Name',
      formEmail: 'E-Mail',
      formEmailPlaceholder: 'sie@unternehmen.de',
      formMessage: 'Nachricht',
      formMessagePlaceholder: 'Erzählen Sie mir kurz von der Stelle oder dem Projekt…',
      formSubmit: 'Nachricht senden',
    },
    footer: {
      rights: 'Princess Deladem Dagadu. Berlin, Deutschland.',
      backToTop: 'Nach oben ↑',
    },
  },
}
