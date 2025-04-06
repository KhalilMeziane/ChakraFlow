"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" py="10" bg={useColorModeValue("white", "#0a0a0a")}>
      <Container maxW="7xl">
        <Heading
          as="h1"
          fontWeight={"bold"}
          size="lg"
          mb="2"
          textColor={useColorModeValue("gray.900", "gray.100")}
        >
          AI Chat
        </Heading>
        <Text
          fontSize="md"
          textColor={useColorModeValue("gray.700", "gray.300")}
        >
          An AI-powered chat interface to assist users with various queries,
          from weather updates to book recommendations.
        </Text>
      </Container>
    </Box>
  );
}
