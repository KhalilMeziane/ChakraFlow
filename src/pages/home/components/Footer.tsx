import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box as='footer' bg={useColorModeValue('gray.50', 'gray.900')} py="6">
        <VStack>
            <Text>©2023 ChakraFlow, All rights reserved.</Text>
        </VStack>
    </Box>
  )
}
