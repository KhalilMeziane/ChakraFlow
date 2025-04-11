"use client";

import NewPreview from "@/components/newPreview/Preview";
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
				<NewPreview
					Component={<Simple />}
					code={SimpleString}
					title="Simple Auth Form"
				/>

				<NewPreview
					Component={<Column />}
					code={ColumnString}
					title="Column Auth Form"
				/>

				<NewPreview
					Component={<Cover />}
					code={CoverString}
					title="Cover Auth Form"
				/>

				<NewPreview
					Component={<Plain />}
					code={PlainString}
					title="Plain Auth Form"
				/>

				<NewPreview
					Component={<Sidebar />}
					code={SidebarString}
					title="sidebar Auth Form"
				/>

				<NewPreview
					// eslint-disable-next-line jsx-a11y/alt-text
					Component={<Image />}
					code={ImageString}
					title="Image Auth Form"
				/>

			</Container>
		</Box>
	);
}
