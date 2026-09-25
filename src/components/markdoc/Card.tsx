import {
	CardContent,
	CardDescription,
	CardTitle,
	Card as DesignCard,
} from "design-system";
import {
	Building,
	Database,
	ExternalLink,
	FileText,
	Settings,
	TrendingUp,
	User,
	Users,
} from "lucide-react";

interface CardProps {
	title: string;
	description: string;
	href: string;
	icon: string;
	variant?: "doc" | "home";
}

const iconMap = {
	Building,
	Users,
	User,
	ExternalLink,
	Settings,
	TrendingUp,
	Database,
	FileText,
};

export function Card({
	title,
	description,
	href,
	icon,
	variant = "doc",
}: CardProps) {
	const IconComponent = iconMap[icon as keyof typeof iconMap] || Building;

	if (variant === "home") {
		return (
			<a href={href} className="block">
				<DesignCard className="h-full hover:shadow-lg transition-shadow bg-white border border-slate-300">
					<CardContent className="flex flex-col items-start space-y-4 p-8">
						<div className="shrink-0">
							<div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
								<IconComponent className="w-8 h-8 text-indigo-600" />
							</div>
						</div>
						<div className="flex-1 min-w-0">
							<CardTitle className="text-2xl font-bold text-gray-900 mb-2">
								{title}
							</CardTitle>
							<CardDescription className="text-sm text-gray-600">
								{description}
							</CardDescription>
						</div>
					</CardContent>
				</DesignCard>
			</a>
		);
	}

	return (
		<a href={href} className="block">
			<DesignCard className="border border-slate-300 h-full">
				<CardContent className="flex items-start space-x-4 py-5">
					<div className="shrink-0">
						<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
							<IconComponent className="w-6 h-6 text-blue-600" />
						</div>
					</div>
					<div className="flex-1 min-w-0">
						<CardTitle className="text-lg font-semibold text-gray-900 truncate">
							{title}
						</CardTitle>
						<CardDescription className="text-sm text-gray-600">
							{description}
						</CardDescription>
					</div>
				</CardContent>
			</DesignCard>
		</a>
	);
}
