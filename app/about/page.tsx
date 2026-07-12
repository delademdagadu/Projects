import type { Metadata } from "next"
import { AboutSection } from "@/components/about-section"

export const metadata: Metadata = {
  title: "About — Princess Deladem Dagadu",
}

export default function AboutPage() {
  return <AboutSection />
}
