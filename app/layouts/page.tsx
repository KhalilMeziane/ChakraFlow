import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Layouts',
  description: 'Layouts help structure and organize content across pages, ensuring consistency and usability in the system.',
	keywords: 'layouts, UI components, structure, organization, design system, chakra ui'
}

import Header from "./components/Header";
import Blocks from "./components/Blocks";

export default function Layouts() {
	return (
		<>
			<Header />
			<main>
				<Blocks />
			</main>
		</>
	);
}
