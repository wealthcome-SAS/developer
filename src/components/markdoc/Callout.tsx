import { Banner } from "design-system";
import React from "react";

type BannerVariant = NonNullable<
	React.ComponentProps<typeof Banner>["variant"]
>;

interface CalloutProps {
	type?: "info" | "warning" | "error" | "success";
	title?: string;
	children: React.ReactNode;
}

// Banner variants are richer than the callout types, so map the legacy types
// onto the closest design-system variants.
const variantMap: Record<NonNullable<CalloutProps["type"]>, BannerVariant> = {
	info: "accent",
	warning: "alert",
	error: "high",
	success: "low",
};

// Banner only accepts a plain-text `description`, so flatten the already-rendered
// markdoc children (links, inline code, base-url, ...) into a single string.
function extractText(node: React.ReactNode): string {
	if (typeof node === "string" || typeof node === "number") {
		return node.toString();
	}
	if (Array.isArray(node)) {
		return node.map(extractText).join("");
	}
	if (React.isValidElement(node)) {
		const { children, content } = node.props as {
			children?: React.ReactNode;
			content?: string;
		};
		// Some markdoc render components (e.g. TypographyCode) pass their text
		// through a `content` prop instead of children.
		if (content != null && children == null) {
			return content;
		}
		return extractText(children);
	}
	return "";
}

export function Callout({ type = "info", title, children }: CalloutProps) {
	return (
		<Banner
			variant={variantMap[type]}
			title={title ?? ""}
			description={extractText(children)}
			onClose={() => {}}
			onDismiss={() => {}}
			closable={false}
			showDismissSwitch={false}
		/>
	);
}
