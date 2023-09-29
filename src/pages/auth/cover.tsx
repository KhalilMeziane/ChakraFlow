import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'

import { Head, PreviewOptionsNavbar } from '@components/index'
import { BrandName } from '@src/constants'

export default function Cover () {
  return (
    <>
        <Head>
            <title>Auth Cover | {BrandName}</title>
        </Head>
        <PreviewOptionsNavbar />
        <Flex minH="100vh" bg={useColorModeValue('white', 'gray.800')} as="main">
            <Box
                w='65%'
                display={{ base: 'none', lg: 'block' }} 
                bgSize="cover"
                bgPos="center"
                position="relative"
                style={{
                    backgroundImage: 'url(https://www.leadsmarttech.com/wp-content/uploads/LeadSmart-hero-2.jpg)'
                }}
            >
                <Box bg="gray.900" opacity="0.6" position="absolute" top="0" left="0" w='100%' h="100%"></Box>
            </Box>
            <Box w={{ base: '100%', lg: '35%' }} minH="100vh" p='8'>
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
                        <Link href="#" color="blue.400">Register</Link>
                    </Text>
                </VStack>
            </Box>
        </Flex>
    </>
  )
}
