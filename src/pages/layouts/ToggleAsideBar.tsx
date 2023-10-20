import { Box, Flex, HStack, Heading, IconButton, List, ListIcon, ListItem, Text,  useColorModeValue, useDisclosure  } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineHome, AiOutlineSetting, AiOutlineUserSwitch, AiOutlineFolderOpen } from 'react-icons/ai'
import { RiTodoLine } from 'react-icons/ri'

import { Head, PreviewOptionsNavbar } from '@components/index'
import { BrandName } from '@src/constants'

type ListItem = {
  text?: string
  icon: React.ElementType
}

const listItems: ListItem[] = [
  {
    text: 'Home',
    icon: AiOutlineHome,
  },
  {
    text: 'Settings',
    icon: AiOutlineSetting,
  },
  {
    text: 'Users',
    icon: AiOutlineUserSwitch,
  },
  {
    text: 'Tasks',
    icon: RiTodoLine,
  },
  {
    text: 'Folder',
    icon: AiOutlineFolderOpen,
  },
]

export default function ToggleAsideBar() {
  const { getButtonProps, isOpen } = useDisclosure()
  const buttonProps = getButtonProps()

  return (
    <>
      <Head>
        <title>AsideBar Layout | {BrandName}</title>
      </Head>
      <PreviewOptionsNavbar />
      <HStack minH="100vh" align="start" spacing={0}>
        <Box as="aside" minH="100vh" w={isOpen ? 72 : 12} borderRight="2px" borderColor={useColorModeValue('gray.200', 'gray.900')} transition="width 0.25s ease"> 
          <HStack h="14" justify="space-between">
            {
              isOpen && <Text p="2.5">{BrandName}</Text>
            }
            <IconButton {...buttonProps} _active='none' _focus='none' _hover='none' fontSize="18px" variant='ghost' icon={!isOpen ? <BiMenu />: <AiOutlineClose />} aria-label='open menu'/>
          </HStack>
          <List spacing={0} p="0.5">
            {
              listItems.map(item => (<ListElement icon={item.icon} text={isOpen ? item.text : '' } />))
            }
          </List>
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

const ListElement = ({ icon, text }: ListItem) => {
  return (
    <ListItem as={HStack} spacing={0} h="10" pl="2.5" cursor="pointer" _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }} rounded="md">
      <ListIcon boxSize={5} as={icon} />
      {
        text && <Text>{text}</Text>
      }
    </ListItem>
  )
}