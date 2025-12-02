import { Typography } from "design-system";
import React from "react";
import { cn } from "../../lib/utils";

interface TypographyHeadingProps {
	level: number;
	children: React.ReactNode;
}

interface HeadingContextType {
	getHeadingId: (baseId: string) => string;
}

const HeadingContext = React.createContext<HeadingContextType | null>(null);

// Global counter for heading IDs within a document
let headingCounters: { [key: string]: number } = {};

function generateHeadingId(baseId: string): string {
	if (!baseId) {
		return `heading-${Math.random().toString(36).substr(2, 9)}`;
	}

	const count = headingCounters[baseId] || 0;
	headingCounters[baseId] = count + 1;

	return count === 0 ? baseId : `${baseId}-${count + 1}`;
}

function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text).catch((err) => {
		console.error("Failed to copy: ", err);
	});
}

function HeadingAnchor({ id }: { id: string }) {
	const [showCopied, setShowCopied] = React.useState(false);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		const url = `${window.location.origin}${window.location.pathname}#${id}`;
		copyToClipboard(url);
		setShowCopied(true);
		setTimeout(() => setShowCopied(false), 2000);
	};

	return (
		<a
			href={`#${id}`}
			onClick={handleClick}
			className={cn(
				"ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
				"inline-flex items-center justify-center w-6 h-6",
				"text-gray-400 hover:text-gray-600",
				"rounded hover:bg-gray-100",
			)}
			title={showCopied ? "Copied!" : "Copy link to section"}
		>
			{showCopied ? (
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="20,6 9,17 4,12"></polyline>
				</svg>
			) : (
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
				</svg>
			)}
		</a>
	);
}

export function TypographyHeading({ level, children }: TypographyHeadingProps) {
	const size = level === 1 ? "3xl" : level === 2 ? "2xl" : "xl";
	const className =
		level === 1
			? "text-3xl font-semibold!"
			: level === 2
				? "text-2xl font-semibold!"
				: "text-xl font-medium!";

	const context = React.useContext(HeadingContext);

	// Generate base ID first
	const headingText = React.Children.toArray(children).join("");
	const baseId = React.useMemo(() => {
		return (
			headingText
				.toLowerCase()
				.replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
				.replace(/\s+/g, "-") // Replace spaces with hyphens
				.replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
				.replace(/^-|-$/g, "") // Remove leading/trailing hyphens
				.trim() || `heading-${Math.random().toString(36).substr(2, 9)}`
		);
	}, [headingText]);

	// Generate unique ID
	const headingId = React.useMemo(() => {
		return context ? context.getHeadingId(baseId) : baseId;
	}, [baseId, context]);

	return (
		<div id={headingId} className="group relative">
			<Typography
				as={`h${level}` as keyof React.JSX.IntrinsicElements}
				variant="display"
				size={size}
				className={cn(className, "mb-4")}
			>
				{children}
				<HeadingAnchor id={headingId} />
			</Typography>
		</div>
	);
}

// Context provider component to wrap document content
export function HeadingProvider({ children }: { children: React.ReactNode }) {
	// Reset counters for new document
	React.useEffect(() => {
		headingCounters = {};
	}, []);

	const getHeadingId = React.useCallback((baseId: string) => {
		return generateHeadingId(baseId);
	}, []);

	const contextValue = React.useMemo(
		() => ({
			getHeadingId,
		}),
		[getHeadingId],
	);

	return (
		<HeadingContext.Provider value={contextValue}>
			{children}
		</HeadingContext.Provider>
	);
}
