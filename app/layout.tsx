"use client";

import { Providers } from "./providers";
import { fonts } from "./fonts";
import Footer from "../components/Footer";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
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
					<Flex
						w="full"
						h="100vh"
						minH="100vh"
						flexDir="column"
						bg={useColorModeValue("white", "#0a0a0a")}
					>
						<Navbar />
						<Box flexGrow="1" h="100%">
							{children}
						</Box>
						<Footer />
					</Flex>
				</Providers>
			</body>
		</html>
	);
}
