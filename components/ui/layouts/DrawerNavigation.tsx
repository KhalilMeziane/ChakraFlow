import {
	Box,
	Drawer,
	DrawerContent,
	Flex,
	HStack,
	Heading,
	IconButton,
	List,
	ListIcon,
	ListItem,
	Text,
	useBreakpointValue,
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
	X,
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

export default function DrawerNavigation() {
	const { getButtonProps, isOpen, onClose } = useDisclosure();
	const buttonProps = getButtonProps();

	const currentsBreakpoint = useBreakpointValue({ lg: "lg" }, { ssr: false });
	if (currentsBreakpoint === "lg" && isOpen) {
		onClose();
	}

	return (
		<>
			<Flex
				as="nav"
				alignItems="center"
				justifyContent={{ base: "space-between", lg: "flex-end" }}
				h="10vh"
				p="2.5"
			>
				<HStack spacing={2} display={{ base: "flex", lg: "none" }}>
					<IconButton
						{...buttonProps}
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
				<Aside
					onClose={onClose}
					display={{ base: "none", lg: "block" }}
				/>
				<Drawer
					autoFocus={false}
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					returnFocusOnClose={false}
					onOverlayClick={onClose}
					size="full"
				>
					<DrawerContent overflow="hidden">
						<Aside onClose={onClose} isOpen={isOpen} />
					</DrawerContent>
				</Drawer>
				<Flex
					as="main"
					ml={{ base: 0, lg: "60" }}
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

type AsideProps = {
	display?: {
		base: string;
		lg: string;
	};
	onClose: () => void;
	isOpen?: boolean;
};

const Aside = ({ onClose, isOpen, ...rest }: AsideProps) => {
	return (
		<Box
			as="aside"
			borderRight="2px"
			borderColor={useColorModeValue("gray.200", "gray.900")}
			w={{ base: "100%", lg: 60 }}
			top="0"
			pos="fixed"
			h="100%"
			minH="100vh"
			zIndex={99}
			{...rest}
		>
			<HStack p="2.5" h="10vh" justify="space-between">
				<Heading as="h1" size="md">
					Brand
				</Heading>
				<IconButton
					onClick={onClose}
					display={isOpen ? "flex" : "none"}
					fontSize="18px"
					variant="ghost"
					icon={<X size="20" />}
					aria-label="open menu"
				/>
			</HStack>
			<Box>
				<List spacing={0} p="0.5">
					{listItems.map((item, index) => (
						<ListElement
							key={index}
							icon={item.icon}
							text={item.text}
						/>
					))}
				</List>
			</Box>
		</Box>
	);
};

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

export const DrawerNavigationString =`import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Heading,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
  useBreakpointValue,
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
  X,
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

export default function DrawerNavigation() {
  const { getButtonProps, isOpen, onClose } = useDisclosure();
  const buttonProps = getButtonProps();

  const currentsBreakpoint = useBreakpointValue({ lg: "lg" }, { ssr: false });
  if (currentsBreakpoint === "lg" && isOpen) {
    onClose();
  }

  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent={{ base: "space-between", lg: "flex-end" }}
        h="10vh"
        p="2.5"
      >
        <HStack spacing={2} display={{ base: "flex", lg: "none" }}>
          <IconButton
            {...buttonProps}
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
        <Aside
          onClose={onClose}
          display={{ base: "none", lg: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent overflow="hidden">
            <Aside onClose={onClose} isOpen={isOpen} />
          </DrawerContent>
        </Drawer>
        <Flex
          as="main"
          ml={{ base: 0, lg: "60" }}
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

type AsideProps = {
  display?: {
    base: string;
    lg: string;
  };
  onClose: () => void;
  isOpen?: boolean;
};

const Aside = ({ onClose, isOpen, ...rest }: AsideProps) => {
  return (
    <Box
      as="aside"
      borderRight="2px"
      borderColor={useColorModeValue("gray.200", "gray.900")}
      w={{ base: "100%", lg: 60 }}
      top="0"
      pos="fixed"
      h="100%"
      minH="100vh"
      zIndex={99}
      {...rest}
    >
      <HStack p="2.5" h="10vh" justify="space-between">
        <Heading as="h1" size="md">
          Brand
        </Heading>
        <IconButton
          onClick={onClose}
          display={isOpen ? "flex" : "none"}
          fontSize="18px"
          variant="ghost"
          icon={<X size="20" />}
          aria-label="open menu"
        />
      </HStack>
      <Box>
        <List spacing={0} p="0.5">
          {listItems.map((item, index) => (
            <ListElement
              key={index}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

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
};`;