import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from '@mantine/core'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className='w-full flex'>
          <Container className='w-1/4 bg-slate-400'>
            this is left side
          </Container>
          <Container className='w-3/4'>
            {children}
          </Container>
        </div>
      </body>
    </html>
  )
}
