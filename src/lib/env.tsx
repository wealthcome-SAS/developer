import React from "react";

export type Environment = "production" | "preproduction" | "staging";

export interface EnvironmentConfig {
	label: string;
	baseUrl: string;
	swaggerBaseUrl: string;
}

export const environments: Record<Environment, EnvironmentConfig> = {
	production: {
		label: "Production",
		baseUrl: "https://services.wealthcome.fr",
		swaggerBaseUrl: "https://services.wealthcome.fr",
	},
	preproduction: {
		label: "Preproduction",
		baseUrl: "https://services.preproduction.aws.wealthcome.fr",
		swaggerBaseUrl: "https://services.preproduction.aws.wealthcome.fr",
	},
	staging: {
		label: "Staging",
		baseUrl: "https://services.staging.wealthcome.fr",
		swaggerBaseUrl: "https://services.staging.wealthcome.fr",
	},
};

// Staging is hidden by default (internal only). Enable via VITE_SHOW_STAGING=true.
const showStaging = import.meta.env.VITE_SHOW_STAGING === "true";

export const availableEnvironments: Environment[] = showStaging
	? ["production", "preproduction", "staging"]
	: ["production", "preproduction"];

export const defaultEnvironment: Environment = "production";

interface EnvContextValue {
	environment: Environment;
	setEnvironment: (env: Environment) => void;
	config: EnvironmentConfig;
}

const EnvContext = React.createContext<EnvContextValue | null>(null);

const STORAGE_KEY = "wealthpartners:environment";

function getInitialEnvironment(): Environment {
	if (typeof window === "undefined") return defaultEnvironment;
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored && (stored in environments)) {
		return stored as Environment;
	}
	return defaultEnvironment;
}

export function EnvProvider({ children }: { children: React.ReactNode }) {
	const [environment, setEnvironmentState] =
		React.useState<Environment>(getInitialEnvironment);

	const setEnvironment = React.useCallback((env: Environment) => {
		setEnvironmentState(env);
		if (typeof window !== "undefined") {
			window.localStorage.setItem(STORAGE_KEY, env);
		}
	}, []);

	const value = React.useMemo<EnvContextValue>(
		() => ({
			environment,
			setEnvironment,
			config: environments[environment],
		}),
		[environment, setEnvironment],
	);

	return <EnvContext.Provider value={value}>{children}</EnvContext.Provider>;
}

export function useEnv(): EnvContextValue {
	const context = React.useContext(EnvContext);
	if (!context) {
		throw new Error("useEnv must be used within an EnvProvider");
	}
	return context;
}
