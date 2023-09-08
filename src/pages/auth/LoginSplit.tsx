import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'

import { Head } from '@components/index'
import { BrandName } from '@src/constants'

export default function LoginSplit () {
  return (
    <>
        <Head>
            <title>Login-Split | {BrandName}</title>
        </Head>
        <Flex minH="100vh" bg='gray.100' as="main">
            <Box
                w='50%' 
                bgSize="cover"
                bgPos="center"
                position="relative"
                style={{
                    backgroundImage: 'url(https://www.leadsmarttech.com/wp-content/uploads/LeadSmart-hero-2.jpg)'
                }}
            >
                <Box bg="gray.900" opacity="0.6" position="absolute" top="0" left="0" w='100%' h="100%"></Box>
            </Box>
            <Box w='50%' bg="white" minH="100vh" p='16'>
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
                        <Link color="blue.400">Register here</Link>
                    </Text>
                </VStack>
            </Box>
        </Flex>
    </>
  )
}
