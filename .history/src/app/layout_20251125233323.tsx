
import Footer from './components/Footer'
import './globals.css'
import React from 'react'


export const metadata = {
  title: 'Mining Dashboard',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className='h-[calc(100vh-155px)] pb-'>
          {children}
          </div>
        <div className='fixed bottom-0 w-full'>
          <Footer />
        </div>
      </body>
    </html>
  )
}