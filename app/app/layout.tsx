
import type { Metadata } from 'next'
import { Inter, Crimson_Pro } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'], 
  variable: '--font-crimson',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'ChessMaster Academy | Learn Chess From Beginner to Master',
  description: 'Comprehensive chess learning platform featuring openings, strategies, checkmate patterns, playing styles, and famous chess personalities. Perfect for beginner to intermediate players.',
  keywords: 'chess, chess openings, chess strategies, checkmate patterns, chess learning, chess academy, chess tutorial, chess master',
  authors: [{ name: 'ChessMaster Academy' }],
  openGraph: {
    title: 'ChessMaster Academy | Learn Chess From Beginner to Master',
    description: 'Master chess with our comprehensive guides on openings, strategies, and famous players.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChessMaster Academy | Learn Chess From Beginner to Master',
    description: 'Master chess with our comprehensive guides on openings, strategies, and famous players.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimsonPro.variable} font-sans antialiased wooden-texture min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
