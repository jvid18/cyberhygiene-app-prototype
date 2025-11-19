import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface ModuleNavigationProps {
	currentModule: number;
	totalModules: number;
	onPrevious: () => void;
	onNext: () => void;
	onComplete: () => void;
	canGoNext: boolean;
	isLastModule: boolean;
	isModuleCompleted: boolean;
}

export function ModuleNavigation({
	currentModule,
	totalModules,
	onPrevious,
	onNext,
	onComplete,
	canGoNext,
	isLastModule,
}: ModuleNavigationProps) {
	return (
		<div className="flex items-center justify-between gap-4">
			<button
				type="button"
				onClick={onPrevious}
				disabled={currentModule === 0}
				className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<ChevronLeft className="w-5 h-5" />
				<span className="hidden sm:inline">Anterior</span>
			</button>

			<div className="text-sm text-muted-foreground">
				Módulo {currentModule + 1} de {totalModules}
			</div>

			{isLastModule ? (
				<button
					type="button"
					onClick={onComplete}
					disabled={!canGoNext}
					className="flex items-center gap-2 px-6 py-2 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed font-medium"
				>
					<CheckCircle2 className="w-5 h-5" />
					<span>Completar curso</span>
				</button>
			) : (
				<button
					type="button"
					onClick={onNext}
					disabled={!canGoNext}
					className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<span className="hidden sm:inline">Siguiente</span>
					<ChevronRight className="w-5 h-5" />
				</button>
			)}
		</div>
	);
}
