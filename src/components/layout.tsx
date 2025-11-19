import { Header } from "@/components/ui/header";

export function Layout({ children }: React.PropsWithChildren) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
