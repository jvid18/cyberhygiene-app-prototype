import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrapper } from "@/components/ui/wrapper";

export const Route = createFileRoute("/")({
	component: App,
});

const navigationCards = [
	{
		title: "Cursos",
		description:
			"Aprende las mejores prácticas de seguridad digital a través de módulos interactivos y gamificados.",
		href: "/cursos",
		icon: "📚",
		gradient: "from-primary to-accent",
	},
	{
		title: "Blog",
		description:
			"Mantente actualizado con artículos y noticias sobre ciberseguridad y tendencias digitales.",
		href: "/blog",
		icon: "📝",
		gradient: "from-accent to-primary",
	},
];

const features = [
	{
		icon: "🔐",
		title: "Gestión de contraseñas",
		description: "Aprende a crear y gestionar contraseñas seguras y robustas.",
	},
	{
		icon: "🎣",
		title: "Identificación de phishing",
		description:
			"Detecta correos fraudulentos y protégete del robo de información.",
	},
	{
		icon: "📡",
		title: "Uso seguro de Wi-Fi",
		description: "Navega de forma segura en redes públicas y privadas.",
	},
	{
		icon: "🎮",
		title: "Gamificación",
		description: "Completa retos interactivos y gana puntos mientras aprendes.",
	},
];

function App() {
	return (
		<Wrapper className="py-12 px-4">
			<section className="text-center mb-20">
				<div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
					<span className="text-sm font-medium text-primary">
						Proyecto UNAD - Ciberhigiene
					</span>
				</div>
				<h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
					Plataforma de Ciberhigiene
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
					Protege tu identidad digital y aprende las prácticas esenciales de
					seguridad informática para el entorno universitario.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						to="/cursos"
						className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
					>
						Explorar cursos
					</Link>
					<Link
						to="/blog"
						className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-border"
					>
						Leer blog
					</Link>
				</div>
			</section>

			<section className="mb-20">
				<h2 className="text-3xl font-bold text-center mb-4">
					Sobre el proyecto
				</h2>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<p className="text-muted-foreground leading-relaxed mb-4">
						Este proyecto busca reducir la exposición de estudiantes
						universitarios a fraudes digitales como phishing y robo de
						credenciales, fortaleciendo sus competencias en ciberseguridad.
					</p>
					<p className="text-muted-foreground leading-relaxed">
						A través de módulos de aprendizaje interactivos y gamificación, los
						estudiantes desarrollarán habilidades críticas para proteger su
						información académica, personal y financiera.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
						>
							<div className="text-4xl mb-3">{feature.icon}</div>
							<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
							<p className="text-sm text-muted-foreground">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-3xl font-bold text-center mb-8">
					Comienza tu aprendizaje
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{navigationCards.map((card) => (
						<Link
							key={card.title}
							to={card.href}
							className="group relative p-8 bg-card rounded-xl border border-border hover:border-primary transition-all overflow-hidden"
						>
							<div
								className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
							/>
							<div className="relative">
								<div className="text-5xl mb-4">{card.icon}</div>
								<h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
									{card.title}
								</h3>
								<p className="text-muted-foreground">{card.description}</p>
								<div className="mt-6 flex items-center text-primary font-medium">
									Explorar
									<svg
										className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										role="img"
										aria-hidden="true"
									>
										<title>Flecha</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="mt-20 p-8 bg-linear-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
				<div className="max-w-2xl mx-auto text-center">
					<h3 className="text-2xl font-bold mb-3">
						Contribuyendo a un Internet Más Seguro
					</h3>
					<p className="text-muted-foreground mb-4">
						Alineado con los objetivos de desarrollo sostenible (ODS 4, 9 y 16),
						este proyecto promueve la educación de calidad, la innovación
						digital y la reducción del ciberdelito.
					</p>
					<div className="flex flex-wrap justify-center gap-2 text-sm">
						<span className="px-3 py-1 bg-primary/20 rounded-full">
							ODS 4: Educación
						</span>
						<span className="px-3 py-1 bg-accent/20 rounded-full">
							ODS 9: Innovación
						</span>
						<span className="px-3 py-1 bg-primary/20 rounded-full">
							ODS 16: Justicia
						</span>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}
