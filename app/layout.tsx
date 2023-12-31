import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({weight: "500", subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Conference Paper Review System',
  description: 'created by Rob Kokochak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
