import { Box, Container, Grid, GridItem, Heading, Image, VStack, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface PageTypes {
    title: string
    imageSrc: string
    href: string
}
const pagesContent: Array<PageTypes> = [
    {
        title: 'Full Width Double Stack',
        imageSrc: '/thumbnails/layout-full-width-double-stack.png',
        href: '/layouts/full-width-double-stack'
    },
    {
        title: 'Container Double Stack',
        imageSrc: '/thumbnails/layout-container-double-stack.png',
        href: '/layouts/container-double-stack'
    },
    {
        title: 'Toggle sidebar',
        imageSrc: '/thumbnails/layout-full-width-toggle-aside-bar.png',
        href: '/layouts/toggle-sidebar'
    },
    {
        title: 'Toggle sidebar with Navbar',
        imageSrc: '/thumbnails/layout-full-width-nav-toggle-aside-bar.png',
        href: '/layouts/nav-toggle-sidebar'
    },
    {
        title: 'Toggle Drawer sidebar with Navbar',
        imageSrc: '/thumbnails/layout-full-width-drawer-aside-bar.png',
        href: '/layouts/nav-toggle-drawer-sidebar'
    },
    {
        title: 'Responsive Drawer sidebar with Navbar',
        imageSrc: '/thumbnails/layout-full-width-drawer-responsive-aside-bar.png',
        href: '/layouts/nav-drawer-sidebar'
    }
]

export default function LayoutPages () {
    return (
        <Box as="section" py="12">
            <Container maxW="7xl">
                <Heading as="h2" textAlign="center">Layout Pages</Heading>
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
