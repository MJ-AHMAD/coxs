import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OpenSourceBanner } from "@/components/open-source-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Trusted Ally - Cox's Bazar District Management",
  description: "Comprehensive open source management system for Cox's Bazar district",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OpenSourceBanner />
        <Navbar />
        <main className="min-h-screen p-4 md:p-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
