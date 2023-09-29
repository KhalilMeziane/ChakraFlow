import { Avatar, Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'

import { Head, PreviewOptionsNavbar } from '@components/index'
import { BrandName } from '@src/constants'

export default function Sidebar () {
    return (
        <>
            <Head>
                <title>Auth Sidebar | {BrandName}</title>
            </Head>
            <PreviewOptionsNavbar />
            <Container maxW='7xl' as="main">
                <Flex minH="100vh">
                    <Box
                        w='30%'
                        display={{ base: 'none', lg: 'block' }} 
                        bg={useColorModeValue('blue.500', 'blue.900')}
                    >
                        <VStack h='100vh' align="start" justifyContent="space-between" p='4'>
                            <Heading color='white'>{BrandName}</Heading>
                            <VStack 
                                align="start" 
                                justify="start" 
                                mt='4' 
                                p='3' 
                                rounded="lg" 
                                bgImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))" 
                            >
                                <Avatar size="lg" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                <Heading as="h3" fontSize="lg" color='white'>Segun Adebayo</Heading>
                                <Text color='white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos aliquid, dicta, corrupti modi perspiciatis ad ducimus sunt quia temporibus nihil rem similique tempore corporis.</Text>
                            </VStack>
                        </VStack>
                    </Box>
                    <Box w={{ base: '100%', lg: '70%' }} minH="100vh" p='8'>
                        <VStack align="center" spacing="5" justify="center" h="100%" alignItems="stretch" w={{ base: '100%', md: '80%', lg: '60%', xl: '50%' }} mx='auto'>
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
            </Container>
        </>
    )
}
