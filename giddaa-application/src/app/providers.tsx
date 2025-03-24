"use client";

import type React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";

const theme = extendTheme({
    colors: {
        brand: {
            500: "#2C6E31",
            600: "#235A28",
        },
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
});



const emotionCache = createCache({ key: "chakra" });

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={emotionCache}>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}


