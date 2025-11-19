import { CheckCircle2, Circle } from "lucide-react";
import type { ReactNode } from "react";

interface ModuleContentProps {
	title: string;
	description: string;
	children: ReactNode;
	isCompleted: boolean;
}

export function ModuleContent({
	title,
	description,
	children,
	isCompleted,
}: ModuleContentProps) {
	return (
		<div className="bg-card border border-border rounded-xl p-6 md:p-8">
			<div className="flex items-start gap-4 mb-6">
				<div className="shrink-0">
					{isCompleted ? (
						<CheckCircle2 className="w-6 h-6 text-accent" />
					) : (
						<Circle className="w-6 h-6 text-muted-foreground" />
					)}
				</div>
				<div className="flex-1">
					<h2 className="text-2xl font-bold mb-2">{title}</h2>
					<p className="text-muted-foreground">{description}</p>
				</div>
			</div>
			<div className="prose prose-invert max-w-none">{children}</div>
		</div>
	);
}
