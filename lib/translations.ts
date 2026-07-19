export type Language = 'en' | 'de'

type Project = {
  title: string
  blurb: string
  metric: string
  caption: string
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
    nav: {
      about: string
      work: string
      dashboard: string
      skills: string
      experience: string
      contact: string
    }
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
    trackLabel: string
    tracks: { title: string; description: string }[]
    items: Project[]
  }
  dashboard: {
    title: string
    subtitle: string
    description: string[]
    caption: string
    openFull: string
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
        dashboard: 'Dashboard',
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
        "I'm Princess, a data & marketing analyst turning data into decisions - across analytics, BI, and applied machine learning.",
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
        "I'm a data and marketing analyst who started out in marketing and grew into analytics - which means I care as much about the business question as the model behind the answer. I work end to end: pulling and cleaning data with SQL and Python, exploring it for patterns, and translating the results into dashboards and recommendations that non-technical stakeholders can act on.",
        "Based in Berlin, I'm currently completing a double MSc in Data Science, AI & Digital Business and International Business. My recent work spans customer segmentation, demand forecasting, sentiment analysis, and campaign performance - consistently focused on lifting ROI and making reporting faster and clearer.",
      ],
      highlights: [
        'Blends marketing strategy with hands-on data science',
        'Turns analysis into decisions leaders can act on',
        'Comfortable across the full lifecycle - SQL to dashboards to ML',
      ],
    },
    projects: {
      title: 'Selected work',
      subtitle:
        'A few projects that show how I move from a question to a shipped, measurable result.',
      viewNotebook: 'View notebook',
      code: 'Code',
      trackLabel: 'Track',
      tracks: [
        {
          title: 'Data science & ML',
          description:
            'General technical depth - modeling, engineering, evaluation.',
        },
        {
          title: 'Marketing & business analytics',
          description:
            'Applied work tied to business outcomes - conversion, ROI, decisions.',
        },
      ],
      items: [
        {
          title: 'Pneumonia Detection from Chest X-Rays',
          blurb:
            'Built and benchmarked 10 CNN configurations (EfficientNetB0 vs. ResNet50, varying augmentation, learning rate, batch size) for pneumonia classification from chest X-rays. The best model (ResNet50, flip+zoom augmentation) reached 71% test accuracy, 92% recall and 71% precision on the Pneumonia class, and a 0.84 ROC-AUC; strong enough as a triage-prioritization aid, not a standalone diagnostic tool.',
          metric: 'Medical imaging classification with a CNN',
          caption: 'CNN classification',
        },
        {
          title: 'What Are Customers Really Saying? Sentiment Classification at Scale',
          blurb:
            'Benchmarked four approaches - N-gram+TF-IDF+Logistic Regression, fine-tuned DistilBERT, SBERT+Logistic Regression (two variants) - for binary sentiment classification. Fine-tuned DistilBERT won, with F1 ≈ 0.911, accuracy ≈ 0.909, precision ≈ 0.894, recall ≈ 0.929, beating the N-gram baseline (F1 ≈ 0.888) and SBERT+LR (F1 ≈ 0.809).',
          metric: 'Text classification across NLP model variants',
          caption: 'NLP model comparison',
        },
        {
          title: 'Forecasting Daily Sales Revenue: An End-to-End ML Pipeline',
          blurb:
            'Built a regression pipeline to forecast daily sales revenue using lag features (1/7/30-day) and moving averages. Compared multiple models; tuned Lasso Regression (alpha=100) was the best performer, evaluated via MAE and RMSE. Designed for retail inventory planning, reducing over/understocking by improving demand forecasts.',
          metric: 'Regression forecasting from raw data to model',
          caption: 'Regression forecasting pipeline',
        },
        {
          title: 'Classic Car Performance & Efficiency Trends (1970s–80s)',
          blurb:
            'Analyzed a classic car dataset for a restoration and auction house client, answering five targeted business questions: most common cylinder count and its average MPG (4-cylinder, ~29.3 MPG), top manufacturers by horsepower (Chrysler and Cadillac lead - relevant for performance-buyer targeting), MPG distribution by country of origin, weight range by origin (Japan lightest and most consistent, USA widest range), and the year with the biggest MPG improvement.',
          metric: 'Insight-driven EDA for restoration & auction',
          caption: 'Exploratory data analysis',
        },
        {
          title: 'Understanding Fashion E-Commerce Shopper Behavior',
          blurb:
            "Explored a fashion retailer's shopper data to identify what drives purchase amount and repeat behavior: demographics, product category, subscription status, promo usage. Found weak linear correlation between age/past purchases and spend, but signs that subscribers cluster among higher-frequency repeat buyers, and that promo codes weren't moving average order value.",
          metric: 'Personalization for a fashion e-commerce platform',
          caption: 'Fashion e-commerce',
        },
        {
          title: 'Travel Booking Analytics Dashboard',
          blurb:
            'Built an interactive Tableau dashboard analyzing travel bookings across 19 destinations, covering revenue by destination, monthly booking trends, satisfaction by destination and channel, lead time distribution, trip type breakdown, and channel performance (cancellation rate vs. revenue by booking channel). Consolidates reporting that would otherwise require pulling multiple static views into a single filterable, self-service dashboard.',
          metric: 'Interactive BI for travel booking decisions',
          caption: 'Interactive Tableau BI',
        },
        {
          title: 'Checkout Flow A/B Test: Does a One-Page Checkout Convert Better?',
          blurb:
            'Designed and analyzed an A/B test methodology comparing a one-page checkout against a multi-step flow, using simulated session data (~21,000 sessions) to demonstrate the full experimental process from pre-test power analysis to significance testing. Ran a two-proportion z-test with Wilson confidence intervals and validated the effect held consistently across device segments (mobile, desktop, tablet). Result: a 25.1% relative lift in conversion (p = 0.0008), with the confidence intervals for both groups non-overlapping.',
          metric: '25.1% conversion lift, significant at p = 0.0008',
          caption: 'Full statistical analysis',
        },
      ],
    },
    dashboard: {
      title: 'Travel Booking Analytics Dashboard',
      subtitle:
        'Interactive BI dashboard on travel demand, revenue, and channel performance.',
      description: [
        'This interactive Tableau dashboard analyzes travel booking patterns, demand seasonality, revenue by destination, channel performance, and customer satisfaction, to show how raw booking data becomes a decision-ready reporting tool. It uses a dataset modeled on real travel-industry booking behavior.',
        'The dashboard surfaces booking seasonality (clear demand waves ahead of summer and December travel), highlights which channels drive revenue versus which carry higher cancellation risk, and flags where satisfaction dips by destination and channel - the kind of view that turns a stack of spreadsheets into a five-minute stakeholder briefing.',
      ],
      caption: 'Travel Booking Analytics · Built in Tableau',
      openFull: 'Open in Tableau Public',
    },
    skills: {
      title: 'Skills & tools',
      subtitle:
        'The stack I reach for across the full lifecycle - from exploration to production.',
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
          period: 'Oct 2025 - Present',
          role: 'Freelance Data Analyst',
          org: "Today's Travel Agency",
          detail:
            'Analyze data with SQL and Python to segment customers, build Tableau/Power BI dashboards, run A/B tests, and forecast demand - lifting ROI 20%+ and cutting reporting time 40%.',
        },
        {
          period: 'Mar 2024 - Oct 2024',
          role: 'Digital Marketing Intern',
          org: 'Insightful Metrics',
          detail:
            'Managed digital campaigns and analyzed performance (CTR, CPC, conversions) to optimize ROI, increasing engagement by 40%.',
        },
        {
          period: 'Sep 2022 - Feb 2024',
          role: 'Vice President, Marketing',
          org: 'DEGIS Göttingen',
          detail:
            'Led social media strategy and multi-channel campaigns, analyzing performance metrics to optimize communication - growing engagement 20%.',
        },
        {
          period: 'Jun 2014 - Aug 2014',
          role: 'Marketing Intern',
          org: 'GIHOC Distilleries Ltd.',
          detail:
            'Supported campaign execution and content development, and conducted market research for brand awareness initiatives.',
        },
      ],
      education: [
        {
          period: 'Jan 2025 - Present',
          role: 'Double MSc - Data Science, AI & Digital Business + International Business',
          org: 'GISMA University Berlin & Kingston University London',
          detail:
            'Focused on data science, AI, and digital business alongside international business strategy.',
        },
        {
          period: 'Apr 2022 - Oct 2023',
          role: 'MSc General Management',
          org: 'PFH Private University, Göttingen',
          detail:
            'Grade: 1.89. STIBET Scholarship for Extraordinary Social Engagement (2022, 2023).',
        },
        {
          period: 'Sep 2012 - May 2016',
          role: 'BSc Business Administration (Marketing)',
          org: 'University of Ghana, Legon',
          detail: 'Foundations in marketing, market research, and business analytics.',
        },
      ],
    },
    contact: {
      title: "Let's work together",
      body: "I'm open to data analyst, data science, and marketing analytics roles, plus freelance projects.",
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
        dashboard: 'Dashboard',
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
        'Ich bin Princess, eine Daten- & Marketing-Analystin, die aus Daten Entscheidungen macht - über Analytics, BI und angewandtes Machine Learning hinweg.',
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
        'Ich bin eine Daten- und Marketing-Analystin, die im Marketing begonnen und sich in die Analytik entwickelt hat - das heißt, mir ist die geschäftliche Fragestellung genauso wichtig wie das Modell hinter der Antwort. Ich arbeite End-to-End: Daten mit SQL und Python ziehen und bereinigen, sie auf Muster untersuchen und die Ergebnisse in Dashboards und Empfehlungen übersetzen, mit denen auch nicht-technische Stakeholder handeln können.',
        'In Berlin ansässig, schließe ich derzeit einen doppelten MSc in Data Science, AI & Digital Business sowie International Business ab. Meine jüngsten Arbeiten umfassen Kundensegmentierung, Nachfrageprognosen, Sentiment-Analyse und Kampagnen-Performance - stets mit Fokus darauf, den ROI zu steigern und Reporting schneller und klarer zu machen.',
      ],
      highlights: [
        'Verbindet Marketingstrategie mit praktischer Data Science',
        'Macht aus Analysen Entscheidungen, mit denen Führungskräfte handeln können',
        'Sicher über den gesamten Lebenszyklus - von SQL über Dashboards bis ML',
      ],
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle:
        'Einige Projekte, die zeigen, wie ich von einer Fragestellung zu einem umgesetzten, messbaren Ergebnis komme.',
      viewNotebook: 'Notebook ansehen',
      code: 'Code',
      trackLabel: 'Track',
      tracks: [
        {
          title: 'Data Science & ML',
          description:
            'Allgemeine technische Tiefe - Modellierung, Engineering, Evaluation.',
        },
        {
          title: 'Marketing- & Business-Analytics',
          description:
            'Angewandte Arbeit mit Bezug zu Geschäftsergebnissen - Conversion, ROI, Entscheidungen.',
        },
      ],
      items: [
        {
          title: 'Lungenentzündungs-Erkennung aus Röntgenbildern des Brustkorbs',
          blurb:
            '10 CNN-Konfigurationen (EfficientNetB0 vs. ResNet50, variierende Augmentierung, Lernrate, Batch-Größe) für die Lungenentzündungs-Klassifikation aus Röntgenbildern des Brustkorbs entwickelt und verglichen. Das beste Modell (ResNet50, Flip+Zoom-Augmentierung) erreichte 71 % Test-Genauigkeit, 92 % Recall und 71 % Precision auf der Pneumonie-Klasse sowie einen ROC-AUC von 0,84; stark genug als Triage-Priorisierungshilfe, nicht als eigenständiges Diagnosewerkzeug.',
          metric: 'Medizinische Bildklassifikation mit einem CNN',
          caption: 'CNN-Klassifikation',
        },
        {
          title: 'Was sagen Kundinnen und Kunden wirklich? Sentiment-Klassifikation im großen Maßstab',
          blurb:
            'Vier Ansätze verglichen - N-Gram+TF-IDF+Logistische Regression, feinabgestimmtes DistilBERT, SBERT+Logistische Regression (zwei Varianten) - für die binäre Sentiment-Klassifikation. Feinabgestimmtes DistilBERT gewann mit F1 ≈ 0,911, Genauigkeit ≈ 0,909, Precision ≈ 0,894, Recall ≈ 0,929 und schlug damit die N-Gram-Baseline (F1 ≈ 0,888) und SBERT+LR (F1 ≈ 0,809).',
          metric: 'Textklassifikation über mehrere NLP-Modellvarianten',
          caption: 'NLP-Modellvergleich',
        },
        {
          title: 'Prognose des täglichen Umsatzes: eine End-to-End-ML-Pipeline',
          blurb:
            'Eine Regressions-Pipeline zur Prognose des täglichen Umsatzes mit Lag-Features (1/7/30 Tage) und gleitenden Durchschnitten gebaut. Mehrere Modelle verglichen; die getunte Lasso-Regression (alpha=100) war das beste Modell, ausgewertet über MAE und RMSE. Konzipiert für die Bestandsplanung im Handel, um Über- und Unterbestände durch bessere Nachfrageprognosen zu reduzieren.',
          metric: 'Regressions-Prognose von Rohdaten bis Modell',
          caption: 'Regressions-Prognose-Pipeline',
        },
        {
          title: 'Leistungs- & Effizienztrends bei Oldtimern (1970er–80er)',
          blurb:
            'Einen Oldtimer-Datensatz für einen Restaurierungs- und Auktionshaus-Kunden analysiert und fünf gezielte Geschäftsfragen beantwortet: häufigste Zylinderzahl und deren durchschnittlicher Verbrauch (4 Zylinder, ~29,3 MPG), Top-Hersteller nach PS (Chrysler und Cadillac führen - relevant für die Ansprache leistungsorientierter Käufer), MPG-Verteilung nach Herkunftsland, Gewichtsspanne nach Herkunft (Japan am leichtesten und konstantesten, USA größte Spanne) und das Jahr mit der größten MPG-Verbesserung.',
          metric: 'Erkenntnisgetriebene EDA für Restaurierung & Auktion',
          caption: 'Explorative Datenanalyse',
        },
        {
          title: 'Das Einkaufsverhalten im Fashion-E-Commerce verstehen',
          blurb:
            'Die Shopper-Daten eines Modehändlers untersucht, um zu ermitteln, was Kaufbetrag und Wiederkaufverhalten treibt: Demografie, Produktkategorie, Abo-Status, Gutschein-Nutzung. Schwache lineare Korrelation zwischen Alter/früheren Käufen und Ausgaben gefunden, aber Hinweise darauf, dass Abonnenten sich unter den häufigeren Wiederkäufern gruppieren und dass Gutscheincodes den durchschnittlichen Bestellwert nicht bewegten.',
          metric: 'Personalisierung für eine Fashion-E-Commerce-Plattform',
          caption: 'Fashion-E-Commerce',
        },
        {
          title: 'Travel Booking Analytics Dashboard',
          blurb:
            'Ein interaktives Tableau-Dashboard gebaut, das Reisebuchungen über 19 Reiseziele analysiert: Umsatz nach Reiseziel, monatliche Buchungstrends, Zufriedenheit nach Reiseziel und Kanal, Vorlaufzeit-Verteilung, Reisetyp-Aufschlüsselung und Kanal-Performance (Stornoquote vs. Umsatz nach Buchungskanal). Bündelt Reporting, das sonst mehrere statische Ansichten erfordern würde, in einem einzigen filterbaren Self-Service-Dashboard.',
          metric: 'Interaktives BI für Reisebuchungs-Entscheidungen',
          caption: 'Interaktives Tableau-BI',
        },
        {
          title: 'Checkout-Flow-A/B-Test: Konvertiert ein einseitiger Checkout besser?',
          blurb:
            'Eine A/B-Test-Methodik konzipiert und ausgewertet, die einen einseitigen Checkout mit einem mehrstufigen Flow vergleicht, mit simulierten Sitzungsdaten (~21.000 Sitzungen), um den vollständigen experimentellen Prozess von der Power-Analyse vorab bis zur Signifikanzprüfung zu demonstrieren. Einen Zwei-Stichproben-z-Test mit Wilson-Konfidenzintervallen durchgeführt und validiert, dass der Effekt über Geräte-Segmente (Mobil, Desktop, Tablet) konsistent blieb. Ergebnis: 25,1 % relative Conversion-Steigerung (p = 0,0008), wobei die Konfidenzintervalle beider Gruppen nicht überlappen.',
          metric: '25,1 % Conversion-Steigerung, signifikant bei p = 0,0008',
          caption: 'Vollständige statistische Analyse',
        },
      ],
    },
    dashboard: {
      title: 'Travel Booking Analytics Dashboard',
      subtitle:
        'Interaktives BI-Dashboard zu Reisenachfrage, Umsatz und Kanal-Performance.',
      description: [
        'Dieses interaktive Tableau-Dashboard analysiert Reisebuchungsmuster, saisonale Nachfrage, Umsatz nach Reiseziel, Kanal-Performance und Kundenzufriedenheit und zeigt, wie aus Rohdaten von Buchungen ein entscheidungsreifes Reporting-Tool wird. Es verwendet einen Datensatz, der am realen Buchungsverhalten der Reisebranche modelliert ist.',
        'Das Dashboard macht die saisonale Nachfrage sichtbar (deutliche Nachfragewellen vor den Sommer- und Dezemberreisen), zeigt, welche Kanäle den Umsatz treiben und welche ein höheres Stornorisiko tragen, und markiert, wo die Zufriedenheit je nach Reiseziel und Kanal sinkt - die Art von Überblick, die aus einem Stapel Tabellen ein fünfminütiges Stakeholder-Briefing macht.',
      ],
      caption: 'Travel Booking Analytics · Erstellt in Tableau',
      openFull: 'In Tableau Public öffnen',
    },
    skills: {
      title: 'Fähigkeiten & Tools',
      subtitle:
        'Die Werkzeuge, zu denen ich über den gesamten Lebenszyklus greife - von der Exploration bis zur Produktion.',
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
          period: 'Okt. 2025 - heute',
          role: 'Freiberufliche Datenanalystin',
          org: "Today's Travel Agency",
          detail:
            'Analysiere Daten mit SQL und Python zur Kundensegmentierung, erstelle Tableau-/Power-BI-Dashboards, führe A/B-Tests durch und prognostiziere Nachfrage - mit einer ROI-Steigerung von über 20% und 40% weniger Reporting-Aufwand.',
        },
        {
          period: 'März 2024 - Okt. 2024',
          role: 'Praktikantin Digital Marketing',
          org: 'Insightful Metrics',
          detail:
            'Digitale Kampagnen betreut und die Performance (CTR, CPC, Conversions) analysiert, um den ROI zu optimieren und das Engagement um 40% zu steigern.',
        },
        {
          period: 'Sep. 2022 - Feb. 2024',
          role: 'Vizepräsidentin, Marketing',
          org: 'DEGIS Göttingen',
          detail:
            'Social-Media-Strategie und Multi-Channel-Kampagnen geleitet und Performance-Kennzahlen analysiert, um die Kommunikation zu optimieren - mit 20% mehr Engagement.',
        },
        {
          period: 'Juni 2014 - Aug. 2014',
          role: 'Praktikantin Marketing',
          org: 'GIHOC Distilleries Ltd.',
          detail:
            'Kampagnenumsetzung und Content-Entwicklung unterstützt sowie Marktforschung für Maßnahmen zur Markenbekanntheit durchgeführt.',
        },
      ],
      education: [
        {
          period: 'Jan. 2025 - heute',
          role: 'Doppel-MSc - Data Science, AI & Digital Business + International Business',
          org: 'GISMA University Berlin & Kingston University London',
          detail:
            'Schwerpunkt auf Data Science, KI und Digital Business sowie internationaler Unternehmensstrategie.',
        },
        {
          period: 'Apr. 2022 - Okt. 2023',
          role: 'MSc General Management',
          org: 'PFH Private Hochschule, Göttingen',
          detail:
            'Note: 1,89. STIBET-Stipendium für außergewöhnliches soziales Engagement (2022, 2023).',
        },
        {
          period: 'Sep. 2012 - Mai 2016',
          role: 'BSc Betriebswirtschaftslehre (Marketing)',
          org: 'University of Ghana, Legon',
          detail: 'Grundlagen in Marketing, Marktforschung und Business Analytics.',
        },
      ],
    },
    contact: {
      title: 'Lassen Sie uns zusammenarbeiten',
      body: 'Ich bin offen für Positionen als Datenanalystin, Data Scientist und im Marketing-Analytics sowie für freiberufliche Projekte.',
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
