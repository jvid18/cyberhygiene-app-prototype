import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { Wrapper } from "@/components/ui/wrapper";

export const Route = createFileRoute("/blog/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	const { slug: path } = Route.useParams();
	const post = allPosts.find((p) => p._meta.path === path);

	if (!post) {
		return (
			<Wrapper className="py-12 px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
					<p className="text-muted-foreground mb-8">
						El artículo que buscas no existe o ha sido eliminado.
					</p>
					<Link
						to="/blog"
						className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Volver al blog
					</Link>
				</div>
			</Wrapper>
		)
	}

	return (
		<Wrapper className="py-12 px-4">
			<article className="max-w-3xl mx-auto">
				<Link
					to="/blog"
					className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
				>
					<ArrowLeft className="w-4 h-4" />
					Volver al blog
				</Link>

				<header className="mb-8">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
						{post.title}
					</h1>
					<p className="text-xl text-muted-foreground mb-6">
						{post.description}
					</p>
					<div className="flex flex-wrap gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
						<div className="flex items-center gap-1">
							<Calendar className="w-4 h-4" />
							<span>
								{new Date(post.date).toLocaleDateString("es-CO", {
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
						<div className="flex items-center gap-2 flex-wrap mt-4">
							<Tag className="w-4 h-4 text-muted-foreground" />
							{post.tags.map((tag: string) => (
								<span
									key={tag}
									className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</header>

				<div
					className="prose prose-invert prose-lg max-w-none
						prose-headings:text-foreground 
						prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h1:mt-8
						prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-3 prose-h2:mt-6
						prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-2 prose-h3:mt-4
						prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
						prose-a:text-primary prose-a:no-underline hover:prose-a:underline
						prose-strong:text-foreground prose-strong:font-semibold
						prose-code:text-accent prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
						prose-pre:bg-muted prose-pre:border prose-pre:border-border
						prose-ul:text-muted-foreground prose-ul:mb-4
						prose-ol:text-muted-foreground prose-ol:mb-4
						prose-li:mb-1
						prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Content from markdown files is safe
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>

				<footer className="mt-12 pt-8 border-t border-border">
					<Link
						to="/blog"
						className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Ver más artículos
					</Link>
				</footer>
			</article>
		</Wrapper>
	)
}
