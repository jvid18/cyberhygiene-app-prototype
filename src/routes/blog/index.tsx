import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { Calendar, Tag, User } from "lucide-react";
import { Wrapper } from "@/components/ui/wrapper";

export const Route = createFileRoute("/blog/")({
	component: RouteComponent,
});

const sortedPosts = [...allPosts].sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

function RouteComponent() {
	return (
		<Wrapper className="py-12 px-4">
			<div className="max-w-4xl mx-auto">
				<div className="mb-12 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
						Blog de Ciberseguridad
					</h1>
					<p className="text-lg text-muted-foreground">
						Artículos, guías y consejos para mejorar tu seguridad digital
					</p>
				</div>

				<div className="grid gap-6">
					{sortedPosts.map((post) => (
						<Link
							key={post._meta.path}
							to={`/blog/${post._meta.path}` as unknown as string}
							className="group block p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
						>
							<div className="flex flex-col gap-3">
								<h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
									{post.title}
								</h2>
								<p className="text-muted-foreground">{post.description}</p>
								<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
									<div className="flex items-center gap-1">
										<Calendar className="w-4 h-4" />
										<span>
											{new Date(post.date).toLocaleDateString("es-ES", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
									</div>
									<div className="flex items-center gap-1">
										<User className="w-4 h-4" />
										<span>{post.author}</span>
									</div>
								</div>
								{post.tags && post.tags.length > 0 && (
									<div className="flex items-center gap-2 flex-wrap">
										<Tag className="w-4 h-4 text-muted-foreground" />
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
											>
												{tag}
											</span>
										))}
									</div>
								)}
							</div>
						</Link>
					))}
				</div>

				{sortedPosts.length === 0 && (
					<div className="text-center py-12">
						<p className="text-muted-foreground">
							No hay artículos disponibles en este momento.
						</p>
					</div>
				)}
			</div>
		</Wrapper>
	);
}
