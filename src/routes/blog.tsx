import { createFileRoute } from "@tanstack/react-router";
import { Wrapper } from "@/components/ui/wrapper";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Wrapper>Hello "/blog"!</Wrapper>;
}
