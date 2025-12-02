import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [TanStackRouterVite(), react(), tailwindcss()],
	assetsInclude: ["**/*.md"],
	resolve: {
		alias: {
			buffer: "buffer/",
		},
	},
	optimizeDeps: {
		include: ["buffer"],
	},
});
