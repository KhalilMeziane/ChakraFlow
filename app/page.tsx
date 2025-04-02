'use client'

import { Link } from "@chakra-ui/next-js";
import { Container, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<Container maxW="6xl" py="8">
			<Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
				About
			</Link>
      <Text fontSize={"5xl"}>khalil</Text>
		</Container>
	);
}
