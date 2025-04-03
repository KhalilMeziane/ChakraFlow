import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	IconButton,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Earth, User, UserPlus } from "lucide-react";

export default function FullWidthDoubleStack() {
	return (
		<>
			<Flex
				as="nav"
				alignItems="center"
				justifyContent="space-between"
				h="16"
				p="3"
				borderBottom="1px"
				borderColor={useColorModeValue("gray.200", "gray.600")}
			>
				<Heading as="h1" size="md">
					Brand
				</Heading>
				<HStack spacing="1">
					<IconButton
						variant="ghost"
						isRound={true}
						size="md"
						aria-label="earth icon"
						icon={<Earth size="20" />}
					/>
					<IconButton
						isRound={true}
						size="md"
						aria-label="user icon"
						icon={<User size="20" />}
					/>
				</HStack>
			</Flex>
			<Flex
				justifyContent="space-between"
				gap="4"
				h="16"
				p="3"
				borderBottom="1px"
				borderColor={useColorModeValue("gray.200", "gray.600")}
			>
				<HStack alignItems="center">
					<Heading as="h2" size="md">
						Overview
					</Heading>
					<Divider
						orientation="vertical"
						display={{ base: "none", md: "block" }}
					/>
					<Breadcrumb display={{ base: "none", md: "block" }}>
						<BreadcrumbItem>
							<BreadcrumbLink >Home</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbLink >Docs</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink >Breadcrumb</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</HStack>
				<Button
					size="sm"
					leftIcon={<UserPlus size="20" />}
					colorScheme="blue"
				>
					New Project
				</Button>
			</Flex>
			<Flex
				as="main"
				minH="78vh"
				align="center"
				justify="center"
				bg={useColorModeValue("gray.50", "gray.900")}
			>
				<Box textAlign="center">
					<Heading as="h3">Box Heading</Heading>
					<Text>Empty Box Content</Text>
				</Box>
			</Flex>
		</>
	);
}

export const FullWidthDoubleStackString = `
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Divider,
	Flex,
	HStack,
	Heading,
	IconButton,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Earth, User, UserPlus } from "lucide-react";

export default function FullWidthDoubleStack() {
	return (
		<>
			<Flex
				as="nav"
				alignItems="center"
				justifyContent="space-between"
				h="16"
				p="3"
				borderBottom="1px"
				borderColor={useColorModeValue("gray.200", "gray.600")}
			>
				<Heading as="h1" size="md">
					Brand
				</Heading>
				<HStack spacing="1">
					<IconButton
						variant="ghost"
						isRound={true}
						size="md"
						aria-label="earth icon"
						icon={<Earth size="20" />}
					/>
					<IconButton
						isRound={true}
						size="md"
						aria-label="user icon"
						icon={<User size="20" />}
					/>
				</HStack>
			</Flex>
			<Flex
				justifyContent="space-between"
				gap="4"
				h="16"
				p="3"
				borderBottom="1px"
				borderColor={useColorModeValue("gray.200", "gray.600")}
			>
				<HStack alignItems="center">
					<Heading as="h2" size="md">
						Overview
					</Heading>
					<Divider orientation="vertical" display={{ base: 'none', md: 'block' }} />
					<Breadcrumb display={{ base: 'none', md: 'block' }}>
						<BreadcrumbItem>
							<BreadcrumbLink >Home</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbLink >Docs</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink >Breadcrumb</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</HStack>
				<Button
					size="sm"
					leftIcon={<UserPlus size="20" />}
					colorScheme="blue"
				>
					New Project
				</Button>
			</Flex>
			<Flex
				as="main"
				minH="78vh"
				align="center"
				justify="center"
				bg={useColorModeValue("gray.50", "gray.900")}
			>
				<Box textAlign="center">
					<Heading as="h3">Box Heading</Heading>
					<Text>Empty Box Content</Text>
				</Box>
			</Flex>
		</>
	);
}`;
