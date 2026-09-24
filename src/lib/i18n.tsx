import React from "react";

export type Locale = "en" | "fr";

export const locales: Locale[] = ["en", "fr"];

export const defaultLocale: Locale = "en";

interface LocaleContextValue {
	locale: Locale;
	setLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "wealthpartners:locale";

function getInitialLocale(): Locale {
	if (typeof window === "undefined") return defaultLocale;
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "en" || stored === "fr") {
		return stored;
	}
	return defaultLocale;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocaleState] = React.useState<Locale>(getInitialLocale);

	const setLocale = React.useCallback((locale: Locale) => {
		setLocaleState(locale);
		if (typeof window !== "undefined") {
			window.localStorage.setItem(STORAGE_KEY, locale);
		}
	}, []);

	const value = React.useMemo<LocaleContextValue>(
		() => ({ locale, setLocale }),
		[locale],
	);

	return (
		<LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
	);
}

export function useLocale(): LocaleContextValue {
	const context = React.useContext(LocaleContext);
	if (!context) {
		throw new Error("useLocale must be used within a LocaleProvider");
	}
	return context;
}
