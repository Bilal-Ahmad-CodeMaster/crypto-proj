'use client'
import React from 'react'


function StatRow({ title, money, mined, powerCost, positive = true }: any) {
    return (
        <div className="mb-3 rounded-lg overflow-hidden flex border border-gray-200 bg-white">
            <div className={`w-56 p-4 text-white ${positive ? 'bg-green-600' : 'bg-red-600'} profit-left`}>
                <div className="text-xs uppercase bg-black/10 inline-block px-3 py-1 rounded-full mb-2">{title}</div>
                <div className="text-2xl font-bold">{money}</div>
                <div className="text-xs mt-1 opacity-80">Pool Fee $ 0.26</div>
            </div>


            <div className="flex-1 p-4 grid grid-cols-3 items-center gap-4">
                <div className="text-center">
                    <div className={`text-lg font-semibold ${positive ? 'text-green-700' : 'text-red-600'}`}>{mined}</div>
                    <div className="text-xs text-gray-500">Mined/{title.toLowerCase()}</div>
                </div>
                <div className="text-right col-span-2">
                    <div className={`text-lg font-semibold ${positive ? 'text-green-700' : 'text-red-600'}`}>{powerCost}</div>
                    <div className="text-xs text-gray-500">Power cost/{title.toLowerCase()}</div>
                </div>
            </div>
        </div>
    )
}


export default function ResultCards({ active }: { active: string }) {
    // Example positive/negative toggles per currency
    const positive = active !== 'etc'


    return (
        <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`rounded-xl p-6 shadow-md ${positive ? 'bg-paleGreen' : 'bg-paleRed'}`}>
                    <div className="text-xs font-semibold bg-white/90 inline-block px-3 py-1 rounded-full shadow">PROFIT RATIO PER DAY</div>
                    <div className={`text-4xl font-bold mt-4 ${positive ? 'text-green-700' : 'text-red-700'}`}>{positive ? '73%' : '-70%'}</div>
                </div>


                <div className={`rounded-xl p-6 shadow-md ${positive ? 'bg-paleGreen' : 'bg-paleRed'}`}>
                    <div className="text-xs font-semibold bg-white/90 inline-block px-3 py-1 rounded-full shadow">PROFIT PER MONTH</div>
                    <div className={`text-4xl font-bold mt-4 ${positive ? 'text-green-700' : 'text-red-700'}`}>{positive ? '$ 94.64' : '$ -90.66'}</div>
                </div>
            </div>


            <div>
                <StatRow title="Day" money="$ 3.15" mined="BTC 0.00008660" powerCost="$ 4.32" positive={positive} />
                <StatRow title="Week" money="$ 22.08" mined="BTC 0.0006062" powerCost="$ 30.24" positive={positive} />
                <StatRow title="Month" money="$ 94.64" mined="BTC 0.002598" powerCost="$ 129.60" positive={positive} />
                <StatRow title="Year" money="$ 1,151.46" mined="BTC 0.03161" powerCost="$ 1,576.80" positive={positive} />
            </div>
        </div>
    )
}