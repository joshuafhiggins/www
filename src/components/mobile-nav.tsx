"use client";

import { SidebarOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Logo from "./logo";
import { ny } from "@/lib/utils";
import { components } from "./navigation";

interface MobileLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
	href: string;
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: MobileLinkProps) {
	const router = useRouter();
	return (
		<a
			href={href}
			onClick={() => {
				router.push(href);
				onOpenChange?.(false);
			}}
			className={ny(className, "my-4")}
			{...props}
		>
			{children}
		</a>
	);
}

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<div className="space-between z-40 flex w-full items-center sm:hidden">
					<Logo className="ml-4 size-6" />
					<Button
						variant="ghost"
						className="ml-auto mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
					>
						<SidebarOpen className="size-6 opacity-0" />
					</Button>
				</div>
			</SheetTrigger>
			<SheetContent side="left" className="pr-0">	
			</SheetContent>
		</Sheet>
	);
}
