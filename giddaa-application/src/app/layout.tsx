import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import {Providers} from "@/app/providers";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Rddaa - Real Estate Management",
    description: "Residência Moderna Smart",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
        </html>
    )
}

