"use client";

import {
	Avatar,
	Box,
	Container,
	Heading,
	HStack,
	Link as ChLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Github } from "lucide-react";
import Link from "next/link";

interface Contributor {
	username: string;
	name: string;
	avatar: string;
	profileUrl: string;
}

const contributors: Contributor[] = [
	{
		username: " KhalilMeziane ",
		name: " Khalil Meziane",
		avatar: "https://avatars.githubusercontent.com/u/67861260?v=4",
		profileUrl: "https://github.com/KhalilMeziane",
	},
	{
		username: "Aladinta68",
		name: " TAHAR ABBES ALA EDDINE ",
		avatar: "https://avatars.githubusercontent.com/u/105116768?v=4",
		profileUrl: "https://github.com/Aladinta68",
	},
];

export default function Contributors() {
	return (
		<Box as="section" py="10" bg={useColorModeValue('#f9fafb', '#171717')}>
			<Container maxW="7xl">
				<Box fontSize="sm" mb="2">
					<HStack
						justifyContent="center"
						w="fit-content"
						bg={useColorModeValue("white", "#0a0a0a")}
						px="6"
						py="1.5"
						rounded="full"
						mx="auto"
					>
						<Github size="16" />
						<span>Open Source</span>
					</HStack>
				</Box>
				<Heading as="h2" fontSize="3xl" textAlign="center" mb="4" fontWeight="bold">
					Our Contributors
				</Heading>
				<HStack spacing="4" mx="auto" flexWrap="wrap" justifyContent="center">
					{contributors.map((contributor) => (
						<Contributor
							contributor={contributor}
							key={contributor.username}
						/>
					))}
				</HStack>
			</Container>
		</Box>
	);
}

const Contributor = ({ contributor }: { contributor: Contributor }) => {
	return (
		<ChLink
			as={Link}
			key={contributor.username}
			href={contributor.profileUrl}
			target="_blank"
			rel="noopener noreferrer"
			title={contributor.name}
			display="block"
			transition="transform 0.2s"
			_hover={{ transform: "scale(1.10)" }}
			_focus={{
				outline: "none",
				ring: 2,
				ringColor: "primary",
				ringOffset: 2,
			}}
			borderRadius="full"
		>
			<Avatar
				name={contributor.username}
				src={contributor.avatar}
				size="lg"
			/>
		</ChLink>
	);
};
