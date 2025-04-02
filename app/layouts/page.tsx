
export const metadata: Metadata = {
  title: 'Layouts',
  description: 'Layouts help structure and organize content across pages, ensuring consistency and usability in the system.',
	keywords: 'layouts, UI components, structure, organization, design system'
}
import { Metadata } from "next";
import Blocks from "./components/Blocks";
import Header from "./components/Header";

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
