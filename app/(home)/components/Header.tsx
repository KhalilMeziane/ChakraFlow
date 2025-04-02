"use client";

import {
	Box,
	Container,
	HStack,
	Heading,
	Text,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";

import { ChakraUiIcon, NextIcon, ReactIcon, TypescriptIcon } from "@/assets/icons";
import Image from "next/image";

export default function Header() {
	return (
		<Box as="header" py="10" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="7xl">
				<VStack
					mx="auto"
					justify="center"
					align="center"
					w={{ base: "100%", md: "80%", lg: "70%", xl: "80%" }}
				>
					<Box
						fontWeight="medium"
						bg={useColorModeValue("white", "gray.800")}
						color="blue.500"
						px="6"
						py="2"
						rounded="full"
					>
						Open Source, and Free
					</Box>
					<Heading as="h1" fontWeight={"extrabold"} textAlign="center" size="2xl" py="3" textColor={useColorModeValue('#0a0a0a', '#dadada')}>
						The Ultimate Chakra UI Dashboard Template and Toolkit
					</Heading>
					<Text textAlign="center" fontSize="md" textColor={useColorModeValue('#0a0a00', '#dadadd')}>
						Your Chakra UI-powered dashboard solution. Packed with
						features like responsive design, dashboard elements,
						pages, UI components, and dynamic charts, ChakraFlow
						simplifies backend development. It&apos;s available for
						free and For developers of all levels.
					</Text>
					<HStack spacing="4" pt="5">
						<Image
							width="36"
							height="36"
							src={ChakraUiIcon}
							alt="chakra-ui logo"
						/>
						<Image
							width="36"
							height="36"
							src={ReactIcon}
							alt="reactjs logo"
						/>
						<Image
							width="36"
							height="36"
							src={NextIcon}
							alt="nextjs logo"
						/>
						<Image
							width="36"
							height="36"
							src={TypescriptIcon}
							alt="typescript logo"
						/>
					</HStack>
				</VStack>
			</Container>
		</Box>
	);
}
