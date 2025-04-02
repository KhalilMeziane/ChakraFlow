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
		<Box as="section" py="8" bg={useColorModeValue("white", "#0a0a0a")}>
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
				<Grid templateColumns="repeat(3, 1fr)" gap={4}>
					<Card title="Layouts" />
				</Grid>
			</Container>
		</Box>
	);
}

const Card = ({ title }: { title: string }) => {
	return (
		<Box as={Link} href="/layouts">
			<Box
				border="1px"
				borderColor={useColorModeValue("#e5e5e5", "gray.800")}
				p="4"
				bg={useColorModeValue("#fafafa", "#171717")}
				rounded="md"
				h="44"
				mb="2"
				_hover={{ bg: useColorModeValue("#fafafa55", "#171717aa") }}
			>
				<HStack h="full">
					<Box
						h="full"
						border="1px"
						w="25%"
						rounded="sm"
						borderStyle="dashed"
						borderColor={useColorModeValue("gray.400", "#1c1c1c")}
						bg={useColorModeValue("blue.50", "blue.700")}
					></Box>
					<Box
						h="full"
						border="1px"
						w="75%"
						rounded="sm"
						p="3"
						borderStyle="dashed"
						borderColor={useColorModeValue("gray.400", "#1c1c1c")}
						bg={useColorModeValue("white", "#0a0a0a")}
					>
						<Box
							h="15%"
							border="1px"
							rounded="sm"
							borderStyle="dashed"
							mb="2"
							borderColor={useColorModeValue(
								"gray.400",
								"#1c1c1c"
							)}
							bg={useColorModeValue("blue.50", "blue.700")}
						></Box>
						<Box
							h="80%"
							border="1px"
							rounded="sm"
							borderStyle="dashed"
							borderColor={useColorModeValue(
								"gray.400",
								"#1c1c1c"
							)}
							bg={useColorModeValue("blue.50", "blue.700")}
						></Box>
					</Box>
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
	);
};
