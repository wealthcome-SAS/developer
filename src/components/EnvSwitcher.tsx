import {
	availableEnvironments,
	environments,
	useEnv,
	type Environment,
} from "../lib/env";

export function EnvSwitcher() {
	const { environment, setEnvironment } = useEnv();

	return (
		<div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 text-xs">
			{availableEnvironments.map((env) => {
				const isActive = environment === env;
				return (
					<button
						key={env}
						type="button"
						onClick={() => setEnvironment(env as Environment)}
						className={`rounded-md px-2 py-1 font-medium transition-colors ${
							isActive
								? "bg-white text-gray-900 shadow-sm"
								: "text-gray-500 hover:text-gray-800"
						}`}
					>
						{environments[env].label}
					</button>
				);
			})}
		</div>
	);
}
