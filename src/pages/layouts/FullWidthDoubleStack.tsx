import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, HStack, Heading, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import { AiOutlineUser, AiOutlinePlus } from 'react-icons/ai'
import { IoEarthOutline } from 'react-icons/io5'

import { Head, PreviewOptionsNavbar } from '@components/index'
import { BrandName } from '@src/constants'

export default function FullWidthDoubleStack() {
  return (
    <>
      <Head>
        <title>Full Width Double Stack Layout | {BrandName}</title>
      </Head>
      <PreviewOptionsNavbar />
      <Flex as="nav" alignItems="center" justifyContent="space-between" h='16' p='3' borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.600')}>
        <Heading as='h1' size="md">{BrandName}</Heading>
        <HStack spacing="1">
          <IconButton variant="ghost" isRound={true} size="lg" aria-label='earth icon'  icon={<IoEarthOutline />}/>
          <IconButton isRound={true} size="lg" aria-label='user icon' icon={<AiOutlineUser />}  />
        </HStack>
      </Flex>
      <Flex justifyContent="space-between" gap="4" h='16' p='3' borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.600')}>
        <HStack alignItems="center">
          <Heading as="h2" size="md">Overview</Heading>
          <Divider orientation='vertical' />
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
        <Button leftIcon={<AiOutlinePlus />} colorScheme='blue'>New Project</Button>
      </Flex>
      <Flex as="main" minH="78vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Box textAlign="center">
          <Heading as='h3'>Box Heading</Heading>
          <Text>Empty Box Content</Text>
        </Box>
      </Flex>
    </>
  )
}
