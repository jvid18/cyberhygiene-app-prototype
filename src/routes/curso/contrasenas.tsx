import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Award, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { InteractiveQuiz } from "@/components/course/interactive-quiz";
import { ModuleContent } from "@/components/course/module-content";
import { ModuleNavigation } from "@/components/course/module-navigation";
import { ProgressBar } from "@/components/course/progress-bar";
import { Wrapper } from "@/components/ui/wrapper";
import { passwordCourseModules } from "@/data/password-course";
import { useCourseProgress } from "@/hooks/useCourseProgress";

export const Route = createFileRoute("/curso/contrasenas")({
	component: RouteComponent,
});

function RouteComponent() {
	const courseId = "contrasenas";
	const {
		progress,
		completeModule,
		setCurrentModule,
		completeCourse,
		getProgressPercentage,
		isModuleCompleted,
		isCourseCompleted,
	} = useCourseProgress(courseId);

	const [quizCompleted, setQuizCompleted] = useState(false);
	const totalModules = passwordCourseModules.length;
	const currentModuleData = passwordCourseModules[progress.currentModule];
	const progressPercentage = getProgressPercentage(totalModules);

	useEffect(() => {
		setQuizCompleted(isModuleCompleted(progress.currentModule));
	}, [progress.currentModule, isModuleCompleted]);

	const handleQuizComplete = (score: number) => {
		setQuizCompleted(true);
		completeModule(progress.currentModule, score);
	};

	const handleNext = () => {
		if (progress.currentModule < totalModules - 1) {
			setCurrentModule(progress.currentModule + 1);
			setQuizCompleted(false);
		}
	};

	const handlePrevious = () => {
		if (progress.currentModule > 0) {
			setCurrentModule(progress.currentModule - 1);
			setQuizCompleted(isModuleCompleted(progress.currentModule - 1));
		}
	};

	const handleCompleteCourse = () => {
		completeCourse(totalModules);
	};

	if (isCourseCompleted(totalModules)) {
		return (
			<Wrapper className="py-12 px-4">
				<div className="max-w-4xl mx-auto">
					<Link
						to="/cursos"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						Volver a cursos
					</Link>

					<div className="bg-card border border-border rounded-xl p-8 text-center">
						<div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-primary to-accent rounded-full mb-6">
							<Award className="w-10 h-10 text-primary-foreground" />
						</div>

						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							¡Felicitaciones! 🎉
						</h1>

						<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
							Has completado el curso de{" "}
							<span className="font-semibold text-foreground">
								Gestión de Contraseñas Seguras
							</span>
							. Ahora tienes las habilidades necesarias para proteger tus
							cuentas y mantener tu información segura.
						</p>

						<div className="bg-muted/50 rounded-lg p-6 mb-8">
							<h2 className="text-xl font-semibold mb-4">
								Lo que has aprendido:
							</h2>
							<div className="grid md:grid-cols-2 gap-4 text-left">
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2" />
									<div>
										<p className="font-medium">Importancia de contraseñas</p>
										<p className="text-sm text-muted-foreground">
											Por qué son tu primera línea de defensa
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2" />
									<div>
										<p className="font-medium">Contraseñas robustas</p>
										<p className="text-sm text-muted-foreground">
											Características de passwords seguros
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2" />
									<div>
										<p className="font-medium">Gestores de contraseñas</p>
										<p className="text-sm text-muted-foreground">
											Herramientas y 2FA
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-accent rounded-full mt-2" />
									<div>
										<p className="font-medium">Buenas prácticas</p>
										<p className="text-sm text-muted-foreground">
											Recuperación y mantenimiento
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/cursos"
								className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
							>
								Ver más cursos
							</Link>
							<Link
								to="/blog"
								className="px-6 py-3 border border-border rounded-lg hover:bg-accent/10 transition-colors font-medium"
							>
								Leer blog
							</Link>
						</div>
					</div>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper className="py-12 px-4">
			<div className="max-w-4xl mx-auto">
				<Link
					to="/cursos"
					className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
				>
					<ArrowLeft className="w-4 h-4" />
					Volver a cursos
				</Link>

				<div className="mb-8">
					<div className="flex items-center gap-3 mb-4">
						<div className="inline-flex p-3 bg-linear-to-br from-primary to-accent rounded-lg">
							<Lock className="w-6 h-6 text-primary-foreground" />
						</div>
						<div>
							<h1 className="text-3xl md:text-4xl font-bold">
								Gestión de contraseñas seguras
							</h1>
							<p className="text-muted-foreground">
								Aprende a proteger tus cuentas con contraseñas robustas
							</p>
						</div>
					</div>

					<ProgressBar
						current={progress.completedModules.length}
						total={totalModules}
						percentage={progressPercentage}
					/>
				</div>

				<ModuleContent
					title={currentModuleData.title}
					description={currentModuleData.description}
					isCompleted={isModuleCompleted(progress.currentModule)}
				>
					<div className="space-y-6">
						{currentModuleData.content.theory.map((paragraph, index) => (
							<p
								// biome-ignore lint/suspicious/noArrayIndexKey: using index as key is safe here since theory array is static
								key={`theory-${index}`}
								className="text-base leading-relaxed"
							>
								{paragraph}
							</p>
						))}

						{currentModuleData.content.tips && (
							<div className="bg-muted/50 rounded-lg p-4">
								<h3 className="font-semibold mb-3">💡 Consejos prácticos:</h3>
								<ul className="space-y-2">
									{currentModuleData.content.tips.map((tip, index) => (
										<li
											// biome-ignore lint/suspicious/noArrayIndexKey: using index as key is safe here since theory array is static
											key={`tip-${index}`}
											className="text-sm"
										>
											{tip}
										</li>
									))}
								</ul>
							</div>
						)}

						{currentModuleData.content.examples && (
							<div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
								<h3 className="font-semibold mb-3">📝 Ejemplos:</h3>
								<ul className="space-y-2">
									{currentModuleData.content.examples.map((example, index) => (
										<li
											// biome-ignore lint/suspicious/noArrayIndexKey: using index as key is safe here since theory array is static
											key={`example-${index}`}
											className="text-sm"
										>
											{example}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</ModuleContent>

				<div className="mt-8">
					<h3 className="text-xl font-bold mb-4">
						Quiz de comprensión - Módulo {progress.currentModule + 1}
					</h3>
					{quizCompleted ? (
						<div className="bg-card border border-accent rounded-xl p-6 text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-4">
								<Award className="w-6 h-6 text-accent" />
							</div>
							<p className="text-lg font-semibold mb-2">¡Módulo completado!</p>
							<p className="text-sm text-muted-foreground">
								Puedes continuar al siguiente módulo o revisar este contenido.
							</p>
						</div>
					) : (
						<InteractiveQuiz
							questions={currentModuleData.quiz}
							onComplete={handleQuizComplete}
						/>
					)}
				</div>

				<div className="mt-8">
					<ModuleNavigation
						currentModule={progress.currentModule}
						totalModules={totalModules}
						onPrevious={handlePrevious}
						onNext={handleNext}
						onComplete={handleCompleteCourse}
						canGoNext={quizCompleted}
						isLastModule={progress.currentModule === totalModules - 1}
						isModuleCompleted={isModuleCompleted(progress.currentModule)}
					/>
				</div>
			</div>
		</Wrapper>
	);
}
