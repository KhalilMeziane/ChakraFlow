"use client";

import BlockCard from "@/components/BlockCard";
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
import { Box, Container, useColorModeValue } from "@chakra-ui/react";

export default function Blocks() {
	return (
		<Box as="section" py="5" bg={useColorModeValue("white", "#0a0a0a")}>
			<Container maxW="7xl">
				<BlockCard
					Component={<ToggleAsideBar />}
					code={ToggleAsideBarString}
					title="Toggle Aside Bar"
					hash="#toggle-aside-bar"
				/>

				<BlockCard
					Component={<NavSidebar />}
					code={NavSidebarString}
					title="Nav Side Bar"
					hash="#nav-side-bar-String"
				/>

				<BlockCard
					Component={<DrawerNavigation />}
					code={DrawerNavigationString}
					title="Drawer Navigation"
					hash="#drawer-navigation"
				/>

				<BlockCard
					Component={<ContainerDoubleStack />}
					code={ContainerDoubleStackString}
					title="Container Double Stack"
					hash="#container-double-stack"
				/>

				<BlockCard
					Component={<FullWidthDoubleStack />}
					code={FullWidthDoubleStackString}
					title="Full Width Double Stack"
					hash="#full-width-double-stack"
				/>

				<BlockCard
					Component={<ToggleDrawerNavigation />}
					code={ToggleDrawerNavigationString}
					title="Toggle Drawer Navigation"
					hash="#toggle-drawer-navigation"
				/>
			</Container>
		</Box>
	);
}
