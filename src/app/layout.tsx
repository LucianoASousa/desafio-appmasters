import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App Masters Play',
  description: 'App Masters Play',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen w-screen bg-black font-[${inter.className}]`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
