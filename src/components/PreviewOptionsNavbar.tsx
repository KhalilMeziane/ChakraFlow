import { Box, Container, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"

import { BrandName } from "@src/constants"
import { ThemeToggle } from "."

export default function PreviewOptionsNavbar() {
    return (
        <Box 
            as="nav"
            bg='black'
            color={useColorModeValue('gray.600', 'white')}
            py="2"
            pos="fixed"
            top="0"
            left="0"
            w="100%"            
        >
            <Container maxW='7xl'>
                <Flex align={'center'}>
                    <Flex flex={{ base: 1 }}>
                        <Text
                            fontFamily={'heading'}
                            fontSize="xl"
                            fontWeight="medium"
                            color="white"
                        >
                            {BrandName}
                        </Text>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                    >
                        <ThemeToggle />
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}
