"use client";

import { ReactNode } from "react";

import { Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import Preview from "@/components/Preview/Preview";

export default function BlockCard({
	Component,
	code,
	title,
	hash,
}: {
	Component: ReactNode;
	code: string;
	title: string;
	hash: string;
}) {
	return (
		<Box mb="6" bg={useColorModeValue("white", "#0a0a0a")} id={hash}>
			<Link href={hash}>
				<Heading as="h3" fontSize="xl" fontWeight="semibold" mb="2">
					#{title}
				</Heading>
			</Link>
			<Preview Component={Component} code={code} />
		</Box>
	);
}
