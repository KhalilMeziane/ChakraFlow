import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auth Forms Blocks',
  description: 'Reusable authentication form blocks designed for consistency and usability across the system.',
  keywords: 'authentication, UI components, auth forms, login, signup, design system, chakra ui'
}
import Header from "./components/Header";
import Blocks from "./components/Blocks";

export default function AuthForms() {
	return (
		<>
			<Header />
			<main>
				<Blocks />
			</main>
		</>
	);
}
