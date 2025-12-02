import { Link } from "@tanstack/react-router";

export function Footer() {
	return (
		<footer className="bg-indigo-950 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-xl font-bold mb-4">WealthPartners</h3>
						<p className="text-gray-300 mb-4">
							Comprehensive documentation for integrating with Wealthcome's
							financial ecosystem. Build powerful applications with our APIs and
							specifications.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://wealthcome.fr"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<span className="sr-only">Website</span>🌐
							</a>
							<a
								href="https://partners.wealthcome.fr"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<span className="sr-only">Partners Docs</span>📚
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Documentation</h4>
						<ul className="space-y-2">
							<li>
								<Link
									to="/docs/$"
									params={{ _splat: "authentication/introduction" }}
									className="text-gray-300 hover:text-white transition-colors"
								>
									Authentication
								</Link>
							</li>
							<li>
								<Link
									to="/docs/$"
									params={{
										_splat: "financial-provider-specification/introduction",
									}}
									className="text-gray-300 hover:text-white transition-colors"
								>
									Financial Provider
								</Link>
							</li>
							<li>
								<Link
									to="/docs/$"
									params={{ _splat: "aggregated-api/introduction" }}
									className="text-gray-300 hover:text-white transition-colors"
								>
									Aggregated API
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Contact</h4>
						<ul className="space-y-2 text-gray-300">
							<li>Email: dev@wealthcome.fr</li>
							<li>
								<a
									href="https://www.wealthcome.fr/conditions-generales-utilisation"
									className="hover:text-white transition-colors"
								>
									Terms of Use
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2025 Wealthcome. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
