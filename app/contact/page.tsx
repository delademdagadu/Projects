import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact - Princess Deladem Dagadu",
}

export default function ContactPage() {
  return <ContactSection />
}
