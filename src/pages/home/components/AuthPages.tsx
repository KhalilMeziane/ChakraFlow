import { Box, Container, Grid, GridItem, Heading, Image, VStack, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface PageTypes {
    title: string
    imageSrc: string
    href: string
}
const pagesContent: Array<PageTypes> = [
    {
        title: 'Sign in Image',
        imageSrc: '/thumbnails/auth-image.png',
        href: '/auth/image'
    },
    {
        title: 'Sign in Simple',
        imageSrc: '/thumbnails/auth-simple.png',
        href: '/auth/simple'
    },
    {
        title: 'Sign in Column',
        imageSrc: '/thumbnails/auth-column.png',
        href: '/auth/column'
    },
    {
        title: 'Sign in Plain',
        imageSrc: '/thumbnails/auth-plain.png',
        href: '/auth/plain'
    },
    {
        title: 'Sign in Cover',
        imageSrc: '/thumbnails/auth-cover.png',
        href: '/auth/cover'
    },
    {
        title: 'Sign in Bold',
        imageSrc: '/thumbnails/auth-bold.png',
        href: '/auth/bold'
    },
    {
        title: 'Sign in Sidebar',
        imageSrc: '/thumbnails/auth-sidebar.png',
        href: '/auth/sidebar'
    }
]

export default function AuthPages () {
    return (
        <Box as="section" py="12" bg={useColorModeValue('gray.50', 'gray.900')}>
            <Container maxW="7xl">
                <Heading as="h2" textAlign="center">Authentication Pages</Heading>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={5} py='8'>
                    {
                        pagesContent.map(page => {
                            return (
                                <GridItem>
                                    <PageCard page={page} />
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

const PageCard = ({ page: { title, imageSrc, href } }: { page: PageTypes } ) => {
    return (
        <VStack 
            border="1px" 
            p='1' 
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.100', 'gray.800')} 
            as={Link} 
            to={href} 
            h='full' 
            align="start" 
            rounded="md" 
            overflow="hidden"
            transition="ease"
            transitionDuration="0.25s"
            _hover={{ 
                transform: 'scale(1.05)',
                shadow: 'lg'
            }}
        >
            <Image h="185" w='250' src={imageSrc} alt={title} rounded="md" overflow="hidden" />
            <Heading as="h3" fontSize="lg" p='2' fontWeight="medium" >{title}</Heading>
        </VStack>
    )
}
