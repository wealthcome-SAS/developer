import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { EnvProvider } from "./lib/env";
import { LocaleProvider } from "./lib/i18n";
import { Buffer } from "buffer";

// Polyfill pour Buffer (nécessaire pour gray-matter)
declare global {
	interface Window {
		Buffer: typeof Buffer;
	}
}
window.Buffer = Buffer;

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LocaleProvider>
			<EnvProvider>
				<RouterProvider router={router} />
			</EnvProvider>
		</LocaleProvider>
	</React.StrictMode>,
);
