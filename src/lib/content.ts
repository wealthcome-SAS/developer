export interface DocPage {
	slug: string;
	title: string;
	description?: string;
	content: string;
}

export interface BreadcrumbItem {
	label: string;
	href: string;
	isActive?: boolean;
}

export function getBreadcrumbItems(slug: string): BreadcrumbItem[] {
	const parts = slug.split("/");
	const items: BreadcrumbItem[] = [{ label: "WealthPartners", href: "/" }];

	let currentPath = "";

	for (let i = 0; i < parts.length; i++) {
		currentPath += (i > 0 ? "/" : "") + parts[i];
		const isLast = i === parts.length - 1;

		// Format the label based on the part
		let label = parts[i]
			.replace(/-/g, " ")
			.replace(/\b\w/g, (l) => l.toUpperCase()); // Title case

		// Special formatting for known sections
		if (parts[i] === "introduction") {
			label = "Introduction";
		} else if (parts[i].endsWith("-list")) {
			label = label.replace(" List", " — List");
		} else if (
			parts[i].endsWith("-detail") ||
			parts[i].endsWith("-information") ||
			parts[i].endsWith("-informations")
		) {
			label = label.replace(/ (Detail|Information|Informations)$/, " — $1");
		} else if (parts[i].endsWith("-statistics")) {
			label = label.replace(" Statistics", " — Statistics");
		} else if (parts[i].endsWith("-creation")) {
			label = label.replace(" Creation", " — Create");
		} else if (
			parts[i].endsWith("-update") ||
			parts[i].endsWith("-modification")
		) {
			label = label.replace(/ (Update|Modification)$/, " — $1");
		} else if (parts[i].endsWith("-delete") || parts[i].endsWith("-deletion")) {
			label = label.replace(/ (Delete|Deletion)$/, " — $1");
		}

		items.push({
			label,
			href: currentPath, // Just the slug, not the full path
			isActive: isLast,
		});
	}

	return items;
}

// Function to determine if a slug should use an anchor link instead of a route
export function getNavigationTarget(slug: string): {
	route: string;
	anchor?: string;
} {
	const doc = docsList.find((d) => d.slug === slug);
	if (!doc) {
		// Check if it's a known category
		const categories = [
			"authentication",
			"guides",
		];
		if (categories.includes(slug)) {
			return { route: slug + "/introduction" };
		}
		return { route: slug };
	}

	// Check if this slug is part of a group that shares the same file
	const sameFileDocs = docsList.filter(
		(d) => d.path === doc.path && d.slug !== slug,
	);

	if (sameFileDocs.length > 0) {
		// This is part of a shared file, extract the anchor from the slug
		const slugParts = slug.split("/");
		const lastPart = slugParts[slugParts.length - 1];

		// If the last part is different from the base slug, it's an anchor
		const baseSlug = slugParts.slice(0, -1).join("/");
		const baseDoc = docsList.find((d) => d.slug === baseSlug);

		if (baseDoc && baseDoc.path === doc.path) {
			// There's a base document, use it as route with anchor
			return { route: baseSlug, anchor: lastPart };
		}
	}

	return { route: slug };
}

function parseFrontmatter(text: string): {
	data: Record<string, any>;
	content: string;
} {
	const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
	const match = text.match(frontmatterRegex);

	if (!match) {
		return { data: {}, content: text };
	}

	const [, frontmatter, content] = match;
	const data: Record<string, any> = {};

	frontmatter.split("\n").forEach((line) => {
		const [key, ...valueParts] = line.split(":");
		if (key && valueParts.length > 0) {
			data[key.trim()] = valueParts.join(":").trim();
		}
	});

	return { data, content };
}

export async function loadMarkdownFile(path: string): Promise<DocPage> {
	// Paths in docsList are locale-agnostic (e.g. "/content/guides/get-started.md").
	// Resolve the active locale from localStorage and prefix it.
	let locale = "en";
	if (typeof window !== "undefined") {
		const stored = window.localStorage.getItem("wealthpartners:locale");
		if (stored === "en" || stored === "fr") locale = stored;
	}
	const localizedPath = path.replace("/content/", `/content/${locale}/`);
	const response = await fetch(localizedPath);
	if (!response.ok) {
		// Fallback to English if the locale is not yet translated
		const enPath = path.replace("/content/", "/content/en/");
		const enResponse = await fetch(enPath);
		if (!enResponse.ok) throw new Error(`Document not found: ${path}`);
		return await toDocPage(enResponse, path);
	}
	return await toDocPage(response, path);
}

async function toDocPage(response: Response, path: string): Promise<DocPage> {
	const text = await response.text();
	const { data, content } = parseFrontmatter(text);

	return {
		slug: path.replace("/content/", "").replace(".md", ""),
		title: data.title || "Untitled",
		description: data.description,
		content,
	};
}

export const docsList = [
	{
		slug: "guides/first-steps",
		title: "Getting Started",
		path: "/content/guides/get-started.md",
	},
	{
		slug: "guides/get-token",
		title: "Get an access token",
		path: "/content/guides/get-token.md",
	},
	{
		slug: "guides/list-companies",
		title: "List your companies",
		path: "/content/guides/list-companies.md",
	},
	{
		slug: "guides/list-contracts",
		title: "Get your non-archived contracts",
		path: "/content/guides/list-contracts.md",
	},
	{
		slug: "guides/update-customer",
		title: "Update a customer record",
		path: "/content/guides/update-customer.md",
	},
	{
		slug: "guides/pagination",
		title: "Understand pagination",
		path: "/content/guides/pagination.md",
	},
	{
		slug: "guides/error-codes",
		title: "Error codes",
		path: "/content/guides/error-codes.md",
	},
	{
		slug: "guides/support",
		title: "Support & Request ID",
		path: "/content/guides/support.md",
	},
	// Authentication
	{
		slug: "authentication/introduction",
		title: "Authentication — Introduction",
		path: "/content/authentication/introduction.md",
	},
];

export function getOrderedDocSlugs(): string[] {
	return [
		// Guides
		"guides/first-steps",
		"guides/get-token",
		"guides/list-companies",
		"guides/list-contracts",
		"guides/update-customer",
		"guides/pagination",
		"guides/error-codes",
		"guides/support",
		// Authentication
		"authentication/introduction",
	];
}
