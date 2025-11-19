import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Wrapper } from "@/components/ui/wrapper";

const links = [
	{ to: "/cursos", label: "Cursos" },
	{ to: "/blog", label: "Blog" },
];

export function Header() {
	return (
		<header className="sticky top-0 z-50 shadow-md backdrop-blur-xs py-3">
			<Wrapper className="flex items-center justify-between">
				<Link className="flex items-center gap-3 group" to="/">
					<div className="relative">
						<div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
						<div className="relative bg-linear-to-br from-primary to-accent p-2 rounded-lg">
							<ShieldCheck className="w-8 h-8 text-primary-foreground" />
						</div>
					</div>
					<div className="flex flex-col">
						<span className="text-xl font-extrabold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all">
							Ciberhigiene
						</span>
						<span className="text-xs text-muted-foreground font-medium">
							UNAD
						</span>
					</div>
				</Link>
				<nav aria-label="Navegación principal">
					<ul className="flex gap-5 items-center">
						{links.map(({ to, label }) => (
							<li key={to}>
								<Link
									to={to}
									className="text-lg font-medium border border-transparent hover:border-primary/20 hover:bg-primary/10 px-3 py-2 rounded-lg transition data-status:bg-primary/20 data-status:border-primary/20"
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Wrapper>
		</header>
	);
}
