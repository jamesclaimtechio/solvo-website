import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solvo Solutions | Fair Redress, Done Right | FCA Regulated Claims Management',
  description: 'Solvo Solutions is an FCA-regulated claims-management firm devoted to advancing consumer justice—from mis-sold motor finance to unsafe housing—through ethical, transparent, and tech-driven processes.',
  keywords: 'claims management, consumer justice, motor finance, housing disrepair, FCA regulated, compensation claims, consumer redress',
  authors: [{ name: 'Solvo Solutions' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Solvo Solutions | Fair Redress, Done Right',
    description: 'FCA-regulated claims-management firm specializing in consumer justice and redress.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solvo Solutions | Fair Redress, Done Right',
    description: 'FCA-regulated claims-management firm specializing in consumer justice and redress.',
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0ea5e9',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}