import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack, Image as Img, useColorModeValue } from '@chakra-ui/react'

import { Head, PreviewOptionsNavbar } from '@components/index'
import { BrandName } from '@src/constants'
import { AuthImage } from '@assets/images'

export default function Image () {
  return (
    <>
        <Head>
            <title>Auth Image | {BrandName}</title>
        </Head>
        <PreviewOptionsNavbar />
        <Flex minH="100vh" alignItems="center" bg={useColorModeValue('gray.50', 'gray.800')} as="main">
            <Box
                w='50%'
                display={{ base: 'none', lg: 'block' }} 
            >
                <Box boxSize={{ lg: 'lg', xl: 'xl' }} mx='auto' >
                    <Img src={AuthImage} alt='authentication' />
                </Box>
            </Box>
            <Box w={{ base: '100%', lg: '50%' }} bg={useColorModeValue('white', 'gray.900')} h="100vh" p='16'>
                <VStack spacing="5" justify="center" alignItems="stretch" h="full">
                    <Heading as='h1' fontSize="3xl" textAlign="center">Sign in to {BrandName}</Heading>
                    <VStack spacing="4" as="form">
                        <FormControl>
                            <FormLabel>Email Address</FormLabel>
                            <Input type="email" placeholder="Email Address" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="*******" />
                        </FormControl>
                        <Button w='full' size="lg" colorScheme='blue'>Sign In</Button>
                    </VStack>
                    <Text mt='3' fontWeight="medium" textAlign="center">
                        Don't have an account? {' '}
                        <Link href="#" color="blue.400">Register</Link>
                    </Text>
                </VStack>
            </Box>
        </Flex>
    </>
  )
}
