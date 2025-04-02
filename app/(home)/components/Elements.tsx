"use client";

import {
	Box,
	Container,
	Grid,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react";

export default function Elements() {
	return (
		<Box as="section" py="8">
			<Container maxW="7xl">
				<Heading
					as="h2"
					fontSize="2xl"
					fontWeight={"bold"}
					textTransform="capitalize"
					mb="3"
				>
					Elements
				</Heading>
				<Grid templateColumns="repeat(4, 1fr)" gap={4}>
					<Card title="Layouts" />
					<Card title="Forms" />
				</Grid>
			</Container>
		</Box>
	);
}

const Card = ({ title }: { title: string }) => {
	return (
		<Box>
			<Box
				border="1px"
				borderColor={useColorModeValue("#e5e5e5", "gray.800")}
				p="4"
				bg={useColorModeValue("#fafafa", "#171717")}
				rounded="md"
				h="44"
				mb="2"
			></Box>
			<Heading
				fontSize="md"
				fontWeight={"medium"}
				textTransform="capitalize"
			>
				{title}
			</Heading>
		</Box>
	);
};
