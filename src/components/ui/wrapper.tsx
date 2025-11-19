import { cn } from "@/lib/utils";

export function Wrapper({
	className,
	...rest
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("container mx-auto", className)} {...rest} />;
}
