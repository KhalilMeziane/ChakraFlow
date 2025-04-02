import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Container,
	Divider,
	Flex,
	HStack,
	Heading,
	IconButton,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { EarthIcon, Plus, User } from "lucide-react";

export default function ContainerDoubleStack() {
	return (
		<>
			<Box
				as="nav"
				h="16"
				p="3"
				borderBottom="1px"
				borderColor={useColorModeValue("gray.200", "gray.600")}
			>
				<Flex
					as={Container}
					maxW="7xl"
					alignItems="center"
					justifyContent="space-between"
				>
					<Heading as="h1" size="md">
						Brand
					</Heading>
					<HStack spacing="1">
						<IconButton
							variant="ghost"
							isRound={true}
							size="lg"
							aria-label="earth icon"
							icon={<EarthIcon size="20" />}
						/>
						<IconButton
							isRound={true}
							size="lg"
							aria-label="user icon"
							icon={<User size="20" />}
						/>
					</HStack>
				</Flex>
			</Box>
			<Box
				as="nav"
				h="16"
				p="3"
				borderBottom="1px"
				borderColor={useColorModeValue("gray.200", "gray.600")}
			>
				<Flex
					as={Container}
					maxW="7xl"
					justifyContent="space-between"
					gap="4"
				>
					<HStack alignItems="center">
						<Heading as="h2" size="md">
							Overview
						</Heading>
						<Divider orientation="vertical" display={{ base: 'none', md: 'block' }} />
						<Breadcrumb display={{ base: 'none', md: 'block' }}>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem>
								<BreadcrumbLink href="#">Docs</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem isCurrentPage>
								<BreadcrumbLink href="#">
									Breadcrumb
								</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>
					</HStack>
					<Button leftIcon={<Plus size="20" />} colorScheme="blue">
						New Project
					</Button>
				</Flex>
			</Box>
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

export const ContainerDoubleStackString = `import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Divider, Flex, HStack, Heading, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import { EarthIcon, Plus, User } from 'lucide-react'

export default function ContainerDoubleStack() {
  return (
    <>
      <Box as="nav" h='16' p='3' borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.600')}>
        <Flex as={Container} maxW='7xl' alignItems="center" justifyContent="space-between" >
            <Heading as='h1' size="md">Brand</Heading>
            <HStack spacing="1">
            <IconButton variant="ghost" isRound={true} size="lg" aria-label='earth icon'  icon={<EarthIcon size="20" />}/>
            <IconButton isRound={true} size="lg" aria-label='user icon' icon={<User size="20" />}  />
            </HStack>
        </Flex>
      </Box>
      <Box as="nav" h='16' p='3' borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.600')}>
        <Flex as={Container} maxW='7xl' justifyContent="space-between" gap="4">
            <HStack alignItems="center">
            <Heading as="h2" size="md">Overview</Heading>
            <Divider orientation='vertical' display={{ base: 'none', md: 'block' }} />
            <Breadcrumb display={{ base: 'none', md: 'block' }}>
                <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </HStack>
            <Button leftIcon={<Plus size="20" />} colorScheme='blue'>New Project</Button>
        </Flex>
      </Box>
      <Flex as="main" minH="78vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Box textAlign="center">
          <Heading as='h3'>Box Heading</Heading>
          <Text>Empty Box Content</Text>
        </Box>
      </Flex>
    </>
  )
}`;
