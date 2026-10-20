import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function App() {
  return (
    <div className="p-8">
      <Card className="max-w-sm">
        <CardHeader><CardTitle>It works</CardTitle></CardHeader>
        <CardContent>Tailwind and shadcn are set up.</CardContent>
      </Card>
    </div>
  )
}