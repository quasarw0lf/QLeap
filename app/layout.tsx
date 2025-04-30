import type React from "react"
import { Inter } from "next/font/google"
import "../src/index.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "QLeap - Cybersecurity Training",
  description:
    "QLeap - Cybersecurity Training That Accelerates Your Future. Hands-on training in VAPT, SOC, GRC, Red Teaming, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
