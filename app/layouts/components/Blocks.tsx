"use client";

import Preview from "@/components/Preview/Preview";
import {
	FullWidthDoubleStack,
	FullWidthDoubleStackString,
} from "@/components/ui/layouts";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";

export default function Blocks() {
	return (
		<Box as="section" py="5" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="5xl">
				<Block />
			</Container>
		</Box>
	);
}

const Block = () => {
	return (
		<Box pb="8" bg={useColorModeValue("white", "#0a0a0a")}>
			<Preview
				Component={<FullWidthDoubleStack />}
				code={FullWidthDoubleStackString}
			/>
		</Box>
	);
};
