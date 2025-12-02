import { cn } from "../../lib/utils"
import { Typography } from 'design-system'

export type BadgeVariant =
	| "accent"
	| "incomplete"
	| "low"
	| "medium"
	| "high"
	| "neutral";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: BadgeVariant;
	label: string;
	chip?: boolean;
}

const variantClassnames: Record<NonNullable<BadgeVariant>, string> = {
	accent: "bg-indigo-50",
	incomplete: "bg-orange-50",
	low: "bg-emerald-50",
	medium: "bg-yellow-50",
	high: "bg-red-50",
	neutral: "bg-slate-100",
};

const textClassnames: Record<NonNullable<BadgeVariant>, string> = {
	accent: "text-indigo-700",
	incomplete: "text-orange-700",
	low: "text-emerald-700",
	medium: "text-yellow-700",
	high: "text-red-700",
	neutral: "text-slate-600",
};

const chipClassnames: Record<NonNullable<BadgeVariant>, string> = {
    accent: "bg-indigo-500",
    incomplete: "bg-orange-500",
    low: "bg-emerald-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
    neutral: "bg-slate-500",
};

export const Badge = ({
	variant = "accent",
	label,
	className,
	chip,
	...props
}: BadgeProps) => {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-1 rounded-sm py-0.5 px-1.5 transition-colors outline-none focus:outline-none",
				variantClassnames[variant],
				className,
			)}
			{...props}
		>
			{chip === true && (
				<div className={cn("w-1.5 h-1.5 rounded-full", chipClassnames[variant])} />
			)}
			<Typography
				as="label"
				variant="label"
				size="smaller"
				weight="medium"
				className={cn("leading-4 select-none", textClassnames[variant])}
			>
				{label}
			</Typography>
		</div>
	);
};