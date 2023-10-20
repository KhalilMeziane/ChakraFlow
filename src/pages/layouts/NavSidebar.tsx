import { Box, Flex, HStack, Heading, IconButton, List, ListIcon, ListItem, Text,  useColorModeValue, useDisclosure  } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineSetting, AiOutlineUserSwitch, AiOutlineFolderOpen, AiOutlineUser } from 'react-icons/ai'
import { RiTodoLine } from 'react-icons/ri'
import { IoEarthOutline } from 'react-icons/io5'

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

export default function NavSidebar() {
  const { getButtonProps, isOpen } = useDisclosure()
  const buttonProps = getButtonProps()

  return (
    <>
        <Head>
            <title>Toggle Sidebar and Navbar Layout | {BrandName}</title>
        </Head>
        <PreviewOptionsNavbar />
        <Flex as="nav" alignItems="center" justifyContent="space-between" h='16' py='2.5' pr="2.5">
            <HStack spacing={2}>
                <IconButton {...buttonProps} _active='none' _focus='none' _hover='none' fontSize="18px" variant='ghost' icon={<BiMenu />} aria-label='open menu'/>
                <Heading as='h1' size="md">{BrandName}</Heading>
            </HStack>
            <HStack spacing="1">
                <IconButton variant="ghost" isRound={true} size="lg" aria-label='earth icon' icon={<IoEarthOutline />}/>
                <IconButton isRound={true} size="lg" aria-label='user icon' icon={<AiOutlineUser />}  />
            </HStack>
        </Flex>
        <HStack align="start" spacing={0}>
            <Box as="aside" minH="90vh" w={isOpen ? 72 : 12} borderRight="2px" borderColor={useColorModeValue('gray.200', 'gray.900')} transition="width 0.25s ease"> 
                <List spacing={0} p="0.5">
                    {
                    listItems.map(item => (<ListElement icon={item.icon} text={isOpen ? item.text : '' } />))
                    }
                </List>
            </Box>
            <Flex as="main" w='full' minH="90vh" align="center" justify="center" bg={useColorModeValue('gray.50', 'gray.900')}>
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