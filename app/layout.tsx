import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "QLeap Education | Cybersecurity Training by Quasar CyberTech",
  description:
    "QLeap Education offers professional cybersecurity training and development programs by Quasar CyberTech to help you advance your career in cybersecurity.",
  keywords:
    "QLeap Education, Quasar CyberTech, cybersecurity training, cybersecurity certification, security operations, cyber defense, information security",
  openGraph: {
    title: "QLeap Education | Cybersecurity Training by Quasar CyberTech",
    description:
      "QLeap Education offers professional cybersecurity training and development programs by Quasar CyberTech to help you advance your career in cybersecurity.",
    images: [{ url: "/logo.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo-shortcut.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
