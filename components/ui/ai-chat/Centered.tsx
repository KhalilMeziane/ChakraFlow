"use client";
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Input,
  Button,
  IconButton,
  HStack,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaBook, FaPaperclip , FaPaperPlane} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Centered: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { colorMode } = useColorMode();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Input submitted:", inputValue);
  };

  return (
    <ChakraProvider>
      <VStack
        spacing={4}
        align="center"
        justify="center"
        minH="100vh"
        p={4}
        gap={10}
        bg={colorMode === "dark" ? "gray.800" : "white"}
        color={colorMode === "dark" ? "white" : "black"}
      >
        <Heading as="h1" size="lg" fontWeight="bold" textAlign="center">
          What do you want to do today?
        </Heading>

        <Box w="full" maxW="lg">
          <HStack
            border="1px solid"
            borderColor={colorMode === "dark" ? "gray.600" : "gray.200"}
            borderRadius="md"
            p={2}
            spacing={2}
            bg={colorMode === "dark" ? "gray.700" : "white"}
          >
            <HStack spacing={1}>
              <Popover placement="top">
                <PopoverTrigger>
                  <IconButton
                    aria-label="Knowledge"
                    icon={<FaBook />}
                    size="sm"
                    variant="ghost"
                    color={colorMode === "dark" ? "gray.300" : "gray.500"}
                  />
                </PopoverTrigger>
                <PopoverContent
                  w="200px"
                  border="1px solid"
                  borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                  borderRadius="md"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  boxShadow="md"
                  p={2}
                >
                  <PopoverBody display="flex" flexDir="column" gap={2}>
                    <Text
                      as="h2"
                      fontWeight="bold"
                      fontSize="md"
                      mb={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Knowledge Base
                    </Text>
                    <Text
                      fontSize="sm"
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 1
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 2
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 3
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover placement="top">
                <PopoverTrigger>
                  <IconButton
                    aria-label="Attach file"
                    icon={<FaPaperclip />}
                    size="sm"
                    variant="ghost"
                    color={colorMode === "dark" ? "gray.300" : "gray.500"}
                  />
                </PopoverTrigger>
                <PopoverContent
                  w="200px"
                  border="1px solid"
                  borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                  borderRadius="md"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  boxShadow="md"
                  p={2}
                >
                  <PopoverBody display="flex" flexDir="column" gap={2}>
                    <Text
                      as="h2"
                      fontWeight="bold"
                      fontSize="md"
                      mb={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Upload File
                    </Text>
                    <Text
                      fontSize="sm"
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 1
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 2
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 3
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
            <Input
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={handleInputChange}
              size="md"
              variant="unstyled"
              flex="1"
              color={colorMode === "dark" ? "white" : "black"}
              _placeholder={{ color: colorMode === "dark" ? "gray.400" : "gray.500" }}
            />
            <IconButton
              aria-label="Submit"
              icon={<FaPaperPlane color="white" />}
              size="md"
              colorScheme="teal"
              onClick={handleSubmit}
            />
          </HStack>
        </Box>

        <HStack spacing={3} wrap="wrap" justify="center" pt={2}>
          <Button
            leftIcon={<BsStars />}
            variant="outline"
            size="sm"
            border="none"
            colorScheme="teal"
            color={colorMode === "dark" ? "teal.200" : "teal.500"}
          >
            Try these
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            What's the weather like today?
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            Share the closest coffee shop around me
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            What does React.js do?
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            Recommend some books I can read
          </Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default Centered;

export const CenterdString = `"use client";
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Input,
  Button,
  IconButton,
  HStack,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaBook, FaPaperclip , FaPaperPlane} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Centered: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { colorMode } = useColorMode();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Input submitted:", inputValue);
  };

  return (
    <ChakraProvider>
      <VStack
        spacing={4}
        align="center"
        justify="center"
        minH="100vh"
        p={4}
        gap={10}
        bg={colorMode === "dark" ? "gray.800" : "white"}
        color={colorMode === "dark" ? "white" : "black"}
      >
        <Heading as="h1" size="lg" fontWeight="bold" textAlign="center">
          What do you want to do today?
        </Heading>

        <Box w="full" maxW="lg">
          <HStack
            border="1px solid"
            borderColor={colorMode === "dark" ? "gray.600" : "gray.200"}
            borderRadius="md"
            p={2}
            spacing={2}
            bg={colorMode === "dark" ? "gray.700" : "white"}
          >
            <HStack spacing={1}>
              <Popover placement="top">
                <PopoverTrigger>
                  <IconButton
                    aria-label="Knowledge"
                    icon={<FaBook />}
                    size="sm"
                    variant="ghost"
                    color={colorMode === "dark" ? "gray.300" : "gray.500"}
                  />
                </PopoverTrigger>
                <PopoverContent
                  w="200px"
                  border="1px solid"
                  borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                  borderRadius="md"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  boxShadow="md"
                  p={2}
                >
                  <PopoverBody display="flex" flexDir="column" gap={2}>
                    <Text
                      as="h2"
                      fontWeight="bold"
                      fontSize="md"
                      mb={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Knowledge Base
                    </Text>
                    <Text
                      fontSize="sm"
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 1
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 2
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 3
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Popover placement="top">
                <PopoverTrigger>
                  <IconButton
                    aria-label="Attach file"
                    icon={<FaPaperclip />}
                    size="sm"
                    variant="ghost"
                    color={colorMode === "dark" ? "gray.300" : "gray.500"}
                  />
                </PopoverTrigger>
                <PopoverContent
                  w="200px"
                  border="1px solid"
                  borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                  borderRadius="md"
                  bg={colorMode === "dark" ? "gray.700" : "white"}
                  boxShadow="md"
                  p={2}
                >
                  <PopoverBody display="flex" flexDir="column" gap={2}>
                    <Text
                      as="h2"
                      fontWeight="bold"
                      fontSize="md"
                      mb={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Upload File
                    </Text>
                    <Text
                      fontSize="sm"
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 1
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 2
                    </Text>
                    <Text
                      fontSize="sm"
                      borderTop="1px"
                      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100", cursor: "pointer" }}
                      p={1}
                      color={colorMode === "dark" ? "white" : "black"}
                    >
                      Option 3
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
            <Input
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={handleInputChange}
              size="md"
              variant="unstyled"
              flex="1"
              color={colorMode === "dark" ? "white" : "black"}
              _placeholder={{ color: colorMode === "dark" ? "gray.400" : "gray.500" }}
            />
            <IconButton
              aria-label="Submit"
              icon={<FaPaperPlane color="white" />}
              size="md"
              colorScheme="teal"
              onClick={handleSubmit}
            />
          </HStack>
        </Box>

        <HStack spacing={3} wrap="wrap" justify="center" pt={2}>
          <Button
            leftIcon={<BsStars />}
            variant="outline"
            size="sm"
            border="none"
            colorScheme="teal"
            color={colorMode === "dark" ? "teal.200" : "teal.500"}
          >
            Try these
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            What's the weather like today?
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            Share the closest coffee shop around me
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            What does React.js do?
          </Button>
          <Button
            variant="outline"
            size="sm"
            borderRadius="full"
            color={colorMode === "dark" ? "white" : "black"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          >
            Recommend some books I can read
          </Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default Centered;
`;
