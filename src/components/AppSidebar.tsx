import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, ChevronRight, File, Folder } from "lucide-react";
import { getNavigationTarget } from "../lib/content";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/Collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
} from "./ui/Sidebar";

// Documentation tree structure: each entry is either
// - [title, slug] for a leaf, or
// - [title, children[]] for a node
type DocLeaf = [string, string];
type DocNode = [string, Array<DocLeaf | DocNode>];

const docsTree: Array<DocLeaf | DocNode> = [
	["Authentication", [["Introduction", "authentication/introduction"]]],
	[
		"Financial Provider Specification",
		[
			["Introduction", "financial-provider-specification/introduction"],
			[
				"Company",
				[
					[
						"List all companies",
						"financial-provider-specification/company-list",
					],
					[
						"Get company detailed information",
						"financial-provider-specification/company-detail",
					],
				],
			],
			[
				"Manager",
				[
					[
						"List all managers",
						"financial-provider-specification/manager-list",
					],
					[
						"Get manager detailed information",
						"financial-provider-specification/manager-detail",
					],
				],
			],
			[
				"Contract",
				[
					[
						"List all contracts",
						"financial-provider-specification/contract-list",
					],
					[
						"Get contract detailed information",
						"financial-provider-specification/contract-detail",
					],
				],
			],
			[
				"Asset",
				[
					["List all assets", "financial-provider-specification/asset-list"],
					[
						"Get asset detailed information",
						"financial-provider-specification/asset-detail",
					],
					[
						"List all transactions related to an asset",
						"financial-provider-specification/asset-transactions",
					],
					[
						"The valuation in time of an asset",
						"financial-provider-specification/asset-valuation-history",
					],
					[
						"The current valuation of an asset",
						"financial-provider-specification/asset-valuation-current",
					],
					[
						"List all investments currently held in an asset",
						"financial-provider-specification/asset-investments",
					],
					[
						"The history of investments in an asset",
						"financial-provider-specification/asset-investments-history",
					],
				],
			],
			[
				"Schemas",
				[
					[
						"cursor_paginated",
						"financial-provider-specification/schemas/cursor_paginated",
					],
					["company", "financial-provider-specification/schemas/company"],
					["manager", "financial-provider-specification/schemas/manager"],
					["contract", "financial-provider-specification/schemas/contract"],
					["asset", "financial-provider-specification/schemas/asset"],
					[
						"transaction",
						"financial-provider-specification/schemas/transaction",
					],
					["amount", "financial-provider-specification/schemas/amount"],
					["investment", "financial-provider-specification/schemas/investment"],
				],
			],
		],
	],
	[
		"Aggregated API",
		[
			["Introduction", "aggregated-api/introduction"],
			[
				"Company",
				[
					["List companies", "aggregated-api/company-list"],
					[
						"Retrieve list companies statistics",
						"aggregated-api/company-statistics",
					],
					["Retrieve a company information", "aggregated-api/company-detail"],
					["Update a company information", "aggregated-api/company-update"],
					["Delete a company", "aggregated-api/company-delete"],
				],
			],
			[
				"Customer",
				[
					["Customer list statistics", "aggregated-api/customer-statistics"],
					["List of customers", "aggregated-api/customer-list"],
				],
			],
			[
				"Team",
				[
					["Team list statistics", "aggregated-api/team-statistics"],
					["Team list", "aggregated-api/team-list"],
					["Team creation", "aggregated-api/team-creation"],
					["Team retrieval", "aggregated-api/team-retrieve"],
					["Team update", "aggregated-api/team-update"],
					["Team deletion", "aggregated-api/team-deletion"],
					["Statistics of a team", "aggregated-api/team-statistics-team"],
					["Team member list", "aggregated-api/team-member-list"],
					["Team Member Add", "aggregated-api/team-member-add"],
				],
			],
			[
				"Entity",
				[
					["entities list statistics", "aggregated-api/entities-statistics"],
					["List of entities", "aggregated-api/entities-list"],
					["Get entity informations", "aggregated-api/entity-informations"],
					["Update entity informations", "aggregated-api/entity-modification"],
				],
			],
			[
				"Reference",
				[
					[
						"Customer references list statistics",
						"aggregated-api/customer-references-statistics",
					],
					["List of reference", "aggregated-api/references-list"],
					["Create a reference", "aggregated-api/references-creation"],
					["Reference information", "aggregated-api/references-informations"],
					["Update a reference", "aggregated-api/references-modification"],
				],
			],
			[
				"Manager",
				[
					["Manager list statistics", "aggregated-api/manager-statistics"],
					["List of managers", "aggregated-api/manager-list"],
					["Create a new manager", "aggregated-api/manager-creation"],
					["Update a manager", "aggregated-api/manager-update"],
				],
			],
			[
				"Assets",
				[
					["List assets", "aggregated-api/assets-list"],
					["Asset Information", "aggregated-api/asset-information"],
					["List asset transactions", "aggregated-api/asset-transactions"],
					["List asset investments", "aggregated-api/asset-investments"],
				],
			],
			[
				"Parent Company",
				[
					["List parent companies", "aggregated-api/parent-company-list"],
					[
						"Retreive the parent company informations",
						"aggregated-api/parent-company-informations",
					],
				],
			],
			[
				"Schemas",
				[
					["Company", "aggregated-api/schemas/company"],
					["Customer", "aggregated-api/schemas/customer"],
					["Team", "aggregated-api/schemas/team"],
					["Entity", "aggregated-api/schemas/entity"],
					["Manager", "aggregated-api/schemas/manager"],
					["Asset", "aggregated-api/schemas/asset"],
					["Transaction", "aggregated-api/schemas/transaction"],
					["Investment", "aggregated-api/schemas/investment"],
					["Parent Company", "aggregated-api/schemas/parent-company"],
				],
			],
		],
	],
];

