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
		<Box as="header" py="8" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="5xl">
				<Heading
					as="h1"
					fontWeight={"bold"}
					size="lg"
					mb="2"
					textColor={useColorModeValue("gray.900", "gray.100")}
				>
					Layout
				</Heading>
				<Text
					fontSize="md"
					textColor={useColorModeValue("gray.700", "gray.300")}
				>
					Layouts help structure and organize content across pages,
					ensuring consistency and usability in the system.
				</Text>
			</Container>
		</Box>
	);
}
