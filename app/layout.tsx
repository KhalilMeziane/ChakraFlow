import { Metadata } from "next";

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
	title: {
		default: "Chakra Flow",
		template: "%s | Chakra Flow",
	},
	description: "The Ultimate Chakra UI Dashboard Template and Toolkit",
	keywords:
		"chakra ui dashboard, chakra ui components, next.js dashboard, chakra ui admin panel, chakra ui layout, chakra ui sidebar, chakra ui navbar, chakra ui cards, chakra ui tables, chakra ui widgets, chakra ui charts, chakra ui statistics, chakra ui modals, chakra ui forms, chakra ui buttons, chakra ui theme, chakra ui dark mode, chakra ui ui kit, chakra ui responsiveness, chakra ui best practices, chakra ui customization",
	openGraph: {
		title: "Chakra Flow",
		description: "The Ultimate Chakra UI Dashboard Template and Toolkit",
		url: "https://chakra-flow.vercel.app",
		type: "website",
		images: [
			{
				url: "https://chakra-flow.vercel.app/thumbnail.png",
				width: 1200,
				height: 630,
				alt: "Chakra Flow Dashboard Thumbnail",
			},
		],
		},
};

import { Providers } from "./providers";
import { fonts } from "./fonts";
import Footer from "../components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fonts.poppins.className}>
				<Providers>
					<Flex w="full" h="100vh" minH="100vh" flexDir="column">
						<Navbar />
						<Box flexGrow="2" pt="10">
							{children}
						</Box>
						<Footer />
					</Flex>
				</Providers>
				<GoogleAnalytics gaId="G-TFZDXY5B1F" />
			</body>
		</html>
	);
}
