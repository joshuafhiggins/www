import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Realm",
	description: "Chatting, for the rest of us.",
	keywords: ["Realm", "Communication", "Realm Chat", "Communitity", "Internet", "Fast"],
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning>
			<head>
				<link rel="me" href="https://joshuafhiggins.github.io/"></link>
			</head>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<StyledComponentsRegistry>
						<div className="mt-5">
							{children}
							<Navigation />
						</div>
					</StyledComponentsRegistry>
				</ThemeProvider>
			</body>
		</html>
	);
}