function TreeRoot({ currentSection }: { currentSection: string | null }) {
	return (
		<>
			{docsTree.map((item, idx) => (
				<Tree
					key={idx}
					item={item}
					currentSection={currentSection}
					parentPath=""
				/>
			))}
		</>
	);
}

function Tree({
	item,
	currentSection,
	parentPath,
}: {
	item: DocLeaf | DocNode;
	currentSection: string | null;
	parentPath: string;
}) {
	const name = item[0];

	// Leaf: second element is a string slug
	if (typeof item[1] === "string") {
		const slug = item[1];
		const { route, anchor } = getNavigationTarget(slug);
		const location = useLocation();
		const currentSlug = location.pathname.startsWith("/docs/")
			? location.pathname.replace("/docs/", "")
			: null;
		const currentHash = location.hash ? location.hash.substring(1) : null;
		const effectiveCurrentSlug =
			currentSlug && currentHash
				? `${currentSlug}/${currentHash}`
				: currentSlug;

		const isActive = effectiveCurrentSlug === slug;

		return (
			<SidebarMenuItem>
				<SidebarMenuButton asChild isActive={isActive}>
					<Link to="/docs/$" params={{ _splat: route }} hash={anchor}>
						<File />
						<span>{name}</span>
					</Link>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);
	}

	// Node with children
	const children = item[1];
	const fullPath = parentPath ? `${parentPath}/${name}` : name;

	return (
		<SidebarMenuItem>
			<Collapsible
				key={`${fullPath}-${!!currentSection?.startsWith(fullPath)}`}
				className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				defaultOpen={currentSection?.startsWith(fullPath)}
			>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton>
						<ChevronRight className="transition-transform" />
						<Folder />
						<span>{name}</span>
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{children.map((sub, i) => (
							// sub can be DocLeaf or DocNode (nested deeper), but our data uses only leaves under these nodes
							<Tree
								key={i}
								item={sub as any}
								currentSection={currentSection}
								parentPath={fullPath}
							/>
						))}
					</SidebarMenuSub>
				</CollapsibleContent>
			</Collapsible>
		</SidebarMenuItem>
	);
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const location = useLocation();
	const currentSlug = location.pathname.startsWith("/docs/")
		? location.pathname.replace("/docs/", "")
		: null;
	const currentHash = location.hash ? location.hash.substring(1) : null; // Remove the # prefix

	// If we have a hash, construct the full slug including the anchor
	const effectiveCurrentSlug =
		currentSlug && currentHash ? `${currentSlug}/${currentHash}` : currentSlug;

	const getSectionForSlug = (slug: string) => {
		// For anchor-based navigation, we need to check the base route
		const { route } = getNavigationTarget(slug);
		const effectiveSlug = route || slug;

		if (effectiveSlug === "authentication/introduction")
			return "Authentication";

		if (effectiveSlug === "financial-provider-specification/introduction")
			return "Financial Provider Specification";
		if (effectiveSlug.startsWith("financial-provider-specification/company"))
			return "Financial Provider Specification/Company";
		if (effectiveSlug.startsWith("financial-provider-specification/manager"))
			return "Financial Provider Specification/Manager";
		if (effectiveSlug.startsWith("financial-provider-specification/contract"))
			return "Financial Provider Specification/Contract";
		if (effectiveSlug.startsWith("financial-provider-specification/asset"))
			return "Financial Provider Specification/Asset";
		if (effectiveSlug.startsWith("financial-provider-specification/schemas"))
			return "Financial Provider Specification/Schemas";

		if (effectiveSlug === "aggregated-api/introduction")
			return "Aggregated API";
		if (effectiveSlug.startsWith("aggregated-api/company"))
			return "Aggregated API/Company";
		if (effectiveSlug.startsWith("aggregated-api/customer"))
			return "Aggregated API/Customer";
		if (effectiveSlug.startsWith("aggregated-api/team"))
			return "Aggregated API/Team";
		if (
			effectiveSlug.startsWith("aggregated-api/entity") ||
			effectiveSlug.startsWith("aggregated-api/entities")
		)
			return "Aggregated API/Entity";
		if (effectiveSlug.startsWith("aggregated-api/reference"))
			return "Aggregated API/Reference";
		if (effectiveSlug.startsWith("aggregated-api/manager"))
			return "Aggregated API/Manager";
		if (effectiveSlug.startsWith("aggregated-api/asset"))
			return "Aggregated API/Assets";
		if (effectiveSlug.startsWith("aggregated-api/parent-company"))
			return "Aggregated API/Parent Company";
		if (effectiveSlug.startsWith("aggregated-api/schemas"))
			return "Aggregated API/Schemas";

		return null;
	};

	const currentSection = effectiveCurrentSlug
		? getSectionForSlug(effectiveCurrentSlug)
		: null;

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link to="/">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
									<img src="/logo.svg" alt="Logo" className="h-full w-full" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Wealthcome</span>
									<span className="truncate text-xs">Developer Portal</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				{/* <NavMain items={data.navMain} /> */}
				<SidebarGroup>
					<SidebarGroupLabel className="flex items-center gap-2">
						<BookOpen className="size-4" />
						Documentation
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{/* Build a collapsible tree for Financial Provider Specification */}
							<TreeRoot currentSection={currentSection} />
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
