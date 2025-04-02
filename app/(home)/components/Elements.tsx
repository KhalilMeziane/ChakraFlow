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
					fontSize="xl"
					fontWeight={"semibold"}
					textTransform="capitalize"
					mb="3"
				>
					layout Blocks
				</Heading>
				<Grid templateColumns="repeat(4, 1fr)" gap={4}>
					<Card title="full width double stack" />
					<Card title="full width double stack" />
					<Card title="full width double stack" />
					<Card title="full width double stack" />
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
