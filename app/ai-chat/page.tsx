import { Metadata } from "next";


export const metadata: Metadata = {
	title: 'AI Chat',
	description: 'An AI-powered chat interface to assist users with various queries, from weather updates to book recommendations.',
	keywords: 'AI chat, chatbot, conversational UI, user assistance, interactive design'
  };
import Header from "./components/Header";
import Blocks from "./components/Blocks";

export default function AiChat() {
	return (
		<>
			<Header />
			<main>
				<Blocks />
			</main>
		</>
	);
}
