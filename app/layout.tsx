import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rahul Kumar Singh - Full Stack Developer, Systems Engineer",
  description:
    "Portfolio of Rahul Kumar Singh - Full Stack Developer and Systems Engineer specializing in scalable solutions and cloud technologies.",
  keywords: "Full Stack Developer, Systems Engineer, AWS, Node.js, Golang, AI/ML, Rahul Kumar Singh",
  authors: [{ name: "Rahul Kumar Singh" }],
  openGraph: {
    title: "Rahul Kumar Singh - Full Stack Developer, Systems Engineer",
    description:
      "Portfolio of Rahul Kumar Singh - Full Stack Developer and Systems Engineer specializing in scalable solutions and cloud technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
