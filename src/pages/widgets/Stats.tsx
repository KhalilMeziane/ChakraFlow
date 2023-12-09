import { Badge, Box, Container, Divider, Grid, GridItem, HStack, Heading, Icon, Progress, Text, VStack } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"

export default function Stats() {
  return (
    <Box bg="gray.50" minH="100vh" py="4">
      <Container maxW="7xl">
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
          <GridItem w='100%'>
            <Heading as="h2" size="base" mb="4">Stats simple</Heading>
            <StatsSimple />
          </GridItem>
          <GridItem w='100%'>
            <Heading as="h2" size="base" mb="4">Progress bar</Heading>
            <ProgressBar />
          </GridItem>
          <GridItem w='100%'>
            <Heading as="h2" size="base" mb="4">Strength bar</Heading>
            <StrengthBar />
          </GridItem>
          <GridItem w='100%'>
            <Heading as="h2" size="base" mb="4">Stats simple icon</Heading>
            <StatsSimpleIcon />
          </GridItem>
        </Grid>
        <AccountStats />
        <StatsSimpleGrid />
        <StatsBar  />
        <ProgressBarGrid />
        <StatsSimpleIconGrid />
      </Container>
    </Box>
  )
}

const StatsSimple = () => {
  return (
    <Box bg="white" rounded="md" shadow="sm" p="4">
      <Heading as="h2" size="sm" fontWeight="normal">Total Sales</Heading>
      <HStack py="2">
        <Text fontWeight="bold" fontSize="2xl">$23k</Text>
        <Badge fontSize="md" colorScheme="green">15%</Badge>
      </HStack>
      <Text size="sm">from last month </Text>
    </Box>
  )
}

const ProgressBar = () => {
  return (
    <Box bg="white" rounded="md" shadow="sm" p="4">
      <Heading as="h2" size="sm" fontWeight="normal">Total Budget</Heading>
      <HStack py="2" justify="space-between">
        <Text fontWeight="bold" fontSize="2xl">$78k</Text>
        <Text fontSize="md">55%</Text>
      </HStack>
      <Progress rounded="md" value={55} />
    </Box>
  )
}

const StrengthBar = () => {
  return (
    <Box bg="white" rounded="md" shadow="sm" p="4">
      <HStack pb="2" justify="space-between">
        <Text fontSize="md">Profile strength</Text>
        <Text fontSize="md">76%</Text>
      </HStack>
      <Progress colorScheme="green" rounded="md" value={76} />
    </Box>
  )
}

const StatsSimpleIcon = () => {
  return (
    <Box bg="white" rounded="md" shadow="sm" p="4">
      <Heading as="h2" size="sm" fontWeight="normal">Total Sales</Heading>
      <HStack py="2">
        <VStack bg="gray.50" align="center" justify="center" w="10" h="10" rounded="md" border="1px" borderColor="gray.200">
          <Icon as={FcGoogle} boxSize="8" />
        </VStack>
        <Text fontWeight="bold" fontSize="2xl">$23k</Text>
        <Badge fontSize="md" colorScheme="green">15%</Badge>
      </HStack>
    </Box>
  )
}

const StatsSimpleGrid = () => {
  return (
    <Box pt="8">
      <Heading as="h1" size="lg" pb="4">Stats simple grid</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
        <GridItem w='100%'>
          <StatsSimple />
        </GridItem>
        <GridItem w='100%'>
          <StatsSimple />
        </GridItem>
        <GridItem w='100%'>
          <StatsSimple />
        </GridItem>
      </Grid>
    </Box>
  )
}

const StatsBar = () => {
  return (
    <Box pt="8">
      <Heading as="h1" size="lg" pb="4">Stats bar</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4} bg="white" rounded="md" shadow="sm" p="4">
        <GridItem w='100%'>
          <StatsSimpleCentred />
        </GridItem>
        <GridItem w='100%'>
          <StatsSimpleCentred />
        </GridItem>
        <GridItem w='100%'>
          <StatsSimpleCentred />
        </GridItem>
      </Grid>
    </Box>
  )
}

const StatsSimpleCentred = () => {
  return (
    <HStack h='100px'>
      <Divider orientation='vertical' />
      <VStack align="flex-start">
        <Heading as="h2" size="sm" fontWeight="normal">Total Sales</Heading>
        <HStack py="2">
          <Text fontWeight="bold" fontSize="2xl">$23k</Text>
          <Badge fontSize="md" colorScheme="green">15%</Badge>
        </HStack>
      </VStack>
    </HStack>
  )
}

const ProgressBarGrid = () => {
  return (
    <Box pt="8">
      <Heading as="h2" size="base" mb="4">Progress bar grid</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
        <GridItem w='100%'>
          <ProgressBar />
        </GridItem>
        <GridItem w='100%'>
          <ProgressBar />
        </GridItem>
        <GridItem w='100%'>
          <ProgressBar />
        </GridItem>
      </Grid>
    </Box>
  )
}

const StatsSimpleIconGrid = () => {
  return (
    <Box pt="8">
      <Heading as="h2" size="base" mb="4">Stats simple icon grid</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
        <GridItem w='100%'>
          <StatsSimpleIcon />
        </GridItem>
        <GridItem w='100%'>
          <StatsSimpleIcon />
        </GridItem>
        <GridItem w='100%'>
          <StatsSimpleIcon />
        </GridItem>
      </Grid>
    </Box>
  )
}

const AccountStats = () => {
  return (
    <>
      <Heading as="h2" size="lg" pb="4">Account stats</Heading>
      <Box bg="white" rounded="md">
        <Heading as="h3" size="md" p="4">Overview</Heading>
        <Divider/>
        <Box p="4">
          <Text>Current period</Text>
          <HStack py="3">
            <VStack bg="gray.50" align="center" justify="center" w="10" h="10" rounded="md" border="1px" borderColor="gray.200">
              <Icon as={FcGoogle} boxSize="8" />
            </VStack>
              <HStack>
              <Text fontWeight="bold" fontSize="lg">$895.99k</Text>
              <Badge fontSize="sm" colorScheme="green">On Budget</Badge>
            </HStack>
          </HStack>
          <Text textTransform="uppercase">Account insights</Text>
          <HStack py="2" spacing="5">
            <Text fontSize="sm" textTransform="capitalize">55 calls</Text>
            <Text fontSize="sm" textTransform="capitalize">15 pending</Text>
            <Text fontSize="sm" textTransform="capitalize">25 available</Text>
          </HStack>
          <Progress rounded="md" value={55} />
        </Box>
      </Box>
    </>
  )
}