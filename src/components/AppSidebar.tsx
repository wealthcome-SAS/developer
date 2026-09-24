import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, ChevronRight, File, Folder } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getNavigationTarget } from "../lib/content";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/Collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
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
	[
		"Guides",
		[
			["Getting Started", "guides/first-steps"],
			["Get an access token", "guides/get-token"],
			["List your companies", "guides/list-companies"],
			["Get your non-archived contracts", "guides/list-contracts"],
			["Update a customer record", "guides/update-customer"],
			["Understand pagination", "guides/pagination"],
			["Error codes", "guides/error-codes"],
			["Support & Request ID", "guides/support"],
		],
	],
	["Authentication", [["Introduction", "authentication/introduction"]]],
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

		if (effectiveSlug.startsWith("guides/")) return "Guides";

		if (effectiveSlug === "authentication/introduction")
			return "Authentication";

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
									<span className="truncate text-xs">Partners Portal</span>
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
			<SidebarFooter>
				<LanguageSwitcher />
			</SidebarFooter>
		</Sidebar>
	);
}
