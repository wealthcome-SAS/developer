import { createFileRoute } from "@tanstack/react-router";
import { Card } from "../components/markdoc/Card";
import { Grid } from "../components/markdoc/Grid";
import HeroSection from "../components/ui/HeroSection";

export const Route = createFileRoute("/")({
	component: Home,
});

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
						title="Getting Started"
						description="Get up and running with the Wealthcome APIs: obtain a token, list your companies, and explore your data."
						href="/docs/guides/first-steps"
						icon="Building"
					/>
					<Card
						variant="home"
						title="Authentication"
						description="Learn how to authenticate your application and retrieve an access token to call the Wealthcome APIs."
						href="/docs/authentication/introduction"
						icon="User"
					/>
					<Card
						variant="home"
						title="Guides"
						description="Practical guides covering token retrieval, company and contract listing, customer updates, pagination, and error handling."
						href="/docs/guides/get-token"
						icon="FileText"
					/>
				</Grid>
			</div>
		</div>
	);
}
