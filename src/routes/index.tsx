import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '../components/ui/HeroSection'
import { Grid } from '../components/markdoc/Grid'
import { Card } from '../components/markdoc/Card'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="prose max-w-none">
      <div className="w-full h-96">
      <HeroSection />
      </div>
      <div className="mt-12 px-10">
        <h2 className="text-3xl font-bold text-center mb-8">Documentation</h2>
        <Grid cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            variant="home"
            title="Authentication"
            description="This specification describes the authentication methods for the Wealthcome ecosystem."
            href="/docs/authentication/introduction"
            icon="User"
          />
          <Card
            variant="home"
            title="Financial Provider Specification"
            description="This specification describes what a financial provider must comply with to offer its clients (wealth management companies) an integration of their data into a wealth aggregator (Wealthcome)."
            href="/docs/financial-provider-specification/introduction"
            icon="TrendingUp"
          />
          <Card
            variant="home"
            title="Aggregated API"
            description="This specification describes the Aggregated API for managing companies, customers, teams, entities, references, managers, assets, and parent companies in the Wealthcome ecosystem."
            href="/docs/aggregated-api/introduction"
            icon="Database"
          />
        </Grid>
      </div>
    </div>
  )
}