"use client";

import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	HStack,
	IconButton,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { SyntaxHighlighter } from "./SyntaxHighlighter";
import { Smartphone, Tablet, Monitor } from "lucide-react";
import { IframeProvider } from "./IframeProvider";

interface CodePreviewTabsProps {
	defaultTab?: "preview" | "code";
	showLineNumbers?: boolean;
	language?: string;
	Component: ReactNode;
	defaultWidth?: number;
	code: string;
}

type DevicePreset = "mobile" | "tablet" | "desktop";

const devicePresets = {
	mobile: 375,
	tablet: 768,
	desktop: 1280,
};

export default function Preview({
	defaultWidth = 1280,
	Component,
	defaultTab = "code",
	code,
}: CodePreviewTabsProps) {
	const [activePreset, setActivePreset] = useState<DevicePreset>("desktop");
	const [width, setWidth] = useState(defaultWidth);
	const { colorMode } = useColorMode()

	const setDevicePreset = (preset: DevicePreset) => {
		setActivePreset(preset);
		setWidth(devicePresets[preset]);
	};

	return (
		<Tabs
			variant="enclosed"
			isLazy={true}
			defaultIndex={defaultTab === "code" ? 1 : 0}
		>
			<HStack justify="space-between">
				<TabList maxW="lg">
					<Tab
						color={useColorModeValue("gray.600", "white")}
						fontSize="sm"
						px="2"
					>
						Preview
					</Tab>
					<Tab
						color={useColorModeValue("gray.600", "white")}
						fontSize="sm"
						px="2"
					>
						Code
					</Tab>
				</TabList>
				<HStack gap="1">
					<IconButton
						aria-label="mobile device"
						icon={<Smartphone size="14" />}
						size="sm"
						variant={
							activePreset === "mobile" ? "solid" : "outline"
						}
						onClick={() => setDevicePreset("mobile")}
					/>

					<IconButton
						aria-label="tablet device"
						icon={<Tablet size="14" />}
						size="sm"
						variant={
							activePreset === "tablet" ? "solid" : "outline"
						}
						onClick={() => setDevicePreset("tablet")}
					/>

					<IconButton
						aria-label="desktop device"
						icon={<Monitor size="14" />}
						size="sm"
						variant={
							activePreset === "desktop" ? "solid" : "outline"
						}
						onClick={() => setDevicePreset("desktop")}
					/>
				</HStack>
			</HStack>

			<TabPanels>
				<TabPanel
					border="1px"
					borderColor={useColorModeValue("gray.200", "gray.700")}
					p="2"
					style={{
						width: `${width}px`,
						maxWidth: "100%",
					}}
					h="70vh"
					maxH="70vh"
				>
					<IframeProvider colorMode={colorMode}>{Component}</IframeProvider>
				</TabPanel>
				<TabPanel p="0.5" h="70vh" maxH="70vh">
					<SyntaxHighlighter
						code={code}
						language="js"
						showLineNumbers={false}
						colorMode="dark"
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
