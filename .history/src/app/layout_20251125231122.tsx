import Footer from './components/footer'
import './globals.css'
import React from 'react'


export const metadata = {
  title: 'Mining Dashboard',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer
      </body>
    </html>
  )
}