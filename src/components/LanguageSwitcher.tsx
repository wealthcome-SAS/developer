import { useLocale, type Locale } from "../lib/i18n";

export function LanguageSwitcher() {
	const { locale, setLocale } = useLocale();

	return (
		<div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 text-xs">
			{(["en", "fr"] as Locale[]).map((lang) => {
				const isActive = locale === lang;
				return (
					<button
						key={lang}
						type="button"
						onClick={() => setLocale(lang)}
						className={`rounded-md px-2 py-1 font-medium uppercase transition-colors ${
							isActive
								? "bg-white text-gray-900 shadow-sm"
								: "text-gray-500 hover:text-gray-800"
						}`}
					>
						{lang}
					</button>
				);
			})}
		</div>
	);
}
