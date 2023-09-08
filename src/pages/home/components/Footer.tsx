import { Box, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as='footer' bg="gray.50" py="6">
        <VStack>
            <Text>©2023 ChakraFlow, All rights reserved.</Text>
        </VStack>
    </Box>
  )
}
