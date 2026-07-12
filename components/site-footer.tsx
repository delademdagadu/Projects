'use client'

import { useLanguage } from '@/components/language-provider'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        <a
          href="#top"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
