import { createFileRoute } from "@tanstack/react-router";
import { Wrapper } from "@/components/ui/wrapper";

export const Route = createFileRoute("/cursos")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Wrapper>Hello "/cursos/"!</Wrapper>;
}
