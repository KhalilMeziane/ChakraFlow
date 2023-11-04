import { Avatar, AvatarGroup, Badge, Box, Container, HStack, Heading, Icon, Progress, Text } from "@chakra-ui/react"
import { MdWorkOutline } from "react-icons/md"

export default function Projects() {
  return (
    <Box bg="gray.50" minH="100vh" py="4">
        <Container maxW="7xl">
            <HStack>
                <ProjectCard />
            </HStack>
        </Container>
    </Box>
  )
}

const ProjectCard = () => {
    return (
        <Box w="35%">
            <Heading as="h2" size="lg" mb="4">Project card</Heading>
            <Box bg="white" p="4" rounded="md" shadow="sm">
                <HStack justifyContent="space-between" pb="3">
                    <Icon bg="green.100" rounded="md" color="green.500" p="2" boxSize={10} as={MdWorkOutline} />
                    <Badge bg="gray.100" fontSize='1em' px="2" py="1" rounded="md">Budget $8999</Badge>
                </HStack>
                <Heading as="h2" size="md">Masterpiece E-commerce</Heading>
                <Text my="3">Deal phase 2/4</Text>
                <Progress rounded="md" colorScheme='green' size='sm' value={50} />
                <AvatarGroup size='md' max={5} my="3">
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
