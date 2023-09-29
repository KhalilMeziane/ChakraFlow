import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack, Avatar, HStack } from '@chakra-ui/react'

import { Head, PreviewOptionsNavbar } from '@components/index'
import { BrandName } from '@src/constants'

export default function Column () {
    return (
        <>
            <Head>
                <title>Auth Column | {BrandName}</title>
            </Head>
            <PreviewOptionsNavbar />
            <Flex minH="100vh" as="main">
                <Box
                    w='50%'
                    display={{ base: 'none', lg: 'block' }} 
                    h="100vh"
                    p='8'
                    bgGradient={'linear(to-tr, teal.600, yellow.600)'}
                >
                    <VStack align="center" justify="center" h="100%" alignItems="stretch" spacing="3" color="white">
                        <Heading as='h2' fontSize="3xl">{BrandName}</Heading>
                        <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque incidunt voluptatibus consequatur fugit. Reprehenderit numquam est tempora id delectus reiciendis!</Text>
                        <HStack pt='4'>
                            <Avatar size="lg" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <VStack align="start" justify="start" w={{ lg: '70%', }}>
                                <Heading as="h3" fontSize="lg">Segun Adebayo</Heading>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, explicabo.</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Box>
                <Box w={{ base: '100%', lg: '50%' }} minH="100vh" p='16'>
                    <VStack align="center" spacing="5" justify="center" h="100%" alignItems="stretch">
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
                            <Link color="blue.400">Register</Link>
                        </Text>
                    </VStack>
                </Box>
            </Flex>
        </>
    )
}
