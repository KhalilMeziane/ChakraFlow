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
		<Box as="header" py="8">
			<Container maxW="7xl">
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
					Layouts are used to structure and organize content within a
					system, ensuring consistency and usability across pages and
					features.
				</Text>
			</Container>
		</Box>
	);
}
