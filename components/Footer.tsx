"use client";

import {
	Box,
	Container,
	HStack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<Box as="footer" bg={useColorModeValue("#fafafa", "#171717")} py="6">
			<Container maxW="7xl">
				<HStack justify="space-between">
					<Text textAlign="center" fontSize="sm">
						©2025 ChakraFlow, All rights reserved.
					</Text>
					<HStack>
						<Link href="https://www.linkedin.com/in/khalil-meziane/" target="_blank">
							<Linkedin size="20" />
						</Link>
						<Link href="https://x.com/khalil_meziane" target="_blank">
							<Twitter size="20" />
						</Link>
						<Link href="https://github.com/KhalilMeziane" target="_blank">
							<Github size="20" />
						</Link>
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
}
