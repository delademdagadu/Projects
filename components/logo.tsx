/**
 * Brand logo (Concept 2): the "delademdagadu" serif wordmark with an
 * ascending trend line ending in a dot, echoing a data chart.
 *
 * Colors follow the theme: the wordmark uses the foreground color and the
 * trend line uses the primary accent, so it adapts to light and dark modes.
 * Scale it by setting a height class (e.g. `h-7 w-auto`).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 212 54"
      role="img"
      aria-label="delademdagadu"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="3"
        y="30"
        textLength="206"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight={500}
        className="fill-foreground"
      >
        delademdagadu
      </text>
      <polyline
        points="4,48 40,43 76,50 112,39 148,46 184,37 205,43"
        className="stroke-primary"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="205" cy="43" r="3.5" className="fill-primary" />
    </svg>
  )
}
