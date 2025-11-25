'use client'
import React, { useState } from 'react'
import Tabs from './components/Tabs'
import HashingForm from './components/HashingForm'
import ResultCards from './components/ResultCards'
import Footer from './components/footer'


const currencies = [
  { id: 'btc', label: 'BTC' },
  { id: 'etc', label: 'ETC' },
  { id: 'xmr', label: 'XMR' },
  { id: 'zec', label: 'ZEC' },
  { id: 'dash', label: 'DASH' },
  { id: 'ltc', label: 'LTC' },
  { id: 'kas', label: 'KAS' }
]


export default function Page() {
  const [active, setActive] = useState('btc')


  return (
    <main className="min-h-screen p-8 bg-[#f3f5f7]">
      <div className="max-w-[1200px] mx-auto">
        <header className="flex items-center gap-6 mb-6">
          <h1 className="text-4xl font-extrabold text-black" style={{ fontFamily: '"Lobster", Roboto, Arial' }}>
            Currency
          </h1>
          <nav className="flex-1">
            <Tabs active={active} setActive={setActive} tabs={currencies} />
          </nav>
        </header>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <HashingForm active={active} />
          </div>


          <div className="lg:col-span-2">
            <ResultCards active={active} />
          </div>
        </div>
      </div>
    </main>
      <div>
        <Footer />
        </div>
  )
}