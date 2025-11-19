import { Link } from "@tanstack/react-router";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Wrapper } from "@/components/ui/wrapper";

const links = [
	{ to: "/cursos", label: "Cursos" },
	{ to: "/blog", label: "Blog" },
];

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 shadow-md bg-card/95 md:bg-transparent md:backdrop-blur-xs ">
			<Wrapper className="flex items-center justify-between relative py-3 px-4">
				<Link className="flex items-center gap-2 md:gap-3 group" to="/">
					<div className="relative">
						<div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
						<div className="relative bg-linear-to-br from-primary to-accent p-1.5 md:p-2 rounded-lg">
							<ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
						</div>
					</div>
					<div className="flex flex-col">
						<span className="text-lg md:text-xl font-extrabold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all">
							Ciberhigiene
						</span>
						<span className="text-xs text-muted-foreground font-medium">
							UNAD
						</span>
					</div>
				</Link>

				<nav aria-label="Navegación principal" className="hidden md:block">
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

				<button
					type="button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition"
					aria-label="Abrir menú"
					aria-expanded={isMenuOpen}
				>
					{isMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</Wrapper>

			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0">
					<div className="bg-card/95 backdrop-blur-md shadow-lg overflow-hidden">
						<nav aria-label="Navegación móvil">
							<ul className="flex flex-col p-2">
								{links.map(({ to, label }) => (
									<li key={to}>
										<Link
											to={to}
											onClick={() => setIsMenuOpen(false)}
											className="block text-lg font-medium border border-transparent hover:border-primary/20 hover:bg-primary/10 px-4 py-3 rounded-lg transition data-status:bg-primary/20 data-status:border-primary/20"
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
}
