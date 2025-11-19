import { CheckCircle2 } from "lucide-react";

interface ProgressBarProps {
	current: number;
	total: number;
	percentage: number;
}

export function ProgressBar({ current, total, percentage }: ProgressBarProps) {
	return (
		<div className="bg-card border border-border rounded-lg p-4">
			<div className="flex items-center justify-between mb-2">
				<span className="text-sm font-medium">Progreso del curso</span>
				<span className="text-sm text-muted-foreground">
					{current} de {total} módulos
				</span>
			</div>
			<div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
				<div
					className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
					style={{ width: `${percentage}%` }}
				/>
			</div>
			<div className="flex items-center gap-2 mt-2">
				{percentage === 100 && (
					<>
						<CheckCircle2 className="w-4 h-4 text-accent" />
						<span className="text-sm font-medium text-accent">
							¡Curso completado!
						</span>
					</>
				)}
				{percentage > 0 && percentage < 100 && (
					<span className="text-sm text-muted-foreground">
						{percentage}% completado
					</span>
				)}
			</div>
		</div>
	);
}
