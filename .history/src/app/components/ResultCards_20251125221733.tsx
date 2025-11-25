'use client'
import React from 'react'

interface StatRowProps {
    title: string;
    money: string;
    mined: string;
    powerCost: string;
    positive?: boolean;
}

function StatRow({ title, money, mined, powerCost, positive = true }: StatRowProps) {
    return (
        <div className="mb-4 rounded-xl overflow-hidden flex border border-gray-200 bg-white hover:shadow-md transition-shadow">
            <div className={`w-56 p-6 text-white ${positive ? 'bg-linear-to-br from-green-600 to-green-700' : 'bg-linear-to-br from-red-500 to-red-600'}`}>
                <div className="text-xs font-medium bg-white/20 inline-block px-3 py-1 rounded-full mb-3">{title}</div>
                <div className="text-2xl font-bold mb-1">{money}</div>
                <div className="text-xs opacity-90">Pool Fee $0.26</div>
            </div>

            <div className="flex-1 p-6 grid grid-cols-3 items-center gap-6">
                <div className="text-center">
                    <div className={`text-lg font-semibold ${positive ? 'text-green-700' : 'text-red-600'}`}>{mined}</div>
                    <div className="text-xs text-gray-500 mt-1">Mined/{title.toLowerCase()}</div>
                </div>
                <div className="text-right col-span-2">
                    <div className={`text-lg font-semibold ${positive ? 'text-green-700' : 'text-red-600'}`}>{powerCost}</div>
                    <div className="text-xs text-gray-500 mt-1">Power cost/{title.toLowerCase()}</div>
                </div>
            </div>
        </div>
    )
}

export default function ResultCards({ active }: { active: string }) {
    const positive = active !== 'etc'

    return (
        <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className={`rounded-2xl p-3 ${positive ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200' : 'bg-gradient-to-br from-red-50 to-red-100 border border-red-200'}`}>
                    <div className={`text-xs bg-white sha font-semibold ${positive ? ' text-green-800' : ' text-red-800'} inline-block px-4 py-2 rounded-full`}>
                        PROFIT RATIO PER DAY
                    </div>
                    <div className={`text-4xl font-bold mt-6 ${positive ? 'text-green-700' : 'text-red-700'}`}>
                        {positive ? '73%' : '-70%'}
                    </div>
                </div>

                <div className={`rounded-2xl p-3 ${positive ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200' : 'bg-gradient-to-br from-red-50 to-red-100 border border-red-200'}`}>
                    <div className={`text-xs font-semibold ${positive ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'} inline-block px-4 py-2 rounded-full`}>
                        PROFIT PER MONTH
                    </div>
                    <div className={`text-4xl font-bold mt-6 ${positive ? 'text-green-700' : 'text-red-700'}`}>
                        {positive ? '$94.64' : '$ -90.66'}
                    </div>
                </div>
            </div>

            <div>
                <StatRow title="Day" money="$3.15" mined="BTC 0.00008660" powerCost="$4.32" positive={positive} />
                <StatRow title="Week" money="$22.08" mined="BTC 0.0006062" powerCost="$30.24" positive={positive} />
                <StatRow title="Month" money="$94.64" mined="BTC 0.002598" powerCost="$129.60" positive={positive} />
                <StatRow title="Year" money="$1,151.46" mined="BTC 0.03161" powerCost="$1,576.80" positive={positive} />
            </div>
        </div>
    )
}