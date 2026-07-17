import type { Metadata } from "next"
import { DashboardSection } from "@/components/dashboard-section"

export const metadata: Metadata = {
  title: "Dashboard - Princess Deladem Dagadu",
}

export default function DashboardPage() {
  return <DashboardSection />
}
