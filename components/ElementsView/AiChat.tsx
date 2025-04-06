"use client";

import {
  AspectRatio,
  Box,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function AiChat({
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
            <Stack w="50%" align="end">
              <Box
                border="1px"
                h="4"
                w="30%"
                rounded="sm"
                borderStyle="solid"
                borderColor={useColorModeValue("gray.300", "#1c1c1c")}
                bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
              ></Box>
            </Stack>
            <VStack w="50%" align="start">
              <Box
                border="1px"
                h="4"
                w="20%"
                rounded="sm"
                borderStyle="solid"
                borderColor={useColorModeValue("gray.300", "#1c1c1c")}
                bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
              ></Box>
              <Box
                border="1px"
                h="4"
                w="40%"
                rounded="sm"
                borderStyle="solid"
                borderColor={useColorModeValue("gray.300", "#1c1c1c")}
                bg={useColorModeValue("#5fc9ca55", "#5fc9caaa")}
              ></Box>
            </VStack>
            <Stack
              border="2px"
              h="8"
              w="50%"
              rounded="sm"
              borderStyle="solid"
              borderColor={useColorModeValue("5fc9ca55", "#5fc9caaa")}
            />
          </VStack>
        </Box>
      </AspectRatio>

      <Heading fontSize="md" fontWeight={"medium"} textTransform="capitalize">
        {title}
      </Heading>
    </Box>
  );
}
