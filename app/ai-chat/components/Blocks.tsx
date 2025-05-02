"use client";

import NewPreview from "@/components/newPreview/Preview";
import { Simple, SimpleString , Centered, CenterdString } from "@/components/ui/ai-chat";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";

export default function Blocks() {
  return (
    <Box as="section" py="5" bg={useColorModeValue("white", "#0a0a0a")}>
      <Container maxW="7xl">
        <NewPreview
          Component={<Simple />}
          code={SimpleString}
          title="Simple"
        />
        <NewPreview
          Component={<Centered />}
          code={CenterdString}
          title="Centered"
        />
      </Container>
    </Box>
  );
}
