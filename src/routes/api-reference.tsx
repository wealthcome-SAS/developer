import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useEnv } from "../lib/env";

export const Route = createFileRoute("/api-reference")({
	component: ApiReferencePage,
});

function ApiReferencePage() {
	const { config } = useEnv();
	const swaggerUrl = `${config.swaggerBaseUrl}/docs`;

	return (
		<div className="max-w-none mx-8 mb-8 p-8 bg-white rounded-lg">
			<div className="mb-6">
				<h1 className="text-2xl font-bold mb-2">API Reference</h1>
				<p className="text-gray-600 mb-4">
					Explore the Wealthcome Aggregated API interactively. Use the
					environment switcher in the top-right corner to switch between
					production and preproduction.
				</p>
				<a
					href={swaggerUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
				>
					Open in a new tab
					<ExternalLink className="w-4 h-4" />
				</a>
			</div>

			<div className="border border-gray-200 rounded-lg overflow-hidden">
				<iframe
					key={swaggerUrl}
					src={swaggerUrl}
					title="API Reference"
					className="w-full h-[80vh]"
					sandbox="allow-same-origin allow-scripts allow-popups"
				/>
			</div>
		</div>
	);
}
