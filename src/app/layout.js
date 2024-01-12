import { Inter } from 'next/font/google'

import "@/styles/globals.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MLSA UET Taxila',
  description: '',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <title>MLSA UET Taxila</title>
      <link rel="icon" href="./mlsa-logo.ico" />

    </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
