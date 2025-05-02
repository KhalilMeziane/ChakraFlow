"use client";
import React, { useState } from "react";
import {
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
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBook, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Centered: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const inputBg = useColorModeValue("white", "gray.700");
  const placeholderColor = useColorModeValue("gray.500", "gray.400");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Input submitted:", inputValue);
  };

  return (
    <VStack
      spacing={4}
      align="center"
      justify="center"
      minH="100vh"
      p={4}
      gap={10}
      bg={bgColor}
      color={textColor}
    >
      <Heading as="h1" size="lg" fontWeight="bold" textAlign="center">
        What do you want to do today?
      </Heading>

      <Box w="full" maxW="lg">
        <HStack
          border="1px solid"
          borderColor={borderColor}
          borderRadius="md"
          p={2}
          spacing={2}
          bg={inputBg}
        >
          <HStack spacing={1}>
            <Popover placement="top">
              <PopoverTrigger>
                <IconButton
                  aria-label="Knowledge"
                  icon={<FaBook />}
                  size="sm"
                  variant="ghost"
                  color={useColorModeValue("gray.500", "gray.300")}
                />
              </PopoverTrigger>
              <PopoverContent
                w="200px"
                border="1px solid"
                borderColor={borderColor}
                borderRadius="md"
                bg={inputBg}
                boxShadow="md"
                p={2}
              >
                <PopoverBody display="flex" flexDir="column" gap={2}>
                  <Text
                    as="h2"
                    fontWeight="bold"
                    fontSize="md"
                    mb={1}
                    color={textColor}
                  >
                    Knowledge Base
                  </Text>
                  {["Option 1", "Option 2", "Option 3"].map((opt, idx) => (
                    <Text
                      key={idx}
                      fontSize="sm"
                      borderTop={idx !== 0 ? "1px" : undefined}
                      borderColor={borderColor}
                      _hover={{ bg: hoverBg, cursor: "pointer" }}
                      p={1}
                      color={textColor}
                    >
                      {opt}
                    </Text>
                  ))}
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
                  color={useColorModeValue("gray.500", "gray.300")}
                />
              </PopoverTrigger>
              <PopoverContent
                w="200px"
                border="1px solid"
                borderColor={borderColor}
                borderRadius="md"
                bg={inputBg}
                boxShadow="md"
                p={2}
              >
                <PopoverBody display="flex" flexDir="column" gap={2}>
                  <Text
                    as="h2"
                    fontWeight="bold"
                    fontSize="md"
                    mb={1}
                    color={textColor}
                  >
                    Upload File
                  </Text>
                  {["Option 1", "Option 2", "Option 3"].map((opt, idx) => (
                    <Text
                      key={idx}
                      fontSize="sm"
                      borderTop={idx !== 0 ? "1px" : undefined}
                      borderColor={borderColor}
                      _hover={{ bg: hoverBg, cursor: "pointer" }}
                      p={1}
                      color={textColor}
                    >
                      {opt}
                    </Text>
                  ))}
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
            color={textColor}
            _placeholder={{ color: placeholderColor }}
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
          color={useColorModeValue("teal.500", "teal.200")}
        >
          Try these
        </Button>
        {[
          "What's the weather like today?",
          "Share the closest coffee shop around me",
          "What does React.js do?",
          "Recommend some books I can read",
        ].map((text, idx) => (
          <Button
            key={idx}
            variant="outline"
            size="sm"
            borderRadius="full"
            color={textColor}
            _hover={{ bg: hoverBg }}
          >
            {text}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default Centered;


export const CenterdString = `"use client";
import React, { useState } from "react";
import {
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
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBook, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Centered: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const inputBg = useColorModeValue("white", "gray.700");
  const placeholderColor = useColorModeValue("gray.500", "gray.400");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Input submitted:", inputValue);
  };

  return (
    <VStack
      spacing={4}
      align="center"
      justify="center"
      minH="100vh"
      p={4}
      gap={10}
      bg={bgColor}
      color={textColor}
    >
      <Heading as="h1" size="lg" fontWeight="bold" textAlign="center">
        What do you want to do today?
      </Heading>

      <Box w="full" maxW="lg">
        <HStack
          border="1px solid"
          borderColor={borderColor}
          borderRadius="md"
          p={2}
          spacing={2}
          bg={inputBg}
        >
          <HStack spacing={1}>
            <Popover placement="top">
              <PopoverTrigger>
                <IconButton
                  aria-label="Knowledge"
                  icon={<FaBook />}
                  size="sm"
                  variant="ghost"
                  color={useColorModeValue("gray.500", "gray.300")}
                />
              </PopoverTrigger>
              <PopoverContent
                w="200px"
                border="1px solid"
                borderColor={borderColor}
                borderRadius="md"
                bg={inputBg}
                boxShadow="md"
                p={2}
              >
                <PopoverBody display="flex" flexDir="column" gap={2}>
                  <Text
                    as="h2"
                    fontWeight="bold"
                    fontSize="md"
                    mb={1}
                    color={textColor}
                  >
                    Knowledge Base
                  </Text>
                  {["Option 1", "Option 2", "Option 3"].map((opt, idx) => (
                    <Text
                      key={idx}
                      fontSize="sm"
                      borderTop={idx !== 0 ? "1px" : undefined}
                      borderColor={borderColor}
                      _hover={{ bg: hoverBg, cursor: "pointer" }}
                      p={1}
                      color={textColor}
                    >
                      {opt}
                    </Text>
                  ))}
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
                  color={useColorModeValue("gray.500", "gray.300")}
                />
              </PopoverTrigger>
              <PopoverContent
                w="200px"
                border="1px solid"
                borderColor={borderColor}
                borderRadius="md"
                bg={inputBg}
                boxShadow="md"
                p={2}
              >
                <PopoverBody display="flex" flexDir="column" gap={2}>
                  <Text
                    as="h2"
                    fontWeight="bold"
                    fontSize="md"
                    mb={1}
                    color={textColor}
                  >
                    Upload File
                  </Text>
                  {["Option 1", "Option 2", "Option 3"].map((opt, idx) => (
                    <Text
                      key={idx}
                      fontSize="sm"
                      borderTop={idx !== 0 ? "1px" : undefined}
                      borderColor={borderColor}
                      _hover={{ bg: hoverBg, cursor: "pointer" }}
                      p={1}
                      color={textColor}
                    >
                      {opt}
                    </Text>
                  ))}
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
            color={textColor}
            _placeholder={{ color: placeholderColor }}
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
          color={useColorModeValue("teal.500", "teal.200")}
        >
          Try these
        </Button>
        {[
          "What's the weather like today?",
          "Share the closest coffee shop around me",
          "What does React.js do?",
          "Recommend some books I can read",
        ].map((text, idx) => (
          <Button
            key={idx}
            variant="outline"
            size="sm"
            borderRadius="full"
            color={textColor}
            _hover={{ bg: hoverBg }}
          >
            {text}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default Centered;`;
