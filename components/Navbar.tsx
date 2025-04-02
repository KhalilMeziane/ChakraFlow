"use client";

import {
	Box,
	Flex,
	Text,
	Stack,
	Container,
	useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
	return (
		<Box
			as="nav"
			bg={useColorModeValue("#fafafa", "#171717")}
			color={useColorModeValue("gray.600", "white")}
			minH={"50px"}
			py={{ base: 2 }}
			px={{ base: 4 }}
			borderBottom={1}
			borderStyle={"solid"}
			borderColor={useColorModeValue("gray.200", "gray.900")}
		>
			<Container maxW="5xl">
				<Flex align={"center"}>
					<Flex flex={{ base: 1 }}>
						<Text
							as={Link}
							href="/"
							fontSize="xl"
							fontWeight="bold"
							color={useColorModeValue("gray.800", "white")}
						>
							ChakraFlow
						</Text>
					</Flex>

					<Stack
						flex={{ base: 1, md: 0 }}
						justify={"flex-end"}
						direction={"row"}
						spacing={6}
					>
						<ThemeToggle />
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
}
