"use client";

import {
	AspectRatio,
	Box,
	Heading,
	HStack,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function AuthFormView({
	title,
	href,
}: {
	title: string;
	href: string;
}) {
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
					<VStack w="full">
						<Box
							border="1px"
							h="4"
							w="50%"
							rounded="sm"
							borderStyle="solid"
							borderColor={useColorModeValue(
								"gray.300",
								"#1c1c1c"
							)}
							bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
						></Box>
						<Box
							border="1px"
							h="4"
							w="50%"
							rounded="sm"
							borderStyle="solid"
							borderColor={useColorModeValue(
								"gray.300",
								"#1c1c1c"
							)}
							bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
						></Box>
						<Box
							border="1px"
							h="4"
							w="50%"
							rounded="sm"
							borderStyle="solid"
							borderColor={useColorModeValue(
								"gray.300",
								"#1c1c1c"
							)}
							bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
						></Box>

						<HStack w="50%" justify="end">
							<Box
								border="1px"
								h="4"
								w="20%"
								rounded="sm"
								borderStyle="solid"
								borderColor={useColorModeValue(
									"gray.300",
									"#1c1c1c"
								)}
								bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
							></Box>
							<Box
								border="1px"
								h="4"
								w="20%"
								rounded="sm"
								borderStyle="solid"
								borderColor={useColorModeValue(
									"gray.300",
									"#1c1c1c"
								)}
								bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
							></Box>
						</HStack>
					</VStack>
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
