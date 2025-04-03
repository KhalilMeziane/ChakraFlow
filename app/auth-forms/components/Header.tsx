"use client";

import {
	Box,
	Container,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

export default function Header() {
	return (
		<Box as="header" py="10" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="7xl">
				<Heading
					as="h1"
					fontWeight={"bold"}
					size="lg"
					mb="2"
					textColor={useColorModeValue("gray.900", "gray.100")}
				>
					Auth Forms Blocks
				</Heading>
				<Text
					fontSize="md"
					textColor={useColorModeValue("gray.700", "gray.300")}
				>
					Reusable authentication form blocks designed for consistency
					and usability across the system.
				</Text>
			</Container>
		</Box>
	);
}
