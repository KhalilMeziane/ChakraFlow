"use client";

import AuthFormView from "@/components/ElementsView/AuthFormView";
import LayoutsView from "@/components/ElementsView/LayoutsView";
import {
	Box,
	Container,
	Grid,
	Heading,
} from "@chakra-ui/react";

export default function Elements() {
	return (
		<Box as="section" py="8" >
			<Container maxW="7xl">
				<Heading
					as="h2"
					fontSize="2xl"
					fontWeight={"bold"}
					textTransform="capitalize"
					mb="3"
				>
					Elements
				</Heading>
				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={4}
				>
					<LayoutsView title="Layouts" href="/layouts" />
					<AuthFormView title="Auth Forms" href="/auth-forms" />

				</Grid>
			</Container>
		</Box>
	);
}
