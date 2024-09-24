import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const alice = localFont({
    src: "./fonts/Alice.ttf",
    variable: "--font-alice",
})

export const metadata: Metadata = {
    title: "Danyu Rajbahak",
    description: "Danyu Rajbahak's portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${alice.variable}  antialiased`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
