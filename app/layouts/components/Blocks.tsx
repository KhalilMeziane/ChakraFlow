"use client";

import NewPreview from "@/components/newPreview/Preview";
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
				<NewPreview
					Component={<ToggleAsideBar />}
					code={ToggleAsideBarString}
					title="Toggle Aside Bar"
				/>

				<NewPreview
					Component={<NavSidebar />}
					code={NavSidebarString}
					title="Nav Side Bar"
				/>

				<NewPreview
					Component={<DrawerNavigation />}
					code={DrawerNavigationString}
					title="Drawer Navigation"
				/>

				<NewPreview
					Component={<ContainerDoubleStack />}
					code={ContainerDoubleStackString}
					title="Container Double Stack"
				/>

				<NewPreview
					Component={<FullWidthDoubleStack />}
					code={FullWidthDoubleStackString}
					title="Full Width Double Stack"
				/>

				<NewPreview
					Component={<ToggleDrawerNavigation />}
					code={ToggleDrawerNavigationString}
					title="Toggle Drawer Navigation"
				/>
			</Container>
		</Box>
	);
}
