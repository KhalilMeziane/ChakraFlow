"use client";

import BlockCard from "@/components/BlockCard";
import { Simple, SimpleString } from "@/components/ui/ai-chat";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";

export default function Blocks() {
  return (
    <Box as="section" py="5" bg={useColorModeValue("white", "#0a0a0a")}>
      <Container maxW="7xl">
        <BlockCard
          Component={<Simple />}
          code={SimpleString}
          title="Simple"
          hash="#simple"
        />
      </Container>
    </Box>
  );
}
