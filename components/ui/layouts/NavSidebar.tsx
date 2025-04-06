import {
	Box,
	Flex,
	HStack,
	Heading,
	IconButton,
	List,
	ListIcon,
	ListItem,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";

import {
	ClipboardList,
	EarthIcon,
	FolderClosed,
	House,
	Menu,
	Settings,
	User,
	Users,
} from "lucide-react";

type ListItem = {
	text?: string;
	icon: React.ElementType;
};

const listItems: ListItem[] = [
	{
		text: "Home",
		icon: House,
	},
	{
		text: "Settings",
		icon: Settings,
	},
	{
		text: "Users",
		icon: Users,
	},
	{
		text: "Tasks",
		icon: ClipboardList,
	},
	{
		text: "Folder",
		icon: FolderClosed,
	},
];

export default function NavSidebar() {
	const { getButtonProps, isOpen } = useDisclosure();
	const buttonProps = getButtonProps();

	return (
		<>
			<Flex
				as="nav"
				alignItems="center"
				justifyContent="space-between"
				h="16"
				py="2.5"
				pr="2.5"
			>
				<HStack spacing={2}>
					<IconButton
						{...buttonProps}
						_active="none"
						_focus="none"
						_hover="none"
						fontSize="18px"
						variant="ghost"
						icon={<Menu size="20" />}
						aria-label="open menu"
					/>
					<Heading as="h1" size="md">
						Brand
					</Heading>
				</HStack>
				<HStack spacing="1">
					<IconButton
						variant="ghost"
						isRound={true}
						size="md"
						aria-label="earth icon"
						icon={<EarthIcon size="20" />}
					/>
					<IconButton
						isRound={true}
						size="md"
						aria-label="user icon"
						icon={<User size="20" />}
					/>
				</HStack>
			</Flex>
			<HStack align="start" spacing={0}>
				<Box
					as="aside"
					minH="90vh"
					w={isOpen ? 72 : 12}
					borderRight="2px"
					borderColor={useColorModeValue("gray.200", "gray.900")}
					transition="width 0.25s ease"
				>
					<List spacing={0} p="0.5">
						{listItems.map((item, index) => (
							<ListElement
								key={index}
								icon={item.icon}
								text={isOpen ? item.text : ""}
							/>
						))}
					</List>
				</Box>
				<Flex
					as="main"
					w="full"
					minH="90vh"
					align="center"
					justify="center"
					bg={useColorModeValue("gray.50", "gray.900")}
				>
					<Box textAlign="center">
						<Heading as="h3">Main Heading</Heading>
						<Text>Empty Main Content</Text>
					</Box>
				</Flex>
			</HStack>
		</>
	);
}

const ListElement = ({ icon, text }: ListItem) => {
	return (
		<ListItem
			as={HStack}
			spacing={0}
			h="10"
			pl="2.5"
			cursor="pointer"
			_hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
			rounded="md"
		>
			<ListIcon boxSize={5} as={icon} />
			{text && <Text>{text}</Text>}
		</ListItem>
	);
};

export const NavSidebarString = `import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import {
  ClipboardList,
  EarthIcon,
  FolderClosed,
  House,
  Menu,
  Settings,
  User,
  Users,
} from "lucide-react";

type ListItem = {
  text?: string;
  icon: React.ElementType;
};

const listItems: ListItem[] = [
  {
    text: "Home",
    icon: House,
  },
  {
    text: "Settings",
    icon: Settings,
  },
  {
    text: "Users",
    icon: Users,
  },
  {
    text: "Tasks",
    icon: ClipboardList,
  },
  {
    text: "Folder",
    icon: FolderClosed,
  },
];

export default function NavSidebar() {
  const { getButtonProps, isOpen } = useDisclosure();
  const buttonProps = getButtonProps();

  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        h="16"
        py="2.5"
        pr="2.5"
      >
        <HStack spacing={2}>
          <IconButton
            {...buttonProps}
            _active="none"
            _focus="none"
            _hover="none"
            fontSize="18px"
            variant="ghost"
            icon={<Menu size="20" />}
            aria-label="open menu"
          />
          <Heading as="h1" size="md">
            Brand
          </Heading>
        </HStack>
        <HStack spacing="1">
          <IconButton
            variant="ghost"
            isRound={true}
            size="md"
            aria-label="earth icon"
            icon={<EarthIcon size="20" />}
          />
          <IconButton
            isRound={true}
            size="md"
            aria-label="user icon"
            icon={<User size="20" />}
          />
        </HStack>
      </Flex>
      <HStack align="start" spacing={0}>
        <Box
          as="aside"
          minH="90vh"
          w={isOpen ? 72 : 12}
          borderRight="2px"
          borderColor={useColorModeValue("gray.200", "gray.900")}
          transition="width 0.25s ease"
        >
          <List spacing={0} p="0.5">
            {listItems.map((item, index) => (
              <ListElement
                key={index}
                icon={item.icon}
                text={isOpen ? item.text : ""}
              />
            ))}
          </List>
        </Box>
        <Flex
          as="main"
          w="full"
          minH="90vh"
          align="center"
          justify="center"
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          <Box textAlign="center">
            <Heading as="h3">Main Heading</Heading>
            <Text>Empty Main Content</Text>
          </Box>
        </Flex>
      </HStack>
    </>
  );
}

const ListElement = ({ icon, text }: ListItem) => {
  return (
    <ListItem
      as={HStack}
      spacing={0}
      h="10"
      pl="2.5"
      cursor="pointer"
      _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
      rounded="md"
    >
      <ListIcon boxSize={5} as={icon} />
      {text && <Text>{text}</Text>}
    </ListItem>
  );
};`