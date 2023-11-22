import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Author/Reviewer Dashboard',
  description: 'created by Rob Kokochak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
