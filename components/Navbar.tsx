"use client";

import {
	Box,
	Flex,
	Text,
	Stack,
	Container,
	useColorModeValue,
	IconButton,
} from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { Github } from "lucide-react";

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
			pos={"fixed"}
			top="0"
			w="full"
			zIndex="99"
		>
			<Container maxW="7xl">
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
						spacing={1}
					>
						<ThemeToggle />
						<IconButton
							as={Link}
							alignSelf={"center"}
							size={"sm"}
							backgroundColor={useColorModeValue(
								"white",
								"gray.700"
							)}
							border={"1px"}
							borderColor={useColorModeValue(
								"gray.200",
								"gray.700"
							)}
							variant={"ghost"}
							aria-label={"Toggle Color Mode"}
							icon={<Github size="20" />}
							href="https://github.com/KhalilMeziane/ChakraFlow"
							target="_blank"
						/>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
}
