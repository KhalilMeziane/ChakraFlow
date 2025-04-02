import type { Metadata } from "next";

import { Providers } from "./providers";
import { fonts } from "./fonts";
import Footer from "../components/Footer";
import { Box, Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
	title: {
		default: "Chakra Flow",
		template: "%s | Chakra Flow",
	},
	description: "The Ultimate Chakra UI Dashboard Template and Toolkit",
	keywords:
		"chakra ui dashboard, chakra ui components, next.js dashboard, chakra ui admin panel, chakra ui layout, chakra ui sidebar, chakra ui navbar, chakra ui cards, chakra ui tables, chakra ui widgets, chakra ui charts, chakra ui statistics, chakra ui modals, chakra ui forms, chakra ui buttons, chakra ui theme, chakra ui dark mode, chakra ui ui kit, chakra ui responsiveness, chakra ui best practices, chakra ui customization",
};

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
						<Box flexGrow="2">{children}</Box>
						<Footer />
					</Flex>
				</Providers>
			</body>
		</html>
	);
}
