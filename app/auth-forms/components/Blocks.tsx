"use client";

import BlockCard from "@/components/BlockCard";
import {
	Column,
	ColumnString,
	Cover,
	CoverString,
	Image,
	ImageString,
	Plain,
	PlainString,
	Sidebar,
	SidebarString,
	Simple,
	SimpleString,
} from "@/components/ui/forms";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";

export default function Blocks() {
	return (
		<Box as="section" py="5" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="7xl">
				<BlockCard
					Component={<Simple />}
					code={SimpleString}
					title="Simple Auth Form"
					hash="#simple-auth-form"
				/>

				<BlockCard
					Component={<Column />}
					code={ColumnString}
					title="Column Auth Form"
					hash="#column-auth-form"
				/>

				<BlockCard
					Component={<Cover />}
					code={CoverString}
					title="Cover Auth Form"
					hash="#cover-auth-form"
				/>

				<BlockCard
					Component={<Plain />}
					code={PlainString}
					title="Plain Auth Form"
					hash="#plain-auth-form"
				/>

				<BlockCard
					Component={<Sidebar />}
					code={SidebarString}
					title="sidebar Auth Form"
					hash="#sidebar-auth-form"
				/>

				<BlockCard
					// eslint-disable-next-line jsx-a11y/alt-text
					Component={<Image />}
					code={ImageString}
					title="Image Auth Form"
					hash="#image-auth-form"
				/>

			</Container>
		</Box>
	);
}
