import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOC Analyst Portfolio | Cybersecurity Professional',
  description: 'Portfolio showcasing SOC analyst skills, projects, and cybersecurity expertise',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
