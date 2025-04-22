"use client";

import { ReactNode, useState } from "react";
import {
	Box,
	Divider,
	Heading,
	HStack,
	IconButton,
	useColorModeValue,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	useColorMode,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import {
	Blocks,
	Maximize,
	Monitor,
	PanelBottomClose,
	Smartphone,
	Tablet,
	GripVertical,
} from "lucide-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { IframeProvider } from "./IframeProvider";
import { SyntaxHighlighter } from "./SyntaxHighlighter";

type DevicePreset = "mobile" | "tablet" | "desktop";
const devicePresets = {
	mobile: 375,
	tablet: 768,
	desktop: 1280,
};

const presetWidths = {
	mobile: 100,
	tablet: 50,
	desktop: 35,
};

interface IPreviewProps {
	defaultWidth?: number;
	Component: ReactNode;
	code: string;
	title: string;
}

export default function NewPreview({
	defaultWidth = 1280,
	Component,
	code,
	title,
}: IPreviewProps) {
	const [width, setWidth] = useState(defaultWidth);
	const [activePreset, setActivePreset] = useState<DevicePreset>("desktop");
	const { colorMode } = useColorMode();

	const setDevicePreset = (preset: DevicePreset) => {
		setActivePreset(preset);
		setWidth(devicePresets[preset]);
	};

	return (
		<Box
			bg={useColorModeValue("#fafafa", "#0f0f12")}
			borderColor={useColorModeValue("#eaeaec", "gray.800")}
			borderWidth="1.5px"
			rounded="md"
			mb="10"
		>
			<Tabs variant="enclosed" isLazy={true} defaultIndex={0}>
				<PreviewHeader
					title={title}
					activePreset={activePreset}
					setDevicePreset={setDevicePreset}
					Component={Component}
				/>
				<TabPanels bg={useColorModeValue("white", "#0a0a0a")}>
					<TabPanel
						style={{
							width: `${width}px`,
							maxWidth: "100%",
						}}
						h="80vh"
						maxH="80vh"
						p="0"
					>
						<PanelGroup direction="horizontal">
							<Panel
								defaultSize={100}
								minSize={presetWidths[activePreset] ?? 35}
								maxSize={100}
							>
								<IframeProvider colorMode={colorMode}>
									{Component}
								</IframeProvider>
							</Panel>
							<PanelResizeHandle>
								<Box
									bg={useColorModeValue("#e5e5e5", "#232323")}
									width="1px"
									h="full"
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<Box
										display="flex"
										flexDir="column"
										alignItems="center"
										justifyContent="center"
										cursor="col-resize"
										bg={useColorModeValue(
											"#e5e5e5",
											"#575757;"
										)}
										rounded="md"
										h="8"
										w="2.5"
									>
										<GripVertical size="14" />
									</Box>
								</Box>
							</PanelResizeHandle>
							<Panel collapsible={true}></Panel>
						</PanelGroup>
					</TabPanel>
					<TabPanel p="0" h="80vh" maxH="80vh">
						<SyntaxHighlighter
							code={code}
							language="js"
							showLineNumbers={true}
							colorMode="dark"
						/>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}

const PreviewHeader = ({
	title,
	activePreset,
	setDevicePreset,
	Component,
}: {
	title: string;
	activePreset: DevicePreset;
	setDevicePreset: (preset: DevicePreset) => void;
	Component: ReactNode;
}) => {
	return (
		<Box
			borderBottomWidth="1.5px"
			borderColor={useColorModeValue("#eaeaec", "gray.800")}
			p="3"
		>
			<HStack justify="space-between" flexWrap="wrap" gap="3">
				{/* title */}
				<Heading as="h3" fontSize="base" fontWeight="medium">
					<HStack gap="1">
						<Blocks size="16" />
						<span>{title}</span>
					</HStack>
				</Heading>

				{/* action buttons */}
				<HStack>
					{/* tabs */}
					<PreviewTabs />

					{/* devices */}
					<Divider
						orientation="vertical"
						h="24px"
						borderColor={useColorModeValue("gray.500", "gray.300")}
					/>
					<Devices
						setDevicePreset={setDevicePreset}
						activeDevice={activePreset}
					/>

					{/* full preview */}
					<Divider
						orientation="vertical"
						h="24px"
						borderColor={useColorModeValue("gray.500", "gray.300")}
					/>
					<FullPreviewModal Component={Component} />
				</HStack>
			</HStack>
		</Box>
	);
};

const Devices = ({
	activeDevice,
	setDevicePreset,
}: {
	activeDevice: string;
	setDevicePreset: (preset: DevicePreset) => void;
}) => {
	return (
		<HStack gap="1.5">
			<IconButton
				aria-label="mobile device"
				icon={<Smartphone size="16" />}
				size="xs"
				variant="none"
				color={activeDevice === "mobile" ? "#61c9cb" : ""}
				onClick={() => setDevicePreset("mobile")}
				_hover={{ color: useColorModeValue("#61c9cb", "#478e8e") }}
			/>

			<IconButton
				aria-label="tablet device"
				icon={<Tablet size="16" />}
				size="xs"
				variant="none"
				color={activeDevice === "tablet" ? "#61c9cb" : ""}
				onClick={() => setDevicePreset("tablet")}
				_hover={{ color: useColorModeValue("#61c9cb", "#478e8e") }}
			/>

			<IconButton
				aria-label="desktop device"
				icon={<Monitor size="16" />}
				size="xs"
				variant="none"
				color={activeDevice === "desktop" ? "#61c9cb" : ""}
				onClick={() => setDevicePreset("desktop")}
				_hover={{ color: useColorModeValue("#61c9cb", "#478e8e") }}
			/>
		</HStack>
	);
};

const PreviewTabs = () => {
	return (
		<TabList maxW="lg" border="none">
			<Tab
				fontSize="sm"
				px="2"
				py="1"
				rounded="md"
				_selected={{
					color: "white",
					bg: useColorModeValue("#61c9cb", "#478e8e"),
				}}
			>
				Preview
			</Tab>
			<Tab
				fontSize="sm"
				px="2"
				py="1"
				rounded="md"
				_selected={{
					color: "white",
					bg: useColorModeValue("#61c9cb", "#478e8e"),
				}}
			>
				Code
			</Tab>
		</TabList>
	);
};

const FullPreviewModal = ({ Component }: { Component: ReactNode }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<IconButton
				aria-label="full screen"
				icon={<Maximize size="16" />}
				size="xs"
				variant="none"
				onClick={() => onOpen()}
				_hover={{ color: useColorModeValue("#61c9cb", "#478e8e") }}
			/>
			<Modal
				onClose={onClose}
				size={"full"}
				isOpen={isOpen}
				scrollBehavior="inside"
				isCentered
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<ModalContent position="relative">
					<ModalCloseButton
						bg={useColorModeValue("#22272b", "white")}
						color={useColorModeValue("white", "#22272b")}
						zIndex={99}
						position="absolute"
						top="none"
						right="25px"
						bottom="25px"
						rounded="md"
						size="lg"
					>
						<PanelBottomClose size="18" />
					</ModalCloseButton>
					<ModalBody p="0">{Component}</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
