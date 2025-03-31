import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Barrington Legal',
  description: 'Specialized estate planning and elder law services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* The Header component will be added next */}
          <main className="flex-grow">
            {children}
          </main>
          {/* The Footer component will be added next */}
        </div>
      </body>
    </html>
  )
} 