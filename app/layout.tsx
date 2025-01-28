import type React from "react"
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'VoSHOGUN Trade System',
  description: 'MLM system for VoSHOGUN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}