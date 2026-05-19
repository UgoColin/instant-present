import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import React from 'react'
import './styles.css'

const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-body-face',
})

const subtitleFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-subtitle-face',
})

const titleFont = localFont({
  src: '../../../public/fonts/wishper-script.woff',
  variable: '--font-script-face',
})

export const metadata: Metadata = {
  description: 'Base de site vitrine en Next.js avec Payload CMS et Tailwind CSS.',
  title: 'Instant Present',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={`${bodyFont.variable} ${subtitleFont.variable} ${titleFont.variable}`} lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
