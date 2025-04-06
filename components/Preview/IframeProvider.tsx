"use client";

import { theme as baseTheme } from "@/app/theme";
import {
	ChakraProvider,
	ColorModeProvider,
	EnvironmentProvider,
	extendTheme,
} from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Iframe, { FrameContextConsumer } from "react-frame-component";

export const IframeProvider = (
	props: React.PropsWithChildren & { colorMode: "light" | "dark" }
) => {
	const { children, colorMode = "light" } = props;
	return (
		<Iframe width="100%" height="100%">
			<FrameContextConsumer>
				{(frame) => {
					const head = frame.document?.head;
					if (!head) return null;

					const iframeTheme = extendTheme({
						...baseTheme,
						config: {
							...baseTheme.config,
							initialColorMode: colorMode,
						},
					});

					return (
						<CacheProvider value={createCacheFn(head)}>
							<EnvironmentProvider>
								<ColorModeProvider
									value={colorMode}
									options={{ useSystemColorMode: false }}
								>
									<ChakraProvider theme={iframeTheme}>{children}</ChakraProvider>
								</ColorModeProvider>
							</EnvironmentProvider>
						</CacheProvider>
					);
				}}
			</FrameContextConsumer>
		</Iframe>
	);
};

function memoize<T extends object, R>(func: (arg: T) => R): (arg: T) => R {
	const cache = new WeakMap<T, R>();
	return (arg: T) => {
		if (cache.has(arg)) return cache.get(arg)!;
		const ret = func(arg);
		cache.set(arg, ret);
		return ret;
	};
}

const createCacheFn = memoize((container: HTMLElement) =>
	createCache({ container, key: "frame" })
);
