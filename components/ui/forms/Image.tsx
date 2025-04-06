"use client";

import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Text,
	VStack,
	Image as Img,
	useColorModeValue,
	Container,
} from "@chakra-ui/react";

export default function Image() {
	return (
		<Container maxW="7xl" as="main" bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.900", "gray.50")}>
			<Flex minH="100vh" alignItems="center">
				<Box w="50%" display={{ base: "none", lg: "block" }}>
					<Box boxSize={{ lg: "lg", xl: "xl" }} mx="auto">
						<Img
							src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
							alt="authentication"
						/>
					</Box>
				</Box>
				<Box
					w={{ base: "100%", lg: "50%" }}
					h="100vh"
					p="16"
				>
					<VStack
						spacing="5"
						justify="center"
						alignItems="stretch"
						h="full"
					>
						<Heading as="h1" fontSize="3xl" textAlign="center">
							Sign in to Brand
						</Heading>
						<VStack spacing="4" as="form">
							<FormControl>
								<FormLabel>Email Address</FormLabel>
								<Input
									type="email"
									placeholder="Email Address"
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Password</FormLabel>
								<Input type="password" placeholder="*******" />
							</FormControl>
							<Button w="full" size="lg" colorScheme="blue">
								Sign In
							</Button>
						</VStack>
						<Text mt="3" fontWeight="medium" textAlign="center">
							Don&apos;t have an account?{" "}
							<Link color="blue.400">Register</Link>
						</Text>
					</VStack>
				</Box>
			</Flex>
		</Container>
	);
}

export const ImageString = `import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack, Image as Img, useColorModeValue, Container } from '@chakra-ui/react'
export default function Image() {
	return (
		<Container maxW="7xl" as="main" bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.900", "gray.50")}>
			<Flex minH="100vh" alignItems="center">
				<Box w="50%" display={{ base: "none", lg: "block" }}>
					<Box boxSize={{ lg: "lg", xl: "xl" }} mx="auto">
						<Img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="authentication" />
					</Box>
				</Box>
				<Box
					w={{ base: "100%", lg: "50%" }}
					h="100vh"
					p="16"
				>
					<VStack
						spacing="5"
						justify="center"
						alignItems="stretch"
						h="full"
					>
						<Heading as="h1" fontSize="3xl" textAlign="center">
							Sign in to Brand
						</Heading>
						<VStack spacing="4" as="form">
							<FormControl>
								<FormLabel>Email Address</FormLabel>
								<Input
									type="email"
									placeholder="Email Address"
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Password</FormLabel>
								<Input type="password" placeholder="*******" />
							</FormControl>
							<Button w="full" size="lg" colorScheme="blue">
								Sign In
							</Button>
						</VStack>
						<Text mt="3" fontWeight="medium" textAlign="center">
							Don&apos;t have an account?{" "}
							<Link color="blue.400">Register</Link>
						</Text>
					</VStack>
				</Box>
			</Flex>
		</Container>
	);
}`;
