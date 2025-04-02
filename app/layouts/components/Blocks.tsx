"use client";

import Preview from "@/components/Preview/Preview";
import {
	FullWidthDoubleStack,
	FullWidthDoubleStackString,
} from "@/components/ui/layouts";
import { Box, Container } from "@chakra-ui/react";

export default function Blocks() {
	return (
		<Box as="section">
			<Container maxW="5xl">
				<Block />
			</Container>
		</Box>
	);
}

const Block = () => {
	return (
		<Box my="1.5">
			<Preview
				Component={<FullWidthDoubleStack />}
				code={FullWidthDoubleStackString}
			/>
		</Box>
	);
};
