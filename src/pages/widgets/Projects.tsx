import { Avatar, AvatarGroup, Badge, Box, Container, Divider, Grid, GridItem, HStack, Heading, Icon, ListItem, Progress, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { MdWorkOutline } from "react-icons/md"
import { IoMdTime } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function Projects() {
  return (
    <Box bg="gray.50" minH="100vh" py="4">
        <Container maxW="7xl">
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
                <GridItem w='100%'>
                    <ProjectCard />
                </GridItem>
                <GridItem w='100%'>
                    <ProjectCardExtended />
                </GridItem>
                <GridItem w='100%'>
                    <ProjectDetailCard />
                </GridItem>
                <GridItem w='100%'>
                    <ProjectDeals />
                </GridItem>
                <GridItem w='100%'>
                    <ProjectListCard />
                </GridItem>
            </Grid>
        </Container>
    </Box>
  )
}

const ProjectCard = () => {
    return (
        <Box>
            <Heading as="h2" size="base" mb="4">Project card</Heading>
            <Box bg="white" p="4" rounded="md" shadow="sm">
                <HStack justifyContent="space-between" pb="3">
                    <Icon bg="green.100" rounded="md" color="green.500" p="2" boxSize={10} as={MdWorkOutline} />
                    <Badge bg="gray.100" fontSize='1em' px="2" py="1" rounded="md"><Box as="span" fontWeight="medium" textTransform="capitalize" pr="1">Budget</Box> $540</Badge>
                </HStack>
                <Heading as="h2" size="md">Masterpiece E-commerce</Heading>
                <Text my="3">Deal phase 2/4</Text>
                <Progress rounded="md" colorScheme='green' size='sm' value={50} />
                <AvatarGroup size='sm' max={5} my="3">
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
            </Box>
        </Box>
    )
}

const ProjectCardExtended = () => {
    return(
        <Box>
            <Heading as="h2" size="base" mb="4">Project card extended</Heading>
            <Box bg="white" rounded="md" shadow="sm">
                <Box bgGradient='linear(to-b, purple.100, purple.50)' p='4' h='28'>
                    <Badge bg="white" fontSize='1em' px="2" py="1" rounded="md"><Box as="span" fontWeight="medium" textTransform="capitalize" pr="1">Budget</Box> $540</Badge>
                    <HStack justifyContent="center" pb="3">
                        <Icon color="purple.500" boxSize={8} as={IoChatbubbleEllipsesOutline} />
                    </HStack>
                </Box>
                <Box p="4">
                    <Heading as="h2" size="md">Working Brothers</Heading>
                    <HStack p="0">
                        <Text my="3" spacing="0.5" as={HStack}>
                            <IoMdTime />
                            <Box as="time">38h</Box>
                        </Text>
                        <Text my="3" spacing="0.5" as={HStack}>
                            <BiTask />
                            <Text as="time">8 tasks left</Text>
                        </Text>
                    </HStack>
                    <AvatarGroup size='sm' max={5}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>
                    <Progress rounded="md" colorScheme='purple' size='sm' mt="2" value={50} />
                </Box>
            </Box>
        </Box>
    )
}

const ProjectDeals = () => {
    return (
        <Box>
            <Heading as="h2" size="base" mb="4">Project deals</Heading>
            <Box bg="white" rounded="md" shadow="sm">
                <Heading as="h2" size="md" px="4" pt="4">Project deals</Heading>
                <Divider py="2" />
                <UnorderedList p="4" ml="0" spacing="4">
                    <ListItem as={HStack} spacing="3">
                        <Icon bg="green.50" rounded="md" color="green.400" p="1.5" boxSize={10} as={MdWorkOutline} />
                        <VStack spacing="0" align="start">
                            <Heading as="h3" size="sm" fontWeight="medium">Masterpiece E-commerce</Heading>
                            <Text>$35.3</Text>
                        </VStack>
                    </ListItem>
                    <ListItem as={HStack} spacing="3">
                        <Icon bg="yellow.50" rounded="md" color="yellow.400" p="1.5" boxSize={10} as={BiTask} />
                        <VStack spacing="0" align="start">
                            <Heading as="h3" size="sm" fontWeight="medium"> Commerce Zilla </Heading>
                            <Text>$68.8</Text>
                        </VStack>
                    </ListItem>
                    <ListItem as={HStack} spacing="3">
                        <Icon bg="blue.50" rounded="md" color="blue.400" p="1.5" boxSize={10} as={IoChatbubbleEllipsesOutline} />
                        <VStack spacing="0" align="start">
                            <Heading as="h3" size="sm" fontWeight="medium"> Party Perform Canopy </Heading>
                            <Text>$95.1</Text>
                        </VStack>
                    </ListItem>
                    <ListItem as={HStack} spacing="3">
                        <Icon bg="green.50" rounded="md" color="green.400" p="1.5" boxSize={10} as={MdWorkOutline} />
                        <VStack spacing="0" align="start">
                            <Heading as="h3" size="sm" fontWeight="medium">Masterpiece E-commerce</Heading>
                            <Text>$35.3</Text>
                        </VStack>
                    </ListItem>
                    <ListItem as={HStack} spacing="3">
                        <Icon bg="yellow.50" rounded="md" color="yellow.400" p="1.5" boxSize={10} as={BiTask} />
                        <VStack spacing="0" align="start">
                            <Heading as="h3" size="sm" fontWeight="medium"> Commerce Zilla </Heading>
                            <Text>$68.8</Text>
                        </VStack>
                    </ListItem>
                    <ListItem as={HStack} spacing="3">
                        <Icon bg="blue.50" rounded="md" color="blue.400" p="1.5" boxSize={10} as={IoChatbubbleEllipsesOutline} />
                        <VStack spacing="0" align="start">
                            <Heading as="h3" size="sm" fontWeight="medium"> Party Perform Canopy </Heading>
                            <Text>$95.1</Text>
                        </VStack>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Box> 
    )
}

const ProjectDetailCard = () => {
    return (
        <Box>
            <Heading as="h2" size="base" mb="4">Project detail card</Heading>
            <Box bg="white" rounded="md" shadow="sm">
                <Heading as="h2" size="md" px="4" pt="4">Company</Heading>
                <Divider py="2" />
                <HStack spacing="3" p="4">
                    <Icon bg="blue.400" rounded="md" color="white" p="1.5" boxSize={10} as={IoChatbubbleEllipsesOutline} />
                    <VStack spacing="0" align="start">
                        <Heading as="h3" size="sm" fontWeight="medium">Co-Founder </Heading>
                        <Text fontSize="xs">Uptimemate - Self-employed</Text>
                        <Text fontSize="xs">Groningen Area - The Netherlands</Text>
                    </VStack>
                </HStack>
            </Box>
        </Box>
    )
}

const ProjectListCard = () => {
    return (
        <Box>
            <Heading as="h2" size="base" mb="4">Project detail card</Heading>
            <Box bg="white" rounded="md" shadow="sm">
                <Box p="4">
                    <Text fontSize="sm" color="gray.700">External</Text>
                    <Heading as="h2" size="md" py="1.5">Create new website</Heading>
                    <Text fontSize="sm">Even the all-powerful Pointing has no control about the blind texts it is an almost</Text>
                </Box>
                <Box>
                    <Divider />
                    <HStack px="4" py="2" justify="space-between">
                        <Text>Progress</Text>
                        <Box w='50%'>
                            <Progress rounded="md" colorScheme='green' size='sm' mt="2" value={50} />
                        </Box>
                    </HStack>
                    <Divider />
                    <HStack px="4" py="2" justify="space-between">
                        <Text>Members</Text>
                        <AvatarGroup size='sm' max={5}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                    </HStack>
                    <Divider />
                    <HStack px="4" py="2" justify="space-between">
                        <Text>Status</Text>
                        <Badge colorScheme="green">On schedule</Badge>
                    </HStack>
                </Box>
            </Box>
        </Box>
    )
}
