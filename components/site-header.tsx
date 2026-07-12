'use client'

import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { useTheme } from '@/components/theme-provider'
import type { Language } from '@/lib/translations'

const CV_HREF: Record<Language, string> = {
  en: '/princess-dagadu-cv-en.pdf',
  de: '/princess-dagadu-lebenslauf-de.pdf',
}

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const nav = [
    { label: t.header.nav.about, href: '#about' },
    { label: t.header.nav.work, href: '#work' },
    { label: t.header.nav.dashboard, href: '#dashboard' },
    { label: t.header.nav.skills, href: '#skills' },
    { label: t.header.nav.experience, href: '#experience' },
    { label: t.header.nav.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/deladem-logo.png"
            alt="Deladem Dagadu logo"
            className="h-11 w-auto rounded-lg"
          />
          <span className="sr-only">Princess Deladem Dagadu</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {t.header.role}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={t.header.langLabel}
            className="flex items-center rounded-md border border-border p-0.5"
          >
            {(['en', 'de'] as Language[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-[5px] px-2 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
                  lang === code
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <a
            href={CV_HREF[lang]}
            download
            className="rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.header.cv}
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? t.header.themeToLight
                : t.header.themeToDark
            }
            title={
              theme === 'dark'
                ? t.header.themeToLight
                : t.header.themeToDark
            }
            className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {theme === 'dark' ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
