import { useCalls } from "@/hooks/useCalls"
import KpiCards from "@/components/KpiCards"
import DurationAnalytics from "@/components/DurationAnalytics"
import CostAnalytics from "@/components/CostAnalytics"
import CallTimeline from "@/components/CallTimeline"
import CallsByCity from "@/components/CallsByCity"
import CallTable from "@/components/CallTable"

export default function App() {
  const { calls, loading, error } = useCalls()

  if (loading) return <p className="p-8">Loading call data…</p>
  if (error) return <p className="p-8 text-red-600">Failed to load data: {error}</p>

  return (
    <main className="min-h-screen bg-muted/40">
      <div className="mx-auto max-w-7xl space-y-6 p-6">
        <header>
          <h1 className="text-3xl font-bold">Call Analytics Dashboard</h1>
          <p className="text-muted-foreground">Call Data Records overview</p>
        </header>
        <KpiCards calls={calls} />
        <div className="grid gap-6 lg:grid-cols-2">
          <DurationAnalytics calls={calls} />
          <CostAnalytics calls={calls} />
          <CallTimeline calls={calls} />
          <CallsByCity calls={calls} />
        </div>
        <CallTable calls={calls} />
      </div>
    </main>
  )
}