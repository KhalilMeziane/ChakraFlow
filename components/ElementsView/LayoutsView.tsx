"use client";

import {
	AspectRatio,
	Box,
	Heading,
	HStack,
	useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function LayoutsView({ title, href }: { title: string, href: string }) {
	return (
		<Box as={Link} href={href}>
			<AspectRatio ratio={16 / 9} w="full" mb="2">
				<Box
					border="1px"
					borderColor={useColorModeValue("#e5e5e5", "gray.800")}
					p="4"
					bg={useColorModeValue("#fafafa", "#171717")}
					rounded="md"
					_hover={{ bg: useColorModeValue("#fafafa55", "#171717aa") }}
				>
					<HStack h="full" w="full">
						<Box
							h="full"
							border="1px"
							w="25%"
							rounded="sm"
							borderStyle="dashed"
							borderColor={useColorModeValue(
								"gray.400",
								"#1c1c1c"
							)}
							bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
						></Box>
						<Box
							h="full"
							border="1px"
							w="75%"
							rounded="sm"
							borderStyle="dashed"
							borderColor={useColorModeValue(
								"gray.400",
								"#1c1c1c"
							)}
							
						>
							<Box
								h="15%"
								border="1px"
								rounded="sm"
								borderStyle="dashed"
								mb="2"
								borderColor={useColorModeValue(
									"gray.400",
									"#1c1c1c"
								)}
								bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
							></Box>
							<Box
								h="80%"
								border="1px"
								rounded="sm"
								borderStyle="dashed"
								borderColor={useColorModeValue(
									"gray.400",
									"#1c1c1c"
								)}
								bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
							></Box>
						</Box>
					</HStack>
				</Box>
			</AspectRatio>

			<Heading
				fontSize="md"
				fontWeight={"medium"}
				textTransform="capitalize"
			>
				{title}
			</Heading>
		</Box>
	);
}
