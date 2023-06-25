import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { NavBar } from '@/components/NavBar'
import { NavBarPhone } from '@/components/NavBarPhone'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App Masters Play',
  description: 'App Masters Play',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen w-screen bg-black md:flex-col font-[${inter.className}]`}
      >
        <NavBarPhone />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
