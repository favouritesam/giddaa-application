// "use client"
//
// import type React from "react"
//
// import { ChakraProvider, extendTheme } from "@chakra-ui/react"
// import {CacheProvider} from "@emotion/react";
//
//
// const theme = extendTheme({
//     colors: {
//         brand: {
//             500: "#2C6E31",
//             600: "#235A28",
//         },
//     },
//     styles: {
//         global: {
//             body: {
//                 bg: "white",
//                 color: "gray.800",
//             },
//         },
//     },
// })
//
// export function Providers({ children }: { children: React.ReactNode }) {
//     return (
//         <CacheProvider value={null}>
//             <ChakraProvider theme={theme}>{children}</ChakraProvider>
//         </CacheProvider>
//     )
// }

"use client"

import type React from "react"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {CacheProvider} from "@emotion/react";


const theme = extendTheme({
    colors: {
        brand: {
            500: "#2C6E31",
            600: "#235A28",
        },
    },
})

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={null}>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    )
}

