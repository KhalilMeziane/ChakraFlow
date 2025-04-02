"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Box, Button, useColorModeValue, Flex, Text } from "@chakra-ui/react";
import { Highlight, themes } from "prism-react-renderer";

interface SyntaxHighlighterProps {
	code: string;
	language: string;
	showLineNumbers?: boolean;
	colorMode?: "dark" | "light";
}

export function SyntaxHighlighter({
	code,
	language,
	showLineNumbers = true,
	colorMode,
}: SyntaxHighlighterProps) {
	const [copied, setCopied] = useState(false);

	const chakraColorMode = useColorModeValue("light", "dark");
	const actualColorMode = colorMode || chakraColorMode;
	const selectedTheme =
		actualColorMode === "dark" ? themes.nightOwl : themes.github;

	const bgColor = actualColorMode === "dark" ? "#011627" : "#f6f8fa";

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
	};

	return (
		<Box position="relative" borderRadius="sm" overflow="hidden">
			<Highlight theme={selectedTheme} code={code} language={language}>
				{({
					className,
					style,
					tokens,
					getLineProps,
					getTokenProps,
				}) => (
					<Box
						as="pre"
						p={4}
						overflowX="auto"
						overflowY="auto"
						fontSize="sm"
						bg={bgColor}
						borderRadius="md"
						className={className}
						style={style}
						h="60vh"
						maxH="60vh"
					>
						{tokens.map((line, i) => (
							<Flex {...getLineProps({ line, key: i })} key={i}>
								{showLineNumbers && (
									<Text
										as="span"
										width="8"
										textAlign="right"
										mr={4}
										userSelect="none"
										opacity={0.5}
										display="inline-block"
									>
										{i + 1}
									</Text>
								)}
								<Box>
									{line.map((token, key) => (
										<Text
											as="span"
											{...getTokenProps({ token, key })}
											key={key + i}
										/>
									))}
								</Box>
							</Flex>
						))}
					</Box>
				)}
			</Highlight>
			<Button
				size="sm"
				variant="ghost"
				_hover={{ bg: "none" }}
				position="absolute"
				top={2}
				right={2}
				onClick={copyToClipboard}
				aria-label="Copy code"
			>
				{copied ? (
					<Check color="#fff" size="16" />
				) : (
					<Copy color="#fff" size="16" />
				)}
			</Button>
		</Box>
	);
}
