import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Award,
	BookOpen,
	Clock,
	Lock,
	Shield,
	Wifi,
	CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Wrapper } from "@/components/ui/wrapper";

export const Route = createFileRoute("/cursos")({
	component: RouteComponent,
});

const courses = [
	{
		id: "contrasenas",
		title: "Gestión de contraseñas seguras",
		description:
			"Aprende a crear contraseñas robustas y gestionar tus credenciales de forma segura con las mejores prácticas.",
		icon: Lock,
		level: "Principiante",
		duration: "30 min",
		modules: 4,
		href: "/curso/contrasenas",
		color: "from-primary to-accent",
		tags: ["Fundamentos", "Autenticación", "2FA"],
	},
	{
		id: "phishing",
		title: "Identificación de phishing",
		description:
			"Detecta correos fraudulentos y protégete del robo de credenciales con técnicas probadas de identificación.",
		icon: Shield,
		level: "Principiante",
		duration: "25 min",
		modules: 3,
		href: "#",
		color: "from-accent to-primary",
		tags: ["Email", "Fraude", "Prevención"],
		comingSoon: true,
	},
	{
		id: "wifi-seguro",
		title: "Navegación segura en Wi-Fi público",
		description:
			"Aprende a proteger tu información al usar redes públicas y evita ataques man-in-the-middle.",
		icon: Wifi,
		level: "Intermedio",
		duration: "35 min",
		modules: 4,
		href: "#",
		color: "from-primary/80 to-accent/80",
		tags: ["Redes", "VPN", "Privacidad"],
		comingSoon: true,
	},
];

function getCourseCompletionStatus(
	courseId: string,
	totalModules: number,
): boolean {
	if (typeof window === "undefined") return false;

	const stored = localStorage.getItem(`course_progress_${courseId}`);
	if (!stored) return false;

	try {
		const progress = JSON.parse(stored);
		return (
			progress.completedModules?.length === totalModules &&
			!!progress.completedAt
		);
	} catch {
		return false;
	}
}

function RouteComponent() {
	const [completedCourses, setCompletedCourses] = useState<
		Record<string, boolean>
	>({});

	useEffect(() => {
		const statuses: Record<string, boolean> = {};
		for (const course of courses) {
			if (!course.comingSoon) {
				statuses[course.id] = getCourseCompletionStatus(
					course.id,
					course.modules,
				);
			}
		}
		setCompletedCourses(statuses);
	}, []);

	return (
		<Wrapper className="py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
						<span className="text-sm font-medium text-accent">
							Aprende a tu ritmo
						</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
						Cursos de ciberhigiene
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Desarrolla habilidades esenciales de seguridad digital con nuestros
						cursos interactivos diseñados para estudiantes universitarios.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
					{courses.map((course) => {
						const Icon = course.icon;
						const isCompleted = completedCourses[course.id] || false;
						const content = (
							<>
								{course.comingSoon && (
									<div className="absolute top-4 right-4 px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
										Próximamente
									</div>
								)}
								{!course.comingSoon && isCompleted && (
									<div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-semibold rounded-full">
										<CheckCircle2 className="w-3.5 h-3.5" />
										Completado
									</div>
								)}{" "}
								<div
									className={`absolute inset-0 bg-linear-to-br ${course.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`}
								/>
								<div className="relative">
									<div
										className={`inline-flex p-3 bg-linear-to-br ${course.color} rounded-lg mb-4`}
									>
										<Icon className="w-6 h-6 text-primary-foreground" />
									</div>

									<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
										{course.title}
									</h3>

									<p className="text-muted-foreground text-sm mb-4">
										{course.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{course.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex items-center gap-4 text-sm text-muted-foreground">
										<div className="flex items-center gap-1">
											<Award className="w-4 h-4" />
											<span>{course.level}</span>
										</div>
										<div className="flex items-center gap-1">
											<Clock className="w-4 h-4" />
											<span>{course.duration}</span>
										</div>
										<div className="flex items-center gap-1">
											<BookOpen className="w-4 h-4" />
											<span>{course.modules} módulos</span>
										</div>
									</div>
								</div>
							</>
						);

						if (course.comingSoon) {
							return (
								<div
									key={course.id}
									className="group relative p-6 bg-card rounded-xl border border-border transition-all opacity-75 cursor-not-allowed"
								>
									{content}
								</div>
							);
						}

						return (
							<Link
								key={course.id}
								to={course.href as "/curso/contrasenas"}
								className="group relative p-6 bg-card rounded-xl border border-border transition-all hover:border-primary/50 hover:shadow-lg"
							>
								{content}
							</Link>
						);
					})}
				</div>

				<div className="bg-card border border-border rounded-xl p-8 text-center">
					<h2 className="text-2xl font-bold mb-3">
						¿Listo para fortalecer tu seguridad digital?
					</h2>
					<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
						Estos cursos te preparan para identificar y prevenir las amenazas
						más comunes que enfrentan los estudiantes universitarios. Todo el
						contenido es gratuito y a tu ritmo.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<div className="w-2 h-2 bg-accent rounded-full" />
							<span>Contenido actualizado</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<div className="w-2 h-2 bg-accent rounded-full" />
							<span>100% gratuito</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<div className="w-2 h-2 bg-accent rounded-full" />
							<span>Aprende a tu ritmo</span>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}
