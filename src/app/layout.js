import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ui/theme-provider"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <footer className="flex items-center justify-center p-4 pt-12">
                        Made with ❤️ by Ivan Mayta
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    )
}
