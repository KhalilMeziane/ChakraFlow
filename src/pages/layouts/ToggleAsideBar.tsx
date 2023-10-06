import { Box, Flex, HStack, Heading, IconButton, Text, useColorModeValue, useDisclosure  } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import { Head } from '@components/index'
import { BrandName } from '@src/constants'

export default function ToggleAsideBar() {
  const { getDisclosureProps, getButtonProps, isOpen } = useDisclosure()
  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()

  return (
    <>
      <Head>
        <title>AsideBar Layout | {BrandName}</title>
      </Head>
      {/* <PreviewOptionsNavbar /> */}
      <HStack minH="100vh" align="start" bg={useColorModeValue('gray.50', 'gray.700')}>
        <Box as="aside" minH="100vh" bg='gray.700' w={isOpen ? 72 : 12}> 
          <HStack h="8vh" px="1" bg='gray.900' justify="space-between">
            {
              isOpen && <Text color="white">{BrandName}</Text>
            }
            <IconButton {...buttonProps} _active='none' _focus='none' _hover='none' fontSize="20px"color="white" variant='ghost' icon={!isOpen ? <BiMenu />: <AiOutlineClose />} aria-label='open menu'/>
          </HStack>
          <Box p="2" color="white" {...disclosureProps}>aside bar</Box>
        </Box>
        <Flex as="main" w='full' minH="100vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.900')}>
          <Box textAlign="center">
            <Heading as='h3'>Main Heading</Heading>
            <Text>Empty Main Content</Text>
          </Box>
        </Flex>
      </HStack>
    </>
  )
}

