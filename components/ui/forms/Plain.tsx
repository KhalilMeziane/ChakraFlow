"use client";

import {
	Button,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";

export default function Plain() {
	return (
		<Container
			maxW="7xl"
			as="main"
			bg={useColorModeValue("white", "gray.800")}
			color={useColorModeValue("gray.900", "gray.50")}
		>
			<Flex minH="100vh" align="center">
				<VStack
					w={{ base: "100%", md: "60%", lg: "45%", xl: "35%" }}
					mx="auto"
					p="10"
					h="100%"
					spacing="4"
				>
					<Heading as="h1" fontSize="3xl">
						Sign in to Brand
					</Heading>
					<VStack spacing="5" w="100%" align="start" as="form">
						<FormControl>
							<FormLabel>Email Address</FormLabel>
							<Input type="email" placeholder="Email Address" />
						</FormControl>
						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input type="password" placeholder="*******" />
						</FormControl>
						<Button w="full" size="lg" colorScheme="blue">
							Sign In
						</Button>
					</VStack>
					<Text fontWeight="medium">
						Don&apos;t have an account?{" "}
						<Link color="blue.400">Register</Link>
					</Text>
				</VStack>
			</Flex>
		</Container>
	);
}

export const PlainString =`"use client";

import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function Plain() {
  return (
    <Container
      maxW="7xl"
      as="main"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.900", "gray.50")}
    >
      <Flex minH="100vh" align="center">
        <VStack
          w={{ base: "100%", md: "60%", lg: "45%", xl: "35%" }}
          mx="auto"
          p="10"
          h="100%"
          spacing="4"
        >
          <Heading as="h1" fontSize="3xl">
            Sign in to Brand
          </Heading>
          <VStack spacing="5" w="100%" align="start" as="form">
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Email Address" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Button w="full" size="lg" colorScheme="blue">
              Sign In
            </Button>
          </VStack>
          <Text fontWeight="medium">
            Don&apos;t have an account?{" "}
            <Link color="blue.400">Register</Link>
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
}`;
