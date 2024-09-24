import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

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
            <body className={`${alice.variable}  antialiased`}>{children}</body>
        </html>
    )
}
