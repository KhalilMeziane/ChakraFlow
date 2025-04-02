"use client";

import Preview from "@/components/Preview/Preview";
import {
	ContainerDoubleStack,
	ContainerDoubleStackString,
	DrawerNavigation,
	DrawerNavigationString,
	FullWidthDoubleStack,
	FullWidthDoubleStackString,
	NavSidebar,
	NavSidebarString,
	ToggleAsideBar,
	ToggleAsideBarString,
	ToggleDrawerNavigation,
	ToggleDrawerNavigationString,
} from "@/components/ui/layouts";
import {
	Box,
	Container,
	Heading,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Blocks() {
	return (
		<Box as="section" py="5" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="7xl">
				<Block
					Component={<ToggleAsideBar />}
					code={ToggleAsideBarString}
					title="Toggle Aside Bar"
					hash="#toggle-aside-bar"
				/>

				<Block
					Component={<NavSidebar />}
					code={NavSidebarString}
					title="Nav Side Bar"
					hash="#nav-side-bar-String"
				/>

				<Block
					Component={<DrawerNavigation />}
					code={DrawerNavigationString}
					title="Drawer Navigation"
					hash="#drawer-navigation"
				/>

				<Block
					Component={<ContainerDoubleStack />}
					code={ContainerDoubleStackString}
					title="Container Double Stack"
					hash="#container-double-stack"
				/>

				<Block
					Component={<FullWidthDoubleStack />}
					code={FullWidthDoubleStackString}
					title="Full Width Double Stack"
					hash="#full-width-double-stack"
				/>

				<Block
					Component={<ToggleDrawerNavigation />}
					code={ToggleDrawerNavigationString}
					title="Toggle Drawer Navigation"
					hash="#toggle-drawer-navigation"
				/>
			</Container>
		</Box>
	);
}

const Block = ({
	Component,
	code,
	title,
	hash,
}: {
	Component: ReactNode;
	code: string;
	title: string;
	hash: string;
}) => {
	return (
		<Box mb="6" bg={useColorModeValue("white", "#0a0a0a")} id={hash}>
			<Link href={hash}>
				<Heading as="h3" fontSize="xl" fontWeight="semibold" mb="2">
					#{title}
				</Heading>
			</Link>
			<Preview Component={Component} code={code} />
		</Box>
	);
};
