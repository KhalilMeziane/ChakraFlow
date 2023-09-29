import { Box, Container, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'

interface FeaturesContentTypes {
    title: string
    content: string
}
const featuresContent: Array<FeaturesContentTypes> = [
    {
        title: 'Responsive',
        content: 'Our designs are meticulously crafted to be fully responsive, rigorously tested, and thoughtfully implemented to seamlessly scale and adapt to all screen sizes.'
    },
    {
        title: 'ChakraUi',
        content: 'ChakraFlow is meticulously crafted using Chakra UI, a user-friendly, modular, and accessible component library designed to provide you with essential building blocks for your React applications.'
    },
    {
        title: 'React-Icons',
        content: 'Bautiful SVG icons via React-Icons, allowing you to include only the specific icons your project requires. You also have the flexibility to seamlessly replace them with your own custom icon set as needed.'
    },
    {
        title: 'ReactJs',
        content: 'ChakraFlow offers a tailored solution, incorporating popular libraries to fortify your React applications, ensuring a strong and dependable foundation.'
    },
    {
        title: 'Dark Mode',
        content: 'Enjoy a sleek and energy-efficient dark mode for an improved user experience in low-light environments.'
    }
]

export default function Features () {
    return (
        <Box as="section" py="12">
            <Container maxW="7xl">
                <Heading as="h2" textAlign="center">Features</Heading>
                <Text textAlign="center" w={{ base: '100%',  md: '80%', lg: '70%', xl: '60%' }} mx="auto">ChakraFlow brings you all the essential UI components and features you'd expect from a comprehensive UI library, ready to kickstart your Chakra UI web project with style and functionality.</Text>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={3} py='8'>
                    {
                        featuresContent.map(feature => {
                            return (
                                <GridItem>
                                    <FeatureCard feature={feature} />
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

const FeatureCard = ({ feature: { title, content } }: { feature: FeaturesContentTypes } ) => {
    return (
        <VStack h='full' align="start" border="1px" p="5" borderColor='gray.200' rounded="md">
            <Heading as="h3" fontSize="2xl">{title}</Heading>
            <Text>{content}</Text>
        </VStack>
    )
}
