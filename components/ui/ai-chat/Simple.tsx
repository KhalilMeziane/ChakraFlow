"use client";

import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

export default function Simple() {
  const cardBgColor = useColorModeValue("teal.600", "teal.700");
  const cardHoverBgColor = useColorModeValue("teal.500", "teal.600");
  const textColor = useColorModeValue("white", "gray.200");

  const prompts = [
    "What's the weather like today?",
    "Share the closest coffee shop around me",
    "What does React.js do?",
    "Recommend some books I can read",
  ];

  return (
    <Flex
      minH="100vh"
      align="center"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <VStack
        w={{ base: "100%", sm: "85%", md: "80%", lg: "75%", xl: "65%" }}
        mx="auto"
        p={{ base: "2", sm: "10" }}
        h="100%"
        rounded="lg"
        shadow="sm"
        bg={useColorModeValue("white", "gray.800")}
        spacing="6"
      >
        <Heading as="h1" fontSize="3xl" color="teal.400">
          Hello, User
        </Heading>
        <Text fontSize="lg">How can I help you today?</Text>
        <SimpleGrid
          my={8}
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={4}
          w="100%"
        >
          {prompts.map((prompt, index) => (
            <Button
              key={index}
              bg={cardBgColor}
              color={textColor}
              p={4}
              rounded="md"
              _hover={{ bg: cardHoverBgColor }}
              textAlign="left"
              h="auto"
              whiteSpace="normal"
            >
              {prompt}
            </Button>
          ))}
        </SimpleGrid>
        <Flex w="100%" align="center" gap={2}>
          <Input
            placeholder="Ask me anything..."
            size="lg"
            rounded="md"
            borderColor={useColorModeValue("gray.300", "gray.600")}
            _focus={{ borderColor: useColorModeValue("teal.400", "teal.400") }}
          />
          <IconButton
            aria-label="Send message"
            icon={<FaPaperPlane />}
            colorScheme="teal"
            size="lg"
            rounded="md"
          />
          <IconButton
            aria-label="Voice input"
            icon={<FaMicrophone />}
            colorScheme="gray"
            size="lg"
            rounded="md"
          />
        </Flex>
        <Text
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.500")}
          textAlign="center"
        >
          OUR AI MODEL CAN MAKE MISTAKES. PLEASE BE KIND AND RESPECTFUL.
        </Text>
      </VStack>
    </Flex>
  );
}
export const SimpleString = `import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

export default function Simple() {
  const cardBgColor = useColorModeValue("teal.600", "teal.700");
  const cardHoverBgColor = useColorModeValue("teal.500", "teal.600");
  const textColor = useColorModeValue("white", "gray.200");

  const prompts = [
    "What's the weather like today?",
    "Share the closest coffee shop around me",
    "What does React.js do?",
    "Recommend some books I can read",
  ];

  return (
    <Flex
      minH="100vh"
      align="center"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <VStack
        w={{ base: "100%", sm: "85%", md: "80%", lg: "75%", xl: "65%" }}
        mx="auto"
        p={{ base: "2", sm: "10" }}
        h="100%"
        rounded="lg"
        shadow="sm"
        bg={useColorModeValue("white", "gray.800")}
        spacing="6"
      >
        <Heading as="h1" fontSize="3xl" color="teal.400">
          Hello, User
        </Heading>
        <Text fontSize="lg">How can I help you today?</Text>
        <SimpleGrid
          my={8}
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={4}
          w="100%"
        >
          {prompts.map((prompt, index) => (
            <Button
              key={index}
              bg={cardBgColor}
              color={textColor}
              p={4}
              rounded="md"
              _hover={{ bg: cardHoverBgColor }}
              textAlign="left"
              h="auto"
              whiteSpace="normal"
            >
              {prompt}
            </Button>
          ))}
        </SimpleGrid>
        <Flex w="100%" align="center" gap={2}>
          <Input
            placeholder="Ask me anything..."
            size="lg"
            rounded="md"
            borderColor={useColorModeValue("gray.300", "gray.600")}
            _focus={{ borderColor: useColorModeValue("teal.400", "teal.400") }}
          />
          <IconButton
            aria-label="Send message"
            icon={<FaPaperPlane />}
            colorScheme="teal"
            size="lg"
            rounded="md"
          />
          <IconButton
            aria-label="Voice input"
            icon={<FaMicrophone />}
            colorScheme="gray"
            size="lg"
            rounded="md"
          />
        </Flex>
        <Text
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.500")}
          textAlign="center"
        >
          OUR AI MODEL CAN MAKE MISTAKES. PLEASE BE KIND AND RESPECTFUL.
        </Text>
      </VStack>
    </Flex>
  );
}
`;
