import * as React from "react";

import { ny } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export const components: {
	title: string;
	href: string;
	description: string;
	isTargetBlank?: boolean;
	rel?: "noopener noreferrer";
}[] = [
	{
		title: "Privacy Policy",
		href: "/privacy-policy",
		description:
			"Read our privacy policy to learn more about how we handle your data.",
		isTargetBlank: true,
	},
	{
		title: "Discord",
		href: "https://discord.gg/zen-browser",
		description:
			"Join our Discord server to chat with the community and get support.",
		isTargetBlank: true,
		rel: "noopener noreferrer",
	},
	{
		title: "Source Code",
		href: "https://github.com/zen-browser",
		description:
			"View the source code on GitHub and contribute to the project.",
		isTargetBlank: true,
		rel: "noopener noreferrer",
	},
	{
		title: "Branding Assets",
		href: "/branding-assets",
		description: "Download our branding assets to use in your projects.",
	},
	{
		title: "About",
		href: "/about",
		description:
			"Learn more about the Zen Browser project and the team behind it.",
	},
	{
		title: "Documentation",
		href: "https://docs.zen-browser.app/",
		description: "Read the documentation to learn more about Zen Browser.",
		isTargetBlank: true,
	},
];

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={ny(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
const ListItem2 = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					data-umami-event={title}
					ref={ref}
					className={ny(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
ListItem.displayName = "ListItem2";

export function Navigation() {
	return (
		<div className="border-grey fixed left-0 top-0 z-40 flex w-full items-center justify-center border-b bg-background p-2">
			<MobileNav />
			<NavigationMenu>
				<NavigationMenuList className="hidden w-full py-3 sm:flex">
					<NavigationMenuItem className="mr-20 cursor-pointer">
						<NavigationMenuLink href="/">
							<Logo withText />
						</NavigationMenuLink>
					</NavigationMenuItem>
					{/* <ModeToggle /> */}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
