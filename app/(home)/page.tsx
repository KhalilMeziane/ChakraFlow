"use client";

import Elements from "./components/Elements";
import Header from "./components/Header";
import { Stack, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack bg={useColorModeValue("white", "#0a0a0a")}>
      <Header />
      <main>
        <Elements />
      </main>
    </Stack>
  );
}
