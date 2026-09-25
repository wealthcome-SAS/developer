interface CodeBlockProps {
	language?: string;
	children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
	return (
		<div className="my-4">
			{language && (
				<div className="bg-gray-800 text-gray-200 px-4 py-2 text-xs font-mono rounded-t">
					{language}
				</div>
			)}
			<pre
				className={`bg-gray-900 text-gray-100 text-xs p-4 overflow-x-auto ${language ? "rounded-b" : "rounded"}`}
			>
				<code>{children}</code>
			</pre>
		</div>
	);
}
