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
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import { ClipboardList, Earth, FolderClosed, House, Menu, Settings, User, Users, X } from "lucide-react";

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

export default function ToggleDrawerNavigation() {
	const { getButtonProps, isOpen, onClose } = useDisclosure();
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
						icon={<Earth size="20" />}
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
				<Drawer
					autoFocus={false}
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					returnFocusOnClose={false}
					onOverlayClick={onClose}
					size="xs"
				>
					<DrawerContent>
						<Aside onClose={onClose} />
					</DrawerContent>
				</Drawer>
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

const Aside = ({ onClose }: { onClose: () => void }) => {
	return (
		<Box
			borderRight="2px"
			borderColor={useColorModeValue("gray.200", "gray.900")}
		>
			<HStack p="2.5" justify="space-between">
				<Heading as="h1" size="md">
					Brand
				</Heading>
				<IconButton
					onClick={onClose}
					fontSize="18px"
					variant="ghost"
					icon={<X />}
					aria-label="open menu"
				/>
			</HStack>
			<Box as="aside" minH="90vh">
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

export const ToggleDrawerNavigationString = `import {
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
 useColorModeValue,
 useDisclosure,
} from "@chakra-ui/react";
import { ClipboardList, Earth, FolderClosed, House, Menu, Settings, User, Users, X } from "lucide-react";

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

export default function ToggleDrawerNavigation() {
	const { getButtonProps, isOpen, onClose } = useDisclosure();
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
						icon={<Earth size="20" />}
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
				<Drawer
					autoFocus={false}
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					returnFocusOnClose={false}
					onOverlayClick={onClose}
					size="xs"
				>
					<DrawerContent>
						<Aside onClose={onClose} />
					</DrawerContent>
				</Drawer>
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

const Aside = ({ onClose }: { onClose: () => void }) => {
	return (
		<Box
			borderRight="2px"
			borderColor={useColorModeValue("gray.200", "gray.900")}
		>
			<HStack p="2.5" justify="space-between">
				<Heading as="h1" size="md">
					Brand
				</Heading>
				<IconButton
					onClick={onClose}
					fontSize="18px"
					variant="ghost"
					icon={<X />}
					aria-label="open menu"
				/>
			</HStack>
			<Box as="aside" minH="90vh">
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
`