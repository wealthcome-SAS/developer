import Markdoc from "@markdoc/markdoc";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { docsList, loadMarkdownFile } from "../lib/content";
import { components, parseMarkdoc } from "../lib/markdoc";
// import { Typography } from 'design-system'

export const Route = createFileRoute("/docs/$slug")({
	loader: async ({ params }) => {
		const doc = docsList.find((d) => d.slug === params.slug);
		if (!doc) throw new Error("Document not found");
		return await loadMarkdownFile(doc.path);
	},
	component: DocPage,
});

function DocPage() {
	const doc = Route.useLoaderData();
	const content = parseMarkdoc(doc.content);
	React.useEffect(() => {
		try {
			window.dispatchEvent(
				new CustomEvent("doc:navigate", {
					detail: { title: doc.title, slug: doc.slug },
				}),
			);
		} catch (e) {}
	}, [doc.title, doc.slug]);

	// Scroll to anchor after content is rendered
	React.useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const element = document.getElementById(hash.substring(1));
			if (element) {
				// Small delay to ensure rendering is complete
				setTimeout(() => {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 100);
			}
		}
	}, [content]);

	return (
		<article className="max-w-none mx-8 p-8 bg-white rounded-lg">
			{/* <Typography as="h1" variant="display" size="h1" className="mb-4 text-2xl font-semibold!">
        {doc.title}
      </Typography>
      {doc.description && (
        <Typography as="p" variant="body" size="large" className="text-gray-600 mb-8 text-lg font-normal!">
          {doc.description}
        </Typography>
      )} */}
			{Markdoc.renderers.react(content, React, { components })}
		</article>
	);
}
