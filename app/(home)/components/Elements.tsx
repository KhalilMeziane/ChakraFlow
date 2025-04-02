"use client";

import {
	Box,
	Container,
	Grid,
	Heading,
	HStack,
	useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Elements() {
	return (
		<Box as="section" py="8">
			<Container maxW="5xl">
				<Heading
					as="h2"
					fontSize="2xl"
					fontWeight={"bold"}
					textTransform="capitalize"
					mb="3"
				>
					Elements
				</Heading>
				<Grid templateColumns="repeat(3, 1fr)" gap={4}>
					<Card title="Layouts" />
				</Grid>
			</Container>
		</Box>
	);
}

const Card = ({ title }: { title: string }) => {
	return (
		<Link href="/layouts">
			<Box>
				<Box
					border="1px"
					borderColor={useColorModeValue("#e5e5e5", "gray.800")}
					p="4"
					bg={useColorModeValue("#fafafa", "#171717")}
					rounded="md"
					h="44"
					mb="2"
				>
					<HStack h="full">
						<Box
							h="full"
							border="1px"
							w="25%"
							rounded="sm"
							borderStyle="dashed"
							borderColor={useColorModeValue(
								"gray.400",
								"gray.200"
							)}
							bg={useColorModeValue("blue.50", "blue.50")}
						></Box>
						<Box
							h="full"
							border="1px"
							w="75%"
							rounded="sm"
							borderStyle="dashed"
							borderColor={useColorModeValue(
								"gray.400",
								"gray.200"
							)}
							bg={useColorModeValue("white", "gray.700")}
						></Box>
					</HStack>
				</Box>
				<Heading
					fontSize="md"
					fontWeight={"medium"}
					textTransform="capitalize"
				>
					{title}
				</Heading>
			</Box>
		</Link>
	);
};
