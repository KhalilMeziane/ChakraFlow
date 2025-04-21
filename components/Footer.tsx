"use client";

import {
	Box,
	Container,
	HStack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box as="footer" py="6" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="7xl">
				<HStack justify="center">
					<Text textAlign="center" fontSize="sm">
						©2025 ChakraFlow, All rights reserved.
					</Text>
				</HStack>
			</Container>
		</Box>
	);
}
