"use client";

import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box as="footer" bg={useColorModeValue("#fafafa", "#171717")} py="6">
			<Container maxW="7xl">
				<Text textAlign="center" fontSize="sm">©2025 ChakraFlow, All rights reserved.</Text>
			</Container>
		</Box>
	);
}
