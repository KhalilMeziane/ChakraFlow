export const metadata: Metadata = {
	title: {
		default: "Chakra Flow",
		template: "%s | Chakra Flow",
	},
	description: "The Ultimate Chakra UI Dashboard Template and Toolkit",
	keywords:
		"chakra ui dashboard, chakra ui components, next.js dashboard, chakra ui admin panel, chakra ui layout, chakra ui sidebar, chakra ui navbar, chakra ui cards, chakra ui tables, chakra ui widgets, chakra ui charts, chakra ui statistics, chakra ui modals, chakra ui forms, chakra ui buttons, chakra ui theme, chakra ui dark mode, chakra ui ui kit, chakra ui responsiveness, chakra ui best practices, chakra ui customization",
};

import { Metadata } from "next";
import Elements from "./components/Elements";
import Header from "./components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Elements />
			</main>
		</>
	);
}
