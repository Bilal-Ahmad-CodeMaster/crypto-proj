import Footer from './components/Footer'
import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Mining Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-auto lg:overflow">
        {children}
        {/* <div className='fixed bottom-0 w-full z-10'>
          <Footer />
        </div> */}
      </body>
    </html>
  )
}