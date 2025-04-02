import type { Metadata } from "next";

import { Providers } from "./providers";
import { fonts } from "./fonts";

export const metadata: Metadata = {
	title: "Chakra Flow",
	description: "The Ultimate Chakra UI Dashboard Template and Toolkit",
	keywords: "Chakra UI, Dashboard, React.js, Components",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fonts.poppins.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
